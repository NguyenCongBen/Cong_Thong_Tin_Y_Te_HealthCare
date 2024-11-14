var express = require('express');
var router = express.Router();

// Lấy danh sách bác sĩ
router.get('/', (req, res) => {
  req.db.query('SELECT bs.*, ck.* FROM `bac_si` bs JOIN chuyen_khoa ck ON bs.id_chuyen_khoa = ck.id', (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});

// Lấy thông tin bác sĩ theo ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  req.db.query('SELECT * FROM bac_si WHERE id = ?', [id], (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    if (results.length === 0) return res.status(404).json({ message: 'Bác sĩ không tồn tại' });
    res.json(results[0]);
  });
});

// Thêm bác sĩ mới
router.post('/', (req, res) => {
  const { id_chuyen_khoa, anh, ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai } = req.body;
  req.db.query(
    'INSERT INTO bac_si (id_chuyen_khoa, anh, ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [id_chuyen_khoa, anh, ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai], 
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(201).json({ id: results.insertId, message: 'Bác sĩ đã được thêm thành công' });
    }
  );
});

// Cập nhật thông tin bác sĩ
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { id_chuyen_khoa, anh, ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai } = req.body;
  
  req.db.query(
    'UPDATE bac_si SET id_chuyen_khoa = ?, anh = ?, ten = ?, ngay_sinh = ?, gioi_tinh = ?, dia_chi = ?, so_dien_thoai = ? WHERE id = ?',
    [id_chuyen_khoa, anh, ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, id], 
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: 'Bác sĩ không tồn tại' });
      res.json({ message: 'Thông tin bác sĩ đã được cập nhật' });
    }
  );
});

// Xóa bác sĩ
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  req.db.query('DELETE FROM bac_si WHERE id = ?', [id], (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Bác sĩ không tồn tại' });
    res.json({ message: 'Bác sĩ đã được xóa' });
  });
});

// Lấy lịch sử khám của bác sĩ
router.get('/:id/lich-su-kham', (req, res) => {
  const { id } = req.params;
  
  req.db.query(`
    SELECT 
      LichSuKhams.id_lich_su_kham,
      LichSuKhams.ngay_kham,
      LichSuKhams.ly_do_kham,
      ThongTinBenhNhan.ten AS ten_benh_nhan,
      ThongTinBenhNhan.dia_chi AS dia_chi_benh_nhan,
      ThongTinBenhNhan.so_dien_thoai AS so_dien_thoai_benh_nhan,
      ThongTinBacSi.ten AS ten_bac_si,
      ThongTinBacSi.chuyen_khoa AS chuyen_khoa_bac_si,
      ThongTinBacSi.so_dien_thoai AS so_dien_thoai_bac_si,
      LichSuSuDungThuoc.id_lich_su,
      LichSuSuDungThuoc.ngay_su_dung,
      ThongTinDuocPham.ten_thuoc,
      LichSuSuDungThuoc.lieu_luong,
      LichSuSuDungThuoc.ghi_chu
    FROM 
      LichSuKhams
    JOIN 
      ThongTinBenhNhan ON LichSuKhams.id_benh_nhan = ThongTinBenhNhan.id_benh_nhan
    JOIN 
      ThongTinBacSi ON LichSuKhams.id_bac_si = ThongTinBacSi.id
    LEFT JOIN 
      LichSuSuDungThuoc ON LichSuKhams.id_benh_nhan = LichSuSuDungThuoc.id_benh_nhan
    LEFT JOIN 
      ThongTinDuocPham ON LichSuSuDungThuoc.id_duoc_pham = ThongTinDuocPham.id_duoc_pham
    WHERE 
      LichSuKhams.id_bac_si = ?;
  `, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

// Lấy danh sách bệnh nhân đã khám bởi bác sĩ
router.get('/:id/lich-su-benh-nhan', (req, res) => {
  const { id } = req.params;
  req.db.query(
    'SELECT DISTINCT bn.* FROM ThongTinBenhNhan bn JOIN LichSuKhams lh ON bn.id_benh_nhan = lh.id_benh_nhan WHERE lh.id_bac_si = ?', 
    [id], 
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    }
  );
});

// Cập nhật lịch hẹn của bác sĩ
router.put('/lich-su-kham/:id', (req, res) => {
  const { id } = req.params;
  const { trang_thai, ly_do } = req.body;

  req.db.query(`
    UPDATE LichHen 
    SET trang_thai = ?, ly_do = ?
    WHERE id_lich_hen = ?
  `, [trang_thai, ly_do, id], (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Lịch hẹn không tìm thấy' });
    }
    res.json({ message: 'Cập nhật lịch hẹn thành công' });
  });
});

module.exports = router;
