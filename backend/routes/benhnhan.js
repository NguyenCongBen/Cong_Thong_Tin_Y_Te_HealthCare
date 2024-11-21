// var express = require('express');
// var router = express.Router();


// // Lấy danh sách bệnh nhân
// router.get('/', (req, res) => {
//   req.db.query('SELECT * FROM benh_nhan ', (error, results) => {
//     if (error) return res.status(500).json({ error: error.message });
//     res.json(results);
//   });
// });


// // Lấy thông tin bệnh nhân theo ID
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   const query = `
//      SELECT 
//     bn.*, 
//     tcs.*, 
//     kdt.*, 
//     tbl.*, 
//     lst.*
// FROM 
//     benh_nhan AS bn
// LEFT JOIN 
//     thong_tin_chi_so_suc_khoe AS tcs ON bn.id = tcs.id_benh_nhan
// LEFT JOIN 
//     ke_hoach_dieu_tri AS kdt ON bn.id = kdt.id_benh_nhan
// LEFT JOIN 
//     thong_tin_benh_ly AS tbl ON bn.id = tbl.id_benh_nhan
// LEFT JOIN 
//     lich_su_su_dung_thuoc AS lst ON bn.id = lst.id_benh_nhan
// WHERE 
//     bn.id = ?;
//   `;

//   req.db.query(query, [id], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ message: 'Bệnh nhân không tồn tại' });
//     }

//     res.json(results[0]);
//   });
// });

// // thêm bệnh nhân
// router.post('/api/benh_nhan', (req, res) => {
//   const { ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, email, anh } = req.body;

//   // Kiểm tra xem các trường bắt buộc có được cung cấp không
//   if (!ten || !ngay_sinh || !so_dien_thoai || !email) {
//     return res.status(400).json({ error: "Các trường 'ten', 'ngay_sinh', 'so_dien_thoai', và 'email' là bắt buộc." });
//   }

//   // Câu lệnh SQL để thêm một bệnh nhân mới
//   const query = `
//     INSERT INTO benh_nhan (ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, email, anh)
//     VALUES (?, ?, ?, ?, ?, ?, ?);
//   `;

//   // Thực hiện truy vấn với dữ liệu từ yêu cầu
//   req.db.query(query, [ten, ngay_sinh, gioi_tinh, dia_chi, so_dien_thoai, email, anh], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }

//     // Phản hồi lại sau khi thêm thành công
//     res.status(201).json({
//       message: 'Bệnh nhân đã được tạo thành công',
//       id: results.insertId,
//       ten,
//       ngay_sinh,
//       gioi_tinh,
//       dia_chi,
//       so_dien_thoai,
//       email,
//       anh
//     });
//   });
// });




// router.get('/tinh_trang_suc_khoe/:id_benh_nhan', (req, res) => {
//   const patientId = req.params.id_benh_nhan;
//   const query = 'SELECT * FROM thong_tin_tinh_trang_suc_khoe WHERE id_benh_nhan = ?';

//   req.db.query(query, [patientId], (error, results) => {
//     if (error) {
//       console.error('Database query error:', error);
//       return res.status(500).json({ error: 'An error occurred while fetching health status data.' });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ message: `No health status found for patient with ID ${patientId}.` });
//     }

//     res.status(200).json(results);
//   });
// });
// router.get('/thong_tin_chi_so_suc_khoe/:id_benh_nhan', (req, res) => {
//   const patientId = req.params.id_benh_nhan;
//   const query = 'SELECT * FROM thong_tin_chi_so_suc_khoe WHERE id_benh_nhan = ?';

//   req.db.query(query, [patientId], (error, results) => {
//     if (error) {
//       console.error('Database query error:', error);
//       return res.status(500).json({ error: 'An error occurred while fetching health index data.' });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ message: `No health index data found for patient with ID ${patientId}.` });
//     }

//     res.status(200).json(results);
//   });
// });


// module.exports = router;



var express = require('express');
var router = express.Router();




