var express = require('express');
var router = express.Router();


// Lấy danh sách bệnh nhân
router.get('/', (req, res) => {
    req.db.query('SELECT * FROM benh_nhan', (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.json(results);
    });
  });
  
  
// Lấy thông tin bệnh nhân theo ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    req.db.query('SELECT * FROM benh_nhan WHERE id = ?', [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.length === 0) return res.status(404).json({ message: 'Bệnh nhân không tồn tại' });
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


module.exports = router;
