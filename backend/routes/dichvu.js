const express = require('express');
const router = express.Router();

// Lấy tất cả bệnh viện
router.get('/', (req, res) => {
    req.db.query(`SELECT * FROM dich_vu`, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
    });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;

    const query = 'SELECT * FROM dich_vu WHERE id = ?';
    req.db.query(query, [id], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ error: 'An error occurred while fetching data.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: `No information found for hospital with ID ${id}.` });
        }

        res.status(200).json(results[0]);
    });
});
module.exports = router;