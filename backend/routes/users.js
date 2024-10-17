var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* GET users listing. */
//http://localhost:3000/users
router.get('/', function(req, res, next) {
  req.db.query('SELECT * FROM nguoidung', function (error, results, fields) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results); 
  });
});

/* API cập nhật trạng thái người dùng. */
//http://localhost:3000/users/status/id
router.put('/status/:userId', function(req, res, next) {
  const userId = req.params.userId;
  const { status } = req.body;

  // Kiểm tra trạng thái hợp lệ
  const validStatuses = ['đang hoạt động', 'đang hoạt động', 'đang bận', 'đang chờ '];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Trạng thái không hợp lệ' });
  }

  // Truy vấn cập nhật trạng thái trong MySQL
  req.db.query('UPDATE nguoidung SET status = ? WHERE id = ?', [status, userId], function(error, results) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Người dùng không tìm thấy' });
    }

    res.json({ message: 'Trạng thái người dùng đã được cập nhật', status });
  });
});


router.post('/register', (req, res) => {
  const { ten, email, mat_khau, vai_tro,trang_thai } = req.body;

  if (!ten || !email || !mat_khau || !vai_tro||!trang_thai) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPassword = bcrypt.hashSync(mat_khau, 10);

  req.db.query(
    'INSERT INTO NguoiDung (ten, email, mat_khau, vai_tro) VALUES (?, ?, ?, ?)',
    [ten, email, hashedPassword, vai_tro],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'User already exists or an error occurred' });
      res.status(201).json({ message: 'User registered successfully' });
    }
  );
});


// Đăng nhập người dùng và trả về JWT token
router.post('/login', (req, res) => {
  const { email, mat_khau } = req.body;

  if (!email || !mat_khau) {
    return res.status(400).json({ message: 'Email và mật khẩu là bắt buộc' });
  }
  req.db.query(
    'SELECT * FROM nguoidung WHERE email = ?',
    [email],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(400).json({ message: 'Email hoặc mật khẩu không đúng' });
      }

      const user = results[0];

      // So sánh mật khẩu
      const isPasswordValid = bcrypt.compareSync(mat_khau, user.mat_khau);

      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Email hoặc mật khẩu không đúng' });
      }

      // Tạo JWT token
      const token = jwt.sign(
        { id: user.id_nguoi_dung, email: user.email, vai_tro: user.vai_tro },
process.env.JWT_SECRET || 'your_jwt_secret',
        { expiresIn: '1h' } // Token hết hạn sau 1 giờ
      );

      // Trả về token
      res.status(200).json({
        message: 'Đăng nhập thành công',
        token: token
      });
    }
  );
});

// Middleware để xác thực token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Truy cập bị từ chối' });
  }

  // Kiểm tra tính hợp lệ của token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token không hợp lệ' });
    }

    req.user = user;
    next();
  });
};

router.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).json({ message: `Chào mừng ${req.user.email}!` });
});


// đặt lại mật khâur 
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: "ncb301104@gmail.com",
    pass:"osqx ueqr ohiu ghmd"
  }
});
const resetTokens = {};
router.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  // Kiểm tra xem email có tồn tại trong hệ thống hay không
  req.db.query('SELECT * FROM NguoiDung WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'Email không tồn tại' });
    }

    const user = results[0];
    
    // Tạo token đặt lại mật khẩu
    const Token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 3600000); // Token có thời hạn 1 giờ
    resetTokens[Token] = { userId: user.id_nguoi_dung, expiresAt };
    // Lưu token và thời gian hết hạn vào cơ sở dữ liệu
    // req.db.query('UPDATE NguoiDung SET reset_token = ?, reset_token_expiration = ? WHERE email = ?', 
    // [resetToken, tokenExpiration, email], (err, result) => {
    //   if (err) {
    //     return res.status(500).json({ message: 'Lỗi trong quá trình tạo token' });
    //   }

    const resetUrl = `http://localhost:3000/users/reset-password/${Token}`;
      // Cấu hình gửi email
    
    //   const mailOptions = {
    //     from: "ncb301104@gmail.com",
    //     to: email,
    //     subject: 'Đặt lại mật khẩu của bạn',
    //     text: `Nhấn vào liên kết sau để đặt lại mật khẩu: ${process.env.CLIENT_URL}/reset-password/${resetToken}`
    //   };

    //   // Gửi email
    //   transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       return res.status(500).json({ message: 'Không thể gửi email' });
    //     }
    //     res.status(200).json({ message: 'Email đặt lại mật khẩu đã được gửi!' });
    //   });
    // });
    const mailOptions = {
      to: email,
      subject: 'Yêu cầu đặt lại mật khẩu',
    html: `
      <table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding: 20px; background-color: #f2f2f2;">
            <h2>Cập nhật mật khẩu của bạn</h2>
            <p>Vui lòng nhập mật khẩu mới và xác nhận lại để cập nhật.</p>
            <form action="${resetUrl}" method="POST">
              <input type="hidden" name="token" value="{{reset_token}}">
              <div style="margin-bottom: 15px;">
                <label for="mat_khau">Mật khẩu mới:</label>
                <input type="password" id="mat_khau" name="mat_khau" required>
              </div>
              <div style="margin-bottom: 15px;">
                <label for="confirm-password">Xác nhận mật khẩu mới:</label>
                <input type="password" id="confirm-password" name="confirm_password" required>
              </div>
              <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer;">Cập nhật mật khẩu</button>
            </form>
            <p>Nếu bạn không yêu cầu điều này, vui lòng bỏ qua email này.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

    `,
};


  

  transporter.sendMail(mailOptions, (error) => {
      if (error) return res.status(500).json({ message: 'Đã xảy ra lỗi khi gửi email' });
      res.status(200).json({ message: 'Email đã được gửi. Kiểm tra hộp thư của bạn.' });
  });

  });
});


router.post('/reset-password/:token', (req, res) => {
  const { token } = req.params;
  const { mat_khau } = req.body;

  if (!mat_khau) {
      return res.status(400).json({ message: 'Mật khẩu mới là bắt buộc' });
  }

  // Kiểm tra xem token có tồn tại và còn hiệu lực không
  const tokenData = resetTokens[token];
  if (!tokenData || tokenData.expiresAt < Date.now()) {
      return res.status(400).json({ message: 'Mã th ông báo không hợp lệ hoặc đã hết hạn' });
  }

  const userId = tokenData.userId;
  const hashedPassword = bcrypt.hashSync(mat_khau, 10); // Băm mật khẩu mới

  // Cập nhật mật khẩu mới trong cơ sở dữ liệu
  req.db.query('UPDATE NguoiDung SET mat_khau = ? WHERE id_nguoi_dung = ?', [hashedPassword, userId], (error) => {
      if (error) return res.status(500).json({ message: 'Đã xảy ra lỗi' });

      // Xóa token khỏi bộ nhớ tạm thời
      delete resetTokens[token];

      res.status(200).json({ message: 'Mật khẩu đã được đặt lại thành công' });
  });
});


module.exports = router;
