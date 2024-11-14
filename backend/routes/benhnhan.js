var express = require('express');
var router = express.Router();


// Lấy danh sách bệnh nhân
router.get('/', (req, res) => {
  req.db.query('SELECT * FROM benh_nhan ', (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});


// Lấy thông tin bệnh nhân theo ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = `
     SELECT 
    bn.*, 
    tcs.*, 
    kdt.*, 
    tbl.*, 
    lst.*
FROM 
    benh_nhan AS bn
LEFT JOIN 
    thong_tin_chi_so_suc_khoe AS tcs ON bn.id = tcs.id_benh_nhan
LEFT JOIN 
    ke_hoach_dieu_tri AS kdt ON bn.id = kdt.id_benh_nhan
LEFT JOIN 
    thong_tin_benh_ly AS tbl ON bn.id = tbl.id_benh_nhan
LEFT JOIN 
    lich_su_su_dung_thuoc AS lst ON bn.id = lst.id_benh_nhan
WHERE 
    bn.id = ?;
  `;

  req.db.query(query, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Bệnh nhân không tồn tại' });
    }

    res.json(results[0]);
  });
});

// thêm bệnh nhân
router.post('/api/benh_nhan', (req, res) => {
  const { ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, email, anh } = req.body;

  // Kiểm tra xem các trường bắt buộc có được cung cấp không
  if (!ten || !ngay_sinh || !so_dien_thoai || !email) {
    return res.status(400).json({ error: "Các trường 'ten', 'ngay_sinh', 'so_dien_thoai', và 'email' là bắt buộc." });
  }

  // Câu lệnh SQL để thêm một bệnh nhân mới
  const query = `
    INSERT INTO benh_nhan (ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, email, anh)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  // Thực hiện truy vấn với dữ liệu từ yêu cầu
  req.db.query(query, [ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, email, anh], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Phản hồi lại sau khi thêm thành công
    res.status(201).json({
      message: 'Bệnh nhân đã được tạo thành công',
      id: results.insertId,
      ten,
      ngay_sinh,
      gioi_tinh,
      dia_chi,
      so_dien_thoai,
      email,
      anh
    });
  });
});




router.get('/tinh_trang_suc_khoe/:id_benh_nhan', (req, res) => {
  const patientId = req.params.id_benh_nhan;
  const query = 'SELECT * FROM thong_tin_tinh_trang_suc_khoe WHERE id_benh_nhan = ?';

  req.db.query(query, [patientId], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).json({ error: 'An error occurred while fetching health status data.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: `No health status found for patient with ID ${patientId}.` });
    }

    res.status(200).json(results);
  });
});
router.get('/thong_tin_chi_so_suc_khoe/:id_benh_nhan', (req, res) => {
  const patientId = req.params.id_benh_nhan;
  const query = 'SELECT * FROM thong_tin_chi_so_suc_khoe WHERE id_benh_nhan = ?';

  req.db.query(query, [patientId], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).json({ error: 'An error occurred while fetching health index data.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: `No health index data found for patient with ID ${patientId}.` });
    }

    res.status(200).json(results);
  });
});


module.exports = router;
