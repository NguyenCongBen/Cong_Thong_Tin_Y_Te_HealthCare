const express = require('express');
const router = express.Router();

// Lấy tất cả bệnh viện
router.get('/', (req, res) => {
    req.db.query(`SELECT * FROM thong_tin_duoc_pham`, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const hospitalId = req.params.id;

    const query = 'SELECT * FROM thong_tin_duoc_pham WHERE id = ?';
    req.db.query(query, [hospitalId], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ error: 'An error occurred while fetching data.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: `No information found for hospital with ID ${hospitalId}.` });
        }

        res.status(200).json(results[0]);
    });
});
router.post('/search', (req, res) => {
    const { keyword } = req.body; // Lấy từ khóa từ body của yêu cầu

    if (!keyword) {
        return res.status(400).json({ message: "Vui lòng cung cấp từ khóa tìm kiếm" }); // Kiểm tra từ khóa có hợp lệ không
    }

    const db = req.db;

    db.query(
        'SELECT * FROM thong_tin_duoc_pham WHERE ten_duoc_pham LIKE ?',
        [`%${keyword}%`], 
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message }); 
            }
           
            if (results.length > 0) {
                res.status(200).json(results); 
            } else {
                res.status(404).json({ message: "Không tìm thấy thuốc nào" }); 
            }
        }
    );
});
module.exports = router;