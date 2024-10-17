var express = require('express');
var router = express.Router();


// Lấy danh sách bệnh nhân
router.get('/', (req, res) => {
    req.db.query('SELECT * FROM ThongTinBenhNhan', (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    });
  });
  
  
// Lấy thông tin bệnh nhân theo ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    req.db.query('SELECT * FROM ThongTinBenhNhan WHERE id_benh_nhan = ?', [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.length === 0) return res.status(404).json({ message: 'Bệnh nhân không tồn tại' });
      res.json(results[0]);
    });
  });
  
  // Thêm bệnh nhân mới
  router.post('/', (req, res) => {
    const { ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, so_bao_hiem } = req.body;
    req.db.query('INSERT INTO ThongTinBenhNhan (ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, so_bao_hiem) VALUES (?, ?, ?, ?, ?, ?)', 
      [ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, so_bao_hiem], 
      (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({ id_benh_nhan: results.insertId, message: 'Bệnh nhân đã được thêm thành công' });
    });
  });
  
  // Cập nhật thông tin bệnh nhân
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, so_bao_hiem } = req.body;
    req.db.query('UPDATE ThongTinBenhNhan SET ten = ?, ngay_sinh = ?, gioi_tinh = ?, dia_chi = ?, so_dien_thoai = ?, so_bao_hiem = ? WHERE id_benh_nhan = ?',
      [ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, so_bao_hiem, id], 
      (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Bệnh nhân không tồn tại' });
        res.json({ message: 'Thông tin bệnh nhân đã được cập nhật' });
    });
  });
  
  // Xóa bệnh nhân
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    req.db.query('DELETE FROM ThongTinBenhNhan WHERE id_benh_nhan = ?', [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: 'Bệnh nhân không tồn tại' });
      res.json({ message: 'Bệnh nhân đã được xóa' });
    });
  });
  
// Lấy thông tin hồ sơ bệnh lý của bệnh nhân
router.get('/:id/thong-tin-ho-so-benh-ly', (req, res) => {
    const { id } = req.params;
    
    // Câu truy vấn SQL
    req.db.query(`
      SELECT
        t.*,   
        b.ten,  
        b.ngay_sinh, 
        b.gioi_tinh, 
        b.dia_chi, 
        b.so_dien_thoai
      FROM 
        ThongTinBenhLy t
      JOIN     
        thongtinbenhnhan b ON t.id_benh_nhan = b.id_benh_nhan 
      WHERE     
        t.id_benh_nhan = ?
    `, [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    });
  });
// thêm thông tin bệnh lý của bênh nhân 

router.post('/:id/thong-tin-ho-so-benh-ly', (req, res) => {
    const { id } = req.params;
    const { ngay_kham, chan_doan, dieu_tri } = req.body;

    req.db.query(`
      INSERT INTO ThongTinBenhLy (id_benh_nhan, ngay_kham, chan_doan, dieu_tri) 
      VALUES (?, ?, ?, ?)
    `, [id, ngay_kham, chan_doan, dieu_tri], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(201).json({ id_ho_so: results.insertId, id_benh_nhan: id, ngay_kham, chan_doan, dieu_tri });
    });
});

// câp nhật thông tin bệnh lý của bệnh nhân 
router.put('/thong-tin-ho-so-benh-ly/:id', (req, res) => {
    const { id } = req.params;
    const { ngay_kham, chan_doan, dieu_tri } = req.body;

    req.db.query(`
      UPDATE ThongTinBenhLy 
      SET ngay_kham = ?, chan_doan = ?, dieu_tri = ?
      WHERE id_ho_so = ?
    `, [ngay_kham, chan_doan, dieu_tri, id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Bệnh lý không tìm thấy' });
      }
      res.json({ message: 'Cập nhật thành công' });
    });
});
// xóa thông tin bệnh lý của bệnh nhân 
router.put('/thong-tin-ho-so-benh-ly/:id', (req, res) => {
    const { id } = req.params;
    const { ngay_kham, chan_doan, dieu_tri } = req.body;

    req.db.query(`
      UPDATE ThongTinBenhLy 
      SET ngay_kham = ?, chan_doan = ?, dieu_tri = ?
      WHERE id_ho_so = ?
    `, [ngay_kham, chan_doan, dieu_tri, id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Bệnh lý không tìm thấy' });
      }
      res.json({ message: 'Cập nhật thành công' });
    });
});
  // Lấy lịch sử khám của bệnh nhân
  router.get('/:id/lich-su-kham', (req, res) => {
    const { id } = req.params;
    req.db.query('SELECT * FROM LichSuKhams WHERE id_benh_nhan = ?', [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    });
  });
  
  // Lấy thông tin thuốc đã sử dụng của bệnh nhân
  router.get('/:id/lich-su-thuoc', (req, res) => {
    const { id } = req.params;
    req.db.query('SELECT * FROM LichSuSuDungThuoc WHERE id_benh_nhan = ?', [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    });
  });
  
  // Lấy danh sách lịch hẹn của bệnh nhân
