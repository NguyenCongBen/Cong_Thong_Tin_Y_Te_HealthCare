var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





//PHẢN HỒI TỪ BỆNH NHÂN 
// 1. Lấy tất cả phản hồi của bệnh nhân
router.get('/phan-hoi', (req, res) => {
    req.db.query(`
        SELECT 
            p.*, 
            b.ten 
        FROM 
            PhanHoTuBenhNhan p
        JOIN 
            ThongTinBenhNhan b ON p.id_benh_nhan = b.id_benh_nhan
    `, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
    });
});

// 2. Thêm phản hồi từ bệnh nhân
router.post('/phan-hoi', (req, res) => {
    const { id_benh_nhan, ngay_gui, noi_dung, danh_gia } = req.body;
    req.db.query(`
        INSERT INTO PhanHoTuBenhNhan (id_benh_nhan, ngay_gui, noi_dung, danh_gia)
        VALUES (?, ?, ?, ?)
    `, [id_benh_nhan, ngay_gui, noi_dung, danh_gia], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({ id_phan_ho: results.insertId });
    });
});

// 3. Cập nhật phản hồi của bệnh nhân
router.put('/phan-hoi/:id', (req, res) => {
    const { id } = req.params;
    const { id_benh_nhan, ngay_gui, noi_dung, danh_gia } = req.body;
    req.db.query(`
        UPDATE PhanHoTuBenhNhan
        SET id_benh_nhan = ?, ngay_gui = ?, noi_dung = ?, danh_gia = ?
        WHERE id_phan_ho = ?
    `, [id_benh_nhan, ngay_gui, noi_dung, danh_gia, id], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        if (results.affectedRows === 0) return res.status(404).json({ error: 'Phản hồi không tìm thấy' });
        res.json({ message: 'Cập nhật thành công' });
    });
});

// 4. Xóa phản hồi của bệnh nhân
router.delete('/phan-hoi/:id', (req, res) => {
    const { id } = req.params;
    req.db.query(`
        DELETE FROM PhanHoTuBenhNhan WHERE id_phan_ho = ?
    `, [id], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        if (results.affectedRows === 0) return res.status(404).json({ error: 'Phản hồi không tìm thấy' });
        res.json({ message: 'Xóa thành công' });
    });
});




//DỊCH VỤ 
// Lấy tất cả dịch vụ
router.get('/dich-vu', (req, res) => {
  req.db.query(`
      SELECT * FROM DichVu
  `, (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
  });
});
// Thêm dịch vụ
router.post('/dich-vu', (req, res) => {
  const { ten_dich_vu, mo_ta, don_gia } = req.body;

  req.db.query(`
    INSERT INTO DichVu (ten_dich_vu, mo_ta, don_gia)
    VALUES (?, ?, ?)
  `, [ten_dich_vu, mo_ta, don_gia], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(201).json({ message: 'Dịch vụ đã được thêm thành công', id_dich_vu: results.insertId });
  });
});

// Cập nhật dịch vụ
router.put('/dich-vu/:id', (req, res) => {
  const { id } = req.params;
  const { ten_dich_vu, mo_ta, don_gia } = req.body;

  req.db.query(`
    UPDATE DichVu 
    SET ten_dich_vu = ?, mo_ta = ?, don_gia = ?
    WHERE id_dich_vu = ?
  `, [ten_dich_vu, mo_ta, don_gia, id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Dịch vụ không tìm thấy' });
      }
      res.json({ message: 'Cập nhật dịch vụ thành công' });
  });
});

// Xóa dịch vụ
router.delete('/dich-vu/:id', (req, res) => {
  const { id } = req.params;

  req.db.query(`
    DELETE FROM DichVu 
    WHERE id_dich_vu = ?
  `, [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Dịch vụ không tìm thấy' });
      }
      res.json({ message: 'Xóa dịch vụ thành công' });
  });
});





//THÔNG TIN NHÀ CUNG CẤP THUỐC 
// Lấy tất cả nhà cung cấp dược phẩm
router.get('/thong-tin-nha-cung-cap-thuoc', (req, res) => {
  req.db.query(`SELECT * FROM ThongTinNhaCungCapDuocPham`, (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
  });
});

