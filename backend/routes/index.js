var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/thong-ke/tong-so-benh-nhan', (req, res) => {
  req.db.query(`
    SELECT COUNT(*) AS tong_so_benh_nhan
    FROM benh_nhan
  `, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results[0]);
  });
});
// API đếm số lượng bệnh nhân theo giới tính
router.get('/thong-ke/benh-nhan-theo-gioi-tinh', (req, res) => {
  req.db.query(`
    SELECT gioi_tinh, COUNT(*) AS so_luong
    FROM benh_nhan
    GROUP BY gioi_tinh
  `, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});
router.get('/thong-ke/benh-nhan-theo-do-tuoi', (req, res) => {
  req.db.query(`
    SELECT 
      CASE 
        WHEN TIMESTAMPDIFF(YEAR, ngay_sinh, CURDATE()) < 18 THEN 'Dưới 18'
        WHEN TIMESTAMPDIFF(YEAR, ngay_sinh, CURDATE()) BETWEEN 18 AND 35 THEN '18-35'
        WHEN TIMESTAMPDIFF(YEAR, ngay_sinh, CURDATE()) BETWEEN 36 AND 60 THEN '36-60'
        ELSE 'Trên 60' 
      END AS do_tuoi,
      COUNT(*) AS so_luong
    FROM benh_nhan
    GROUP BY do_tuoi
  `, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});
// API đếm số lượng kế hoạch điều trị theo trạng thái
router.get('/thong-ke/ke-hoach-dieu-tri-theo-trang-thai', (req, res) => {
  req.db.query(`
    SELECT 
      trang_thai,
      COUNT(*) AS so_luong
    FROM ke_hoach_dieu_tri
    GROUP BY trang_thai
  `, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});
// API thống kê doanh thu
router.get('/thong-ke/doanh-thu', (req, res) => {
  req.db.query(`
    SELECT 
      trang_thai,
      SUM(tong_tien - gia_giam) AS doanh_thu
    FROM hoa_don
    WHERE trang_thai = 'Đã thanh toán'
    GROUP BY trang_thai
  `, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });

    // Create a number formatter for Vietnamese currency
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0, 
    });

    // Format results to include formatted "doanh thu" in the response
    const formattedResults = results.map(item => ({
      trang_thai: item.trang_thai,
      doanh_thu: formatter.format(item.doanh_thu) // Format revenue as VND
    }));

    res.json(formattedResults);
  });
});

// API thống kê doanh thu theo tháng
router.get('/thong-ke/doanh-thu-theo-thang', (req, res) => {
  req.db.query(`
    SELECT 
      YEAR(ngay_hoa_don) AS nam,
      MONTH(ngay_hoa_don) AS thang,
      SUM(tong_tien - gia_giam) AS doanh_thu
    FROM hoa_don
    WHERE trang_thai = 'Đã thanh toán'
    GROUP BY nam, thang
    ORDER BY nam DESC, thang DESC
  `, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});

// API thống kê doanh thu từ hiệu thuốc
router.get('/thong-ke/doanh-thu-hieu-thuoc', (req, res) => {
  req.db.query(`
    SELECT 
      SUM(tong_tien - gia_giam) AS doanh_thu_hieu_thuoc
    FROM hoa_don
    WHERE id_duoc_pham IS NOT NULL AND trang_thai = 'Đã thanh toán'
  `, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });

    // Calculate total revenue
    const totalRevenue = results[0]?.doanh_thu_hieu_thuoc || 0;

    // Format total revenue to Vietnamese currency
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    });

    // Send formatted total revenue
    res.json({
      doanh_thu_hieu_thuoc: formatter.format(totalRevenue),  // Return formatted revenue
    });
  });
});

router.get('/thong-ke/doanh-thu-dich-vu', (req, res) => {
  req.db.query(`
    SELECT 
      dv.ten_dich_vu,
      COUNT(*) AS so_lan_su_dung,
      SUM(dv.don_gia) AS tong_tien_dich_vu
    FROM hoa_don hd
    JOIN ket_qua_kiem_tra kq ON hd.id_ket_qua_kiem_tra = kq.id
    JOIN dich_vu dv ON kq.id_dich_vu = dv.id
    WHERE hd.trang_thai = 'Đã thanh toán'
    GROUP BY dv.ten_dich_vu
  `, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });

    // Tính tổng doanh thu từ dịch vụ đã thanh toán
    const tongDoanhThu = results.reduce((acc, item) => acc + parseFloat(item.tong_tien_dich_vu), 0);

    // Định dạng tổng doanh thu thành tiền Việt Nam
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0, 
    });

    res.json({
      chi_tiet_dich_vu: results,
      tong_doanh_thu_dich_vu: formatter.format(tongDoanhThu) // Định dạng tiền
    });
  });
});



module.exports = router;