//   router.get('/:id/appointments', (req, res) => {
//     const { id } = req.params;
    
//     req.db.query(`
//       SELECT 
//         LichHen.id_lich_hen,
//         LichHen.thoi_gian_hen,
//         LichHen.trang_thai,
//         LichHen.ly_do,
//         ThongTinBenhNhan.ten AS ten_benh_nhan,
//         ThongTinBenhNhan.dia_chi AS dia_chi_benh_nhan,
//         ThongTinBenhNhan.so_dien_thoai AS so_dien_thoai_benh_nhan,
//         ThongTinBacSi.ten AS ten_bac_si,
//         ThongTinBacSi.chuyen_khoa AS chuyen_khoa_bac_si,
//         ThongTinBacSi.so_dien_thoai AS so_dien_thoai_bac_si
//       FROM 
//         LichHen
//       JOIN 
//         ThongTinBenhNhan ON LichHen.id_benh_nhan = ThongTinBenhNhan.id_benh_nhan
//       JOIN 
//         ThongTinBacSi ON LichHen.id_bac_si = ThongTinBacSi.id_bac_si
//       WHERE 
//         LichHen.id_benh_nhan = ?;
//     `, [id], (error, results) => {
//       if (error) {
//         return res.status(500).json({ error: error.message });
//       }
//       res.json(results);
//     });
//   });
  // Đặt lịch hẹn
router.post('/dat-lich-hen', (req, res) => {
    const { id_benh_nhan, id_bac_si, thoi_gian_hen, trang_thai, ly_do } = req.body;

    req.db.query(`
      INSERT INTO LichHen (id_benh_nhan, id_bac_si, thoi_gian_hen, trang_thai, ly_do)
      VALUES (?, ?, ?, ?, ?)
    `, [id_benh_nhan, id_bac_si, thoi_gian_hen, trang_thai, ly_do], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({ message: 'Lịch hẹn đã được đặt thành công', id_lich_hen: results.insertId });
    });
});

  
  // Gửi phản hồi từ bệnh nhân
  router.post('/:id/phan-hoi', (req, res) => {
    const { id } = req.params;
    const { ngay_gui, noi_dung, danh_gia } = req.body;
    req.db.query('INSERT INTO PhanHoTuBenhNhan (id_benh_nhan, ngay_gui, noi_dung, danh_gia) VALUES (?, ?, ?, ?)', 
      [id, ngay_gui, noi_dung, danh_gia], 
      (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({ message: 'Phản hồi đã được gửi thành công' });
    });
  });
  
// Lấy thông tin chỉ số sức khỏe của bệnh nhân
router.get('/:id/thong-tin-chi-so-suc-khoe', (req, res) => {
    const { id } = req.params;

    req.db.query(`
      SELECT 
        c.*, 
        b.ten,  
        b.ngay_sinh, 
        b.gioi_tinh, 
        b.dia_chi, 
        b.so_dien_thoai 
      FROM 
        ThongTinChiSoSucKhoe c
      JOIN 
        ThongTinBenhNhan b ON c.id_benh_nhan = b.id_benh_nhan
      WHERE 
        c.id_benh_nhan = ?
    `, [id], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
    });
});