// Thêm nhà cung cấp dược phẩm mới
router.post('/thong-tin-nha-cung-cap-thuoc', (req, res) => {
  const { ten_nha_cung_cap, dia_chi, so_dien_thoai, email, website } = req.body;
  req.db.query(`
      INSERT INTO ThongTinNhaCungCapDuocPham (ten_nha_cung_cap, dia_chi, so_dien_thoai, email, website) 
      VALUES (?, ?, ?, ?, ?)
  `, [ten_nha_cung_cap, dia_chi, so_dien_thoai, email, website], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(201).json({ id_nha_cung_cap: results.insertId, message: 'Nhà cung cấp đã được thêm' });
  });
});

// Cập nhật thông tin nhà cung cấp dược phẩm
router.put('/thong-tin-nha-cung-cap-thuoc/:id', (req, res) => {
  const { id } = req.params;
  const { ten_nha_cung_cap, dia_chi, so_dien_thoai, email, website } = req.body;
  req.db.query(`
      UPDATE ThongTinNhaCungCapDuocPham 
      SET ten_nha_cung_cap = ?, dia_chi = ?, so_dien_thoai = ?, email = ?, website = ?
      WHERE id_nha_cung_cap = ?
  `, [ten_nha_cung_cap, dia_chi, so_dien_thoai, email, website, id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Nhà cung cấp không tìm thấy' });
      res.json({ message: 'Thông tin nhà cung cấp đã được cập nhật' });
  });
});

// Xóa nhà cung cấp dược phẩm
router.delete('/thong-tin-nha-cung-cap-thuoc/:id', (req, res) => {
  const { id } = req.params;
  req.db.query(`DELETE FROM ThongTinNhaCungCapDuocPham WHERE id_nha_cung_cap = ?`, [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Nhà cung cấp không tìm thấy' });
      res.json({ message: 'Nhà cung cấp đã được xóa' });
  });
});




//THÔNG TIN THUỐC 
// 1. Lấy tất cả thông tin dược phẩm
router.get('/thong-tin-thuoc', (req, res) => {
  req.db.query(`
      SELECT 
          d.*, 
          n.ten_nha_cung_cap 
      FROM 
          ThongTinDuocPham d
      LEFT JOIN 
          ThongTinNhaCungCapDuocPham n ON d.id_cua_hang = n.id_nha_cung_cap
  `, (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
  });
});

// 2. Thêm thông tin dược phẩm
router.post('/thong-tin-thuoc', (req, res) => {
  const { id_cua_hang, ten_thuoc, thanh_phan_chinh, dang_bao_che, lieu_luong, chi_dinh, chong_chi_dinh, tac_dung_phu, thong_tin_bao_quan, ngay_het_han } = req.body;
  req.db.query(`
      INSERT INTO ThongTinDuocPham (id_cua_hang, ten_thuoc, thanh_phan_chinh, dang_bao_che, lieu_luong, chi_dinh, chong_chi_dinh, tac_dung_phu, thong_tin_bao_quan, ngay_het_han)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [id_cua_hang, ten_thuoc, thanh_phan_chinh, dang_bao_che, lieu_luong, chi_dinh, chong_chi_dinh, tac_dung_phu, thong_tin_bao_quan, ngay_het_han], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(201).json({ id_duoc_pham: results.insertId });
  });
});

// 3. Cập nhật thông tin dược phẩm
router.put('/thong-tin-thuoc/:id', (req, res) => {
  const { id } = req.params;
  const { id_cua_hang, ten_thuoc, thanh_phan_chinh, dang_bao_che, lieu_luong, chi_dinh, chong_chi_dinh, tac_dung_phu, thong_tin_bao_quan, ngay_het_han } = req.body;
  req.db.query(`
      UPDATE ThongTinDuocPham
      SET id_cua_hang = ?, ten_thuoc = ?, thanh_phan_chinh = ?, dang_bao_che = ?, lieu_luong = ?, chi_dinh = ?, chong_chi_dinh = ?, tac_dung_phu = ?, thong_tin_bao_quan = ?, ngay_het_han = ?
      WHERE id_duoc_pham = ?
  `, [id_cua_hang, ten_thuoc, thanh_phan_chinh, dang_bao_che, lieu_luong, chi_dinh, chong_chi_dinh, tac_dung_phu, thong_tin_bao_quan, ngay_het_han, id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Dược phẩm không tìm thấy' });
      res.json({ message: 'Cập nhật thành công' });
  });
});

// 4. Xóa thông tin dược phẩm
router.delete('/thong-tin-thuoc/:id', (req, res) => {
  const { id } = req.params;
  req.db.query(`
      DELETE FROM ThongTinDuocPham WHERE id_duoc_pham = ?
  `, [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Dược phẩm không tìm thấy' });
      res.json({ message: 'Xóa thành công' });
  });
});


// THÔNG TIN BỆNH VIỆN 
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




//KẾT QUẢ KIỂM TRA 
// 1. Lấy tất cả kết quả xét nghiệm
router.get('/ket-qua-xet-nghiem', (req, res) => {
    req.db.query(`
        SELECT 
            k.*, 
            b.ten AS ten_benh_nhan,
            d.ten_dich_vu,
            bs.ten AS ten_bac_si
        FROM 
            KetQuaXetNghiem k
        JOIN 
            ThongTinBenhNhan b ON k.id_benh_nhan = b.id_benh_nhan
        JOIN 
            DichVu d ON k.id_dich_vu = d.id_dich_vu
        JOIN 
            ThongTinBacSi bs ON k.id_bac_si = bs.id_bac_si
    `, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
    });
});

// 2. Thêm kết quả xét nghiệm
router.post('/ket-qua-xet-nghiem', (req, res) => {
    const { id_benh_nhan, id_dich_vu, id_bac_si, ngay_xet_nghiem, ket_qua, ghi_chu } = req.body;
    req.db.query(`
        INSERT INTO KetQuaXetNghiem (id_benh_nhan, id_dich_vu, id_bac_si, ngay_xet_nghiem, ket_qua, ghi_chu)
        VALUES (?, ?, ?, ?, ?, ?)
    `, [id_benh_nhan, id_dich_vu, id_bac_si, ngay_xet_nghiem, ket_qua, ghi_chu], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({ id_ket_qua: results.insertId });
    });
});

// 3. Cập nhật kết quả xét nghiệm
router.put('/ket-qua-xet-nghiem/:id', (req, res) => {
    const { id } = req.params;
    const { id_benh_nhan, id_dich_vu, id_bac_si, ngay_xet_nghiem, ket_qua, ghi_chu } = req.body;
    req.db.query(`
        UPDATE KetQuaXetNghiem
        SET id_benh_nhan = ?, id_dich_vu = ?, id_bac_si = ?, ngay_xet_nghiem = ?, ket_qua = ?, ghi_chu = ?
        WHERE id_ket_qua = ?
    `, [id_benh_nhan, id_dich_vu, id_bac_si, ngay_xet_nghiem, ket_qua, ghi_chu, id], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        if (results.affectedRows === 0) return res.status(404).json({ error: 'Kết quả không tìm thấy' });
        res.json({ message: 'Cập nhật thành công' });
    });
});

// 4. Xóa kết quả xét nghiệm
router.delete('/ket-qua-xet-nghiem/:id', (req, res) => {
    const { id } = req.params;
    req.db.query(`
        DELETE FROM KetQuaXetNghiem WHERE id_ket_qua = ?
    `, [id], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        if (results.affectedRows === 0) return res.status(404).json({ error: 'Kết quả không tìm thấy' });
        res.json({ message: 'Xóa thành công' });
    });
});



//HÓA ĐƠN 
// Lấy thông tin đơn thuốc
router.get('/don-thuoc/:id', (req, res) => {
  const { id } = req.params;

  req.db.query(`
      SELECT 
          h.id_hoa_don,
          h.ngay_hoa_don,
          h.tong_tien,
          h.trang_thai,
          h.ghi_chu,
          h.giam_gia,
          b.ten AS ten_benh_nhan,
          b.so_dien_thoai AS so_dien_thoai_benh_nhan,
          d.ten_thuoc,
          dv.ten_dich_vu,
          dv.don_gia AS gia_dich_vu,
          k.ket_qua,
          k.ngay_xet_nghiem,
          bs.ten AS ten_bac_si
      FROM 
          HoaDon h
      JOIN 
          ThongTinBenhNhan b ON h.id_benh_nhan = b.id_benh_nhan
      JOIN 
          ThongTinDuocPham d ON h.duoc_pham_id = d.id_duoc_pham
      JOIN 
          DichVu dv ON h.ket_qua_xet_nghiem_id = dv.id_dich_vu
      JOIN 
          KetQuaXetNghiem k ON h.ket_qua_xet_nghiem_id = k.id_ket_qua
      JOIN 
          ThongTinBacSi bs ON k.id_bac_si = bs.id_bac_si
      WHERE 
          h.id_hoa_don = ?
  `, [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.length === 0) return res.status(404).json({ error: 'Đơn thuốc không tìm thấy' });
      res.json(results);
  });
});

// KẾ HOẠCH ĐIỀU TRỊ  
// GET xem kế hoạch điều trị của một bệnh nhân
router.get('/ke-hoach-dieu-tri/:id', (req, res) => {
  const { id } = req.params; // ID của kế hoạch điều trị cần xem

  // Câu truy vấn SQL
  req.db.query(`
      SELECT 
          kh.*, 
          b.ten AS ten_benh_nhan, 
          bs.ten AS ten_bac_si 
      FROM 
          KeHoachDieuTri kh
      JOIN 
          ThongTinBenhNhan b ON kh.id_benh_nhan = b.id_benh_nhan
      JOIN 
          ThongTinBacSi bs ON kh.id_bac_si = bs.id_bac_si
      WHERE 
          kh.id_ke_hoach = ?
  `, [id], (error, results) => {
      if (error) {
          return res.status(500).json({ error: error.message });
      }

      // Kiểm tra xem có kế hoạch điều trị nào không
      if (results.length === 0) {
          return res.status(404).json({ error: 'Kế hoạch điều trị không tìm thấy' });
      }

      // Phản hồi với thông tin kế hoạch điều trị
      res.json(results[0]);
  });
});

// POST tạo kế hoạch điều trị
router.post('/ke-hoach-dieu-tri', (req, res) => {
  const { id_bac_si, id_benh_nhan, ngay_lap_ke_hoach, chi_tiet_dieu_tri, trang_thai } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!id_bac_si || !id_benh_nhan || !ngay_lap_ke_hoach || !chi_tiet_dieu_tri || !trang_thai) {
      return res.status(400).json({ error: 'Thiếu thông tin cần thiết' });
  }

  // Câu truy vấn SQL để thêm kế hoạch điều trị
  req.db.query(`
      INSERT INTO KeHoachDieuTri (id_bac_si, id_benh_nhan, ngay_lap_ke_hoach, chi_tiet_dieu_tri, trang_thai)
      VALUES (?, ?, ?, ?, ?)
  `, [id_bac_si, id_benh_nhan, ngay_lap_ke_hoach, chi_tiet_dieu_tri, trang_thai], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(201).json({ message: 'Kế hoạch điều trị đã được tạo', id_ke_hoach: results.insertId });
  });
});


// PUT cập nhật kế hoạch điều trị
router.put('/ke-hoach-dieu-tri/:id', (req, res) => {
  const { id } = req.params; // ID của kế hoạch điều trị cần cập nhật
  const { id_bac_si, id_benh_nhan, ngay_lap_ke_hoach, chi_tiet_dieu_tri, trang_thai } = req.body;

  // Câu truy vấn SQL
  const query = `
      UPDATE KeHoachDieuTri 
      SET id_bac_si = ?, id_benh_nhan = ?, ngay_lap_ke_hoach = ?, chi_tiet_dieu_tri = ?, trang_thai = ?
      WHERE id_ke_hoach = ?
  `;

  const params = [id_bac_si, id_benh_nhan, ngay_lap_ke_hoach, chi_tiet_dieu_tri, trang_thai, id];

  // Thực hiện câu truy vấn
  req.db.query(query, params, (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Kế hoạch điều trị không tìm thấy' });
      }
      res.json({ message: 'Kế hoạch điều trị đã được cập nhật' });
  });
});

// DELETE xóa kế hoạch điều trị
router.delete('/ke-hoach-dieu-tri/:id', (req, res) => {
  const { id } = req.params; // ID của kế hoạch điều trị cần xóa

  // Câu truy vấn SQL
  req.db.query(`
      DELETE FROM KeHoachDieuTri WHERE id_ke_hoach = ?
  `, [id], (error, results) => {
      if (error) {
          return res.status(500).json({ error: error.message });
      }
      
      // Kiểm tra xem có bản ghi nào bị xóa không
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Kế hoạch điều trị không tìm thấy' });
      }
      
      // Phản hồi khi xóa thành công
      res.json({ message: 'Kế hoạch điều trị đã được xóa thành công' });
  });
});

// tìm kiếm người dùng 

// API tìm kiếm trong bảng người dùng (NguoiDung)
router.get('/tim-kiem/nguoi-dung', async (req, res) => {
  const { ten, email } = req.query;
  try {
    const [rows] = await req.db.query(`SELECT * FROM NguoiDung WHERE ten LIKE ? OR email LIKE ?`, [`%${ten}%`, `%${email}%`]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API tìm kiếm trong bảng bệnh nhân (ThongTinBenhNhan)
router.get('/tim-kiem/benh-nhan', async (req, res) => {
  const { ten, so_dien_thoai } = req.query;
  try {
    const [rows] = await req.db.query(`SELECT * FROM ThongTinBenhNhan WHERE ten LIKE ? OR so_dien_thoai LIKE ?`, [`%${ten}%`, `%${so_dien_thoai}%`]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API tìm kiếm trong bảng bác sĩ (ThongTinBacSi)
router.get('/tim-kiem/bac-si', async (req, res) => {
  const { ten, chuyen_khoa } = req.query;
  try {
    const [rows] = await req.db.query(`SELECT * FROM ThongTinBacSi WHERE ten LIKE ? OR chuyen_khoa LIKE ?`, [`%${ten}%`, `%${chuyen_khoa}%`]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API tìm kiếm trong bảng dược phẩm (ThongTinDuocPham)
router.get('/tim-kiem/duoc-pham', async (req, res) => {
  const { ten_thuoc, thanh_phan_chinh } = req.query;
  try {
    const [rows] = await req.db.query(`SELECT * FROM ThongTinDuocPham WHERE ten_thuoc LIKE ? OR thanh_phan_chinh LIKE ?`, [`%${ten_thuoc}%`, `%${thanh_phan_chinh}%`]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API tìm kiếm trong bảng lịch hẹn (LichHen)
router.get('/tim-kiem/lich-hen', async (req, res) => {
  const { id_benh_nhan, id_bac_si } = req.query;
  try {
    const [rows] = await req.db.query(`SELECT * FROM LichHen WHERE id_benh_nhan = ? OR id_bac_si = ?`, [id_benh_nhan, id_bac_si]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






//api TÌM KIẾM CHUNG 
// API tìm kiếm chung cho tất cả các bảng
router.get('/tim-kiem', async (req, res) => {
  const { table, ...conditions } = req.query;

  // Kiểm tra xem bảng có hợp lệ không
  if (!validTables[table]) {
    return res.status(400).json({ error: 'Bảng không hợp lệ' });
  }

  // Xây dựng câu truy vấn SQL động
  let sql = `SELECT * FROM ${table} WHERE `;
  const values = [];
  const whereClauses = [];

  // Thêm điều kiện tìm kiếm động
  Object.keys(conditions).forEach((field) => {
    if (validTables[table].includes(field)) {
      whereClauses.push(`${field} LIKE ?`);
      values.push(`%${conditions[field]}%`);
    }
  });

  // Nếu không có điều kiện tìm kiếm hợp lệ
  if (whereClauses.length === 0) {
    return res.status(400).json({ error: 'Không có điều kiện tìm kiếm hợp lệ' });
  }

  // Ghép điều kiện với câu truy vấn SQL
  sql += whereClauses.join(' AND ');

  try {
    const [rows] = await req.db.query(sql, values);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});







// api LỊCH SỬ DỤNG THUỐC 
// Route để lấy lịch sử sử dụng thuốc dựa trên id_benh_nhan
router.get('/lich-su/:id_benh_nhan', (req, res) => {
  const idBenhNhan = req.params.id_benh_nhan;

  // Kiểm tra tính hợp lệ của id_benh_nhan
  if (!idBenhNhan || isNaN(idBenhNhan)) {
    return res.status(400).json({ message: 'id_benh_nhan không hợp lệ' });
  }

  // Truy vấn cơ sở dữ liệu
  const query = `
      SELECT 
          lssdt.id_lich_su,
          lssdt.ngay_su_dung,
          lssdt.lieu_luong,
          lssdt.ghi_chu,
          ThongTinDuocPham.ten_thuoc
      FROM 
          LichSuSuDungThuoc lssdt
      JOIN 
          ThongTinDuocPham ON lssdt.id_duoc_pham = ThongTinDuocPham.id_duoc_pham
      WHERE 
          lssdt.id_benh_nhan = ?
  `;

  // Thực thi truy vấn với tham số id_benh_nhan
  req.db.query(query, [idBenhNhan], (err, results) => {
      if (err) {
          console.error('Error executing query:', err);
          return res.status(500).json({ message: 'Internal Server Error', error: err });
      }

      // Nếu không có kết quả
      if (results.length === 0) {
          return res.status(404).json({ message: 'Không tìm thấy lịch sử sử dụng thuốc cho bệnh nhân này' });
      }

      // Trả kết quả dưới dạng JSON
      res.json({ message: 'Thành công', data: results });
  });
});


// API xóa lịch sử sử dụng thuốc dựa trên id_lich_su
router.delete('/lich-su/:id_lich_su', (req, res) => {
  const idLichSu = req.params.id_lich_su;

  // Kiểm tra tính hợp lệ của id_lich_su
  if (!idLichSu || isNaN(idLichSu)) {
    return res.status(400).json({ message: 'id_lich_su không hợp lệ' });
  }

  // Truy vấn xóa
  const query = `DELETE FROM LichSuSuDungThuoc WHERE id_lich_su = ?`;

  req.db.query(query, [idLichSu], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Internal Server Error', error: err });
    }

    // Kiểm tra xem có bản ghi nào được xóa hay không
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy lịch sử sử dụng thuốc để xóa' });
    }

    // Xóa thành công
    res.json({ message: 'Lịch sử sử dụng thuốc đã được xóa thành công!' });
  });
});

// API sửa lịch sử sử dụng thuốc dựa trên id_lich_su
router.put('/lich-su/:id_lich_su', (req, res) => {
  const idLichSu = req.params.id_lich_su;
  const { id_benh_nhan, id_duoc_pham, ngay_su_dung, lieu_luong, ghi_chu } = req.body;

  // Kiểm tra tính hợp lệ của id_lich_su
  if (!idLichSu || isNaN(idLichSu)) {
    return res.status(400).json({ message: 'id_lich_su không hợp lệ' });
  }

  // Kiểm tra tính hợp lệ của dữ liệu đầu vào
  if (!id_benh_nhan || !id_duoc_pham || !ngay_su_dung || !lieu_luong) {
    return res.status(400).json({ message: 'Dữ liệu đầu vào không đầy đủ' });
  }

  // Truy vấn cập nhật
  const query = `
    UPDATE LichSuSuDungThuoc
    SET id_benh_nhan = ?, id_duoc_pham = ?, ngay_su_dung = ?, lieu_luong = ?, ghi_chu = ?
    WHERE id_lich_su = ?
  `;

  req.db.query(query, [id_benh_nhan, id_duoc_pham, ngay_su_dung, lieu_luong, ghi_chu, idLichSu], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Internal Server Error', error: err });
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    // Kiểm tra xem có bản ghi nào được cập nhật không
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy lịch sử sử dụng thuốc để cập nhật' });
    }

    // Cập nhật thành công
    res.json({ message: 'Lịch sử sử dụng thuốc đã được cập nhật thành công!' });
  });
});



module.exports = router;
