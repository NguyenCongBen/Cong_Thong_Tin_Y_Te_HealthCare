var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

// Configure storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Folder where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the original filename
    }
});

const upload = multer({ storage: storage });

// Get all specialties
router.get('/', (req, res) => {
    const db = req.db;
    db.query('SELECT * FROM chuyen_khoa', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get specialty by ID
router.get('/:id', (req, res) => {
    const db = req.db;
    const { id } = req.params;

    db.query('SELECT * FROM chuyen_khoa WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Chuyên khoa không tồn tại' });
        }
        res.json(results[0]);
    });
});

// Create a new specialty
router.post('/', upload.single('anh'), (req, res) => {
    const db = req.db;
    const { ten_chuyen_khoa, mo_ta } = req.body;
    const anh = req.file ? req.file.filename : null;

    // Validation
    if (!ten_chuyen_khoa || typeof ten_chuyen_khoa !== 'string') {
        return res.status(400).json({ error: "Tên chuyên khoa là bắt buộc và phải là một chuỗi" });
    }

    const sql = 'INSERT INTO chuyen_khoa (ten_chuyen_khoa, mo_ta, anh) VALUES (?, ?, ?)';
    db.query(sql, [ten_chuyen_khoa, mo_ta, anh], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Lỗi khi thêm chuyên khoa mới" });
        }
        res.status(201).json({ message: 'Chuyên khoa đã được tạo!', id: results.insertId });
    });
});

// Update a specialty
router.put('/:id', upload.single('anh'), (req, res) => {
    const db = req.db;
    const { id } = req.params;
    const { ten_chuyen_khoa, mo_ta } = req.body;
    const anh = req.file ? req.file.filename : null;

    const sql = 'UPDATE chuyen_khoa SET ten_chuyen_khoa = ?, mo_ta = ?, anh = ? WHERE id = ?';
    db.query(sql, [ten_chuyen_khoa, mo_ta, anh, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Lỗi khi cập nhật chuyên khoa" });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Chuyên khoa không tồn tại' });
        }
        res.json({ message: 'Chuyên khoa đã được cập nhật!' });
    });
});

// Delete a specialty
router.delete('/:id', (req, res) => {
    const db = req.db;
    const { id } = req.params;

    const sql = 'DELETE FROM chuyen_khoa WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Lỗi khi xóa chuyên khoa" });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Chuyên khoa không tồn tại' });
        }
        res.json({ message: 'Chuyên khoa đã được xóa!' });
    });
});

module.exports = router;
