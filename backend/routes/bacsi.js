const express = require("express");
const multer = require("multer");
const router = express.Router();

// Thiết lập nơi lưu trữ và tên file
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images"); // Đường dẫn lưu trữ ảnh
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Tên file gốc
  },
});

// Kiểm tra file upload
function checkFileUpload(req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Bạn chỉ được upload file ảnh"));
  }
  cb(null, true);
}

let upload = multer({ storage: storage, fileFilter: checkFileUpload });

// Thêm bác sĩ
router.post("/", upload.single("anh"), async (req, res) => {
  const {
    id_chuyen_khoa,
    ten,
    ngay_sinh,
    gioi_tinh,
    dia_chi,
    so_dien_thoai,
    email,
  } = req.body; // Thêm email
  const anh = req.file ? req.file.originalname : null; // Lấy tên file ảnh

  // Thêm dữ liệu vào bảng bac_si
  req.db.query(
    "INSERT INTO bac_si (id_chuyen_khoa, anh, ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", // Cập nhật câu lệnh SQL
    [
      id_chuyen_khoa,
      anh,
      ten,
      ngay_sinh,
      gioi_tinh,
      dia_chi,
      so_dien_thoai,
      email,
    ], // Cập nhật giá trị
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res
        .status(201)
        .json({
          id: results.insertId,
          message: "Bác sĩ đã được thêm thành công",
        });
    }
  );
});

// Lấy danh sách bác sĩ
router.get("/", (req, res) => {
  req.db.query(
    "SELECT bs.*, ck.* FROM `bac_si` bs JOIN chuyen_khoa ck ON bs.id_chuyen_khoa = ck.id",
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    }
  );
});

// Lấy thông tin bác sĩ theo ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  req.db.query("SELECT * FROM bac_si WHERE id = ?", [id], (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    if (results.length === 0)
      return res.status(404).json({ message: "Bác sĩ không tồn tại" });
    res.json(results[0]);
  });
});

router.get("/chuyen-khoa/:idChuyenKhoa", (req, res) => {
  const idChuyenKhoa = req.params.idChuyenKhoa;

  req.db.query(
    "SELECT bs.*, ck.* FROM `bac_si` bs JOIN chuyen_khoa ck ON bs.id_chuyen_khoa = ck.id WHERE bs.id_chuyen_khoa = ?",
    [idChuyenKhoa],
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    }
  );
});

// Lấy lịch sử khám của bác sĩ
router.get("/:id/lich-su-kham", (req, res) => {
  const { id } = req.params;

  req.db.query(
    `
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
  `,
    [id],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json(results);
    }
  );
});

// Lấy danh sách bệnh nhân đã khám bởi bác sĩ
router.get("/:id/lich-su-benh-nhan", (req, res) => {
  const { id } = req.params;
  req.db.query(
    "SELECT DISTINCT bn.* FROM ThongTinBenhNhan bn JOIN LichSuKhams lh ON bn.id_benh_nhan = lh.id_benh_nhan WHERE lh.id_bac_si = ?",
    [id],
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    }
  );
});

// Cập nhật lịch hẹn của bác sĩ
router.put("/lich-su-kham/:id", (req, res) => {
  const { id } = req.params;
  const { trang_thai, ly_do } = req.body;

  req.db.query(
    `
    UPDATE LichHen 
    SET trang_thai = ?, ly_do = ?
    WHERE id_lich_hen = ?
  `,
    [trang_thai, ly_do, id],
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "Lịch hẹn không tìm thấy" });
      }
      res.json({ message: "Cập nhật lịch hẹn thành công" });
    }
  );
});

// tìm kiếm bác sĩ
router.get("/search-doctor/:keyword", (req, res) => {
  const keyword = req.params.keyword.trim(); // Loại bỏ khoảng trắng thừa
  const lowerKeyword = keyword.toLowerCase(); // Chuyển từ khóa về chữ thường

  console.log("Keyword:", keyword); // Kiểm tra giá trị của keyword

  // Truy vấn MySQL chỉ tìm kiếm theo tên của bác sĩ
  const query = `
      SELECT 
          bac_si.id, 
          bac_si.id_chuyen_khoa, 
          bac_si.anh, 
          bac_si.ten, 
          bac_si.ngay_sinh, 
          chuyen_khoa.mo_ta, 
          chuyen_khoa.ten_chuyen_khoa, 
          bac_si.gioi_tinh, 
          bac_si.dia_chi, 
          bac_si.so_dien_thoai, 
          bac_si.email
      FROM bac_si 
      LEFT JOIN chuyen_khoa ON bac_si.id_chuyen_khoa = chuyen_khoa.id
      WHERE LOWER(bac_si.ten) LIKE ?
  `;
  const values = [`%${lowerKeyword}%`]; // Sử dụng từ khóa chỉ cho tên bác sĩ

  console.log("Query:", query); // Kiểm tra truy vấn
  console.log("Values:", values); // Kiểm tra giá trị

  // Thực hiện truy vấn
  req.db.query(query, values, (error, results) => {
    if (error) {
      console.error("Lỗi truy vấn cơ sở dữ liệu:", error);
      return res.status(500).json({ error: "Đã xảy ra lỗi khi lấy dữ liệu." });
    }

    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: "Không tìm thấy bác sĩ" });
    }
  });
});

module.exports = router;