// Thêm thông tin chỉ số sức khỏe
router.post('/:id/thong-tin-chi-so-suc-khoe', (req, res) => {
    const { id } = req.params;
    const { ngay, huyet_ap, nhip_tim, can_nang, chieu_cao, chi_so_bmi, duong_huyet, cholesterol_tong } = req.body;

    req.db.query(`
      INSERT INTO ThongTinChiSoSucKhoe (id_benh_nhan, ngay, huyet_ap, nhip_tim, can_nang, chieu_cao, chi_so_bmi, duong_huyet, cholesterol_tong) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [id, ngay, huyet_ap, nhip_tim, can_nang, chieu_cao, chi_so_bmi, duong_huyet, cholesterol_tong], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({ id_chi_so: results.insertId, id_benh_nhan: id, ngay, huyet_ap, nhip_tim, can_nang, chieu_cao, chi_so_bmi, duong_huyet, cholesterol_tong });
    });
});

router.put('/thong-tin-chi-so-suc-khoe/:id', (req, res) => {
  const { id } = req.params;
  const { ngay, huyet_ap, nhip_tim, can_nang, chieu_cao, chi_so_bmi, duong_huyet, cholesterol_tong } = req.body;

  // Kiểm tra tính hợp lệ của id
  if (!id || isNaN(id)) {
      return res.status(400).json({ error: 'ID chỉ số sức khỏe không hợp lệ' });
  }

  // Kiểm tra dữ liệu đầu vào
  if (!ngay || !huyet_ap || !nhip_tim || !can_nang || !chieu_cao || !chi_so_bmi || !duong_huyet || !cholesterol_tong) {
      return res.status(400).json({ error: 'Thiếu thông tin bắt buộc' });
  }

  req.db.query(`
    UPDATE ThongTinChiSoSucKhoe 
    SET ngay = ?, huyet_ap = ?, nhip_tim = ?, can_nang = ?, chieu_cao = ?, chi_so_bmi = ?, duong_huyet = ?, cholesterol_tong = ?
    WHERE id_chi_so = ?
  `, [ngay, huyet_ap, nhip_tim, can_nang, chieu_cao, chi_so_bmi, duong_huyet, cholesterol_tong, id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Chỉ số sức khỏe không tìm thấy' });
      }
      res.json({ message: 'Cập nhật thành công' });
  });
});

// Xóa thông tin chỉ số sức khỏe
router.delete('/thong-tin-chi-so-suc-khoe/:id', (req, res) => {
  const { id } = req.params;

  // Kiểm tra tính hợp lệ của id
  if (!id || isNaN(id)) {
      return res.status(400).json({ error: 'ID chỉ số sức khỏe không hợp lệ' });
  }

  req.db.query('DELETE FROM ThongTinChiSoSucKhoe WHERE id_chi_so = ?', [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Chỉ số sức khỏe không tìm thấy' });
      }
      res.json({ message: 'Chỉ số sức khỏe đã được xóa' });
  });
});
// Lấy tất cả bệnh viện
router.get('/hospitals', (req, res) => {
    req.db.query(`SELECT * FROM ThongTinBenhVien`, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
    });
});

// Thêm bệnh viện mới
router.post('/hospitals', (req, res) => {
    const { ten_benh_vien, mo_ta, dia_chi, so_dien_thoai, email, website } = req.body;
    req.db.query(`
        INSERT INTO ThongTinBenhVien (ten_benh_vien, mo_ta, dia_chi, so_dien_thoai, email, website) 
        VALUES (?, ?, ?, ?, ?, ?)
    `, [ten_benh_vien, mo_ta, dia_chi, so_dien_thoai, email, website], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({ id_benh_vien: results.insertId, message: 'Bệnh viện đã được thêm' });
    });
});

// Cập nhật thông tin bệnh viện
router.put('/hospitals/:id', (req, res) => {
    const { id } = req.params;
    const { ten_benh_vien, mo_ta, dia_chi, so_dien_thoai, email, website } = req.body;
    req.db.query(`
        UPDATE ThongTinBenhVien 
        SET ten_benh_vien = ?, mo_ta = ?, dia_chi = ?, so_dien_thoai = ?, email = ?, website = ?
        WHERE id_benh_vien = ?
    `, [ten_benh_vien, mo_ta, dia_chi, so_dien_thoai, email, website, id], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        if (results.affectedRows === 0) return res.status(404).json({ error: 'Bệnh viện không tìm thấy' });
        res.json({ message: 'Thông tin bệnh viện đã được cập nhật' });
    });
});

// Xóa bệnh viện
router.delete('/hospitals/:id', (req, res) => {
    const { id } = req.params;
    req.db.query(`DELETE FROM ThongTinBenhVien WHERE id_benh_vien = ?`, [id], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        if (results.affectedRows === 0) return res.status(404).json({ error: 'Bệnh viện không tìm thấy' });
        res.json({ message: 'Bệnh viện đã được xóa' });
    });
});





module.exports = router;