// Lấy danh sách bệnh nhân
router.get('/', (req, res) => {
  req.db.query('SELECT * FROM benh_nhan ORDER BY id DESC', (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});




router.get('/ttngay/:id_benh_nhan', (req, res) => {
  const { id_benh_nhan } = req.params;
  req.db.query('SELECT * FROM thong_tin_chi_so_suc_khoe WHERE id_benh_nhan = ?', [id_benh_nhan], (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});
router.get('/ttbenhly/:id_benh_nhan', (req, res) => {
  const { id_benh_nhan } = req.params;
  req.db.query('SELECT * FROM thong_tin_benh_ly WHERE id_benh_nhan = ?', [id_benh_nhan], (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});


// lọc
router.get('/filter_benhnhan', (req, res) => {
  const filterType = req.query.filterType || '';
  const gender = req.query.gender || '';
  let query = 'SELECT * FROM benh_nhan';


  if (filterType === 'oldest') {
    query += ' ORDER BY ngay_sinh ASC ';
  } else if (filterType === 'newest') {
    query += ' ORDER BY id DESC ';
  }




  if (gender === 'male') {
    query = `SELECT * FROM benh_nhan WHERE gioi_tinh = "Nam" `;
  } else if (gender === 'female') {
    query = `SELECT * FROM benh_nhan WHERE gioi_tinh = "Nữ" `;
  }


  // Execute query
  req.db.query(query, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json(results);
  });
});












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




router.post('/search-drug', (req, res) => {
  const { ten_duoc_pham } = req.body;


  // Kiểm tra xem tên thuốc có trống không
  if (!ten_duoc_pham) {
    return res.status(400).json({ message: 'Tên thuốc không được bỏ trống' });
  }


  // Sử dụng LIKE để tìm kiếm tên thuốc theo tên chứa từ khóa
  req.db.query(
    'SELECT * FROM thong_tin_duoc_pham WHERE ten_duoc_pham LIKE ?',
    [`%${ten_duoc_pham}%`],
    (error, results) => {
      if (error) return res.status(500).json({ error: error.message });


      // Kiểm tra nếu không tìm thấy kết quả nào
      if (results.length === 0) {
        return res.status(404).json({ message: 'Không tìm thấy thuốc nào' });
      }


      // Trả về danh sách thuốc tìm thấy
      res.json(results);
    }
  );
});


// Thêm Bệnh Lý
router.post('/add-benh-ly', (req, res) => {
  const { cham_doan, phuong_phap_dieu_tri, ngay_kham, id_benh_nhan } = req.body;


  if (!cham_doan || !phuong_phap_dieu_tri || !ngay_kham || !id_benh_nhan) {
    return res.status(400).json({ error: 'Missing required fields' });
  }


  req.db.query(
    'INSERT INTO thong_tin_benh_ly (cham_doan, phuong_phap_dieu_tri, ngay_kham, id_benh_nhan) VALUES (?, ?, ?, ?)',
    [cham_doan, phuong_phap_dieu_tri, ngay_kham, id_benh_nhan],
    (error, results) => {
      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: error.message });
      }


      // Respond with a success message and the newly inserted data
      res.status(201).json({
        message: 'Medical condition added successfully',
        data: {
          cham_doan,
          phuong_phap_dieu_tri,
          ngay_kham,
          id_benh_nhan,
          id_benh_ly: results.insertId, // Returning the ID of the newly inserted record
        },
      });
    }
  );
});


router.delete('/delete-benh-ly/:id', (req, res) => {
  const benhLyId = req.params.id;


  req.db.query(
    'DELETE FROM thong_tin_benh_ly WHERE id = ?',
    [benhLyId],
    (error, results) => {
      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: error.message });
      }


      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Medical condition not found' });
      }




      res.status(200).json({
        message: 'Medical condition deleted successfully',
        id_benh_ly: benhLyId,
      });
    }
  );
});


router.put('/update-benh-ly/:id', (req, res) => {
  const { cham_doan, phuong_phap_dieu_tri, ngay_kham, id_benh_nhan } = req.body;
  const benhLyId = req.params.id; // Lấy ID từ URL



  if (!cham_doan || !phuong_phap_dieu_tri || !ngay_kham || !id_benh_nhan) {
    return res.status(400).json({ error: 'Missing required fields' });
  }




  req.db.query(
    'SELECT * FROM thong_tin_benh_ly WHERE id_benh_ly = ?',
    [benhLyId],
    (error, results) => {
      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: error.message });
      }


      if (results.length === 0) {
        return res.status(404).json({ error: 'Medical condition not found' });
      }




      req.db.query(
        'UPDATE thong_tin_benh_ly SET cham_doan = ?, phuong_phap_dieu_tri = ?, ngay_kham = ?, id_benh_nhan = ? WHERE id_benh_ly = ?',
        [cham_doan, phuong_phap_dieu_tri, ngay_kham, id_benh_nhan, benhLyId],
        (error, updateResults) => {
          if (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: error.message });
          }


          // Trả về kết quả sau khi cập nhật thành công
          res.status(200).json({
            message: 'Medical condition updated successfully',
            data: {
              cham_doan,
              phuong_phap_dieu_tri,
              ngay_kham,
              id_benh_nhan,
              id_benh_ly: benhLyId, // Trả về ID của bản ghi đã cập nhật
            },
          });
        }
      );
    }
  );
});


module.exports = router;



