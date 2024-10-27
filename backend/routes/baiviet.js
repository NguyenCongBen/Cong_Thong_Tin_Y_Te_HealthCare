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

// Get all articles
router.get('/', (req, res) => {
    const db = req.db;
    db.query('SELECT * FROM bai_viet', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get article by ID
router.get('/:id', (req, res) => {
    const db = req.db;
    const { id } = req.params;

    db.query('SELECT * FROM bai_viet WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Bài viết không tồn tại' });
        }
        res.json(results[0]);
    });
});

// Create a new article
router.post('/', upload.single('anh'), (req, res) => {
    const db = req.db;
    const { ten, mota, id_chuyen_khoa, id_bac_si } = req.body; // Ensure these match the incoming request keys
    const anh = req.file ? req.file.filename : null;

    // Validate required fields
    if (!ten || typeof ten !== 'string' || ten.trim() === '') {
        return res.status(400).json({ error: "Tiêu đề là bắt buộc và phải là một chuỗi" });
    }
    
    if (!mota || typeof mota !== 'string' || mota.trim() === '') {
        return res.status(400).json({ error: "Mô tả là bắt buộc và phải là một chuỗi" });
    }

    if (!id_chuyen_khoa || isNaN(id_chuyen_khoa)) {
        return res.status(400).json({ error: "ID chuyên khoa là bắt buộc và phải là một số" });
    }
    
    if (!id_bac_si || isNaN(id_bac_si)) {
        return res.status(400).json({ error: "ID bác sĩ là bắt buộc và phải là một số" });
    }

    // SQL query to insert the new article
    const sql = 'INSERT INTO bai_viet (ten, mota, anh, id_chuyen_khoa, id_bac_si) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [ten, mota, anh, id_chuyen_khoa, id_bac_si], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Lỗi khi thêm bài viết mới" });
        }
        res.status(201).json({ message: 'Bài viết đã được tạo!', id: results.insertId });
    });
});

// Update an article
router.put('/:id', upload.single('anh'), (req, res) => {
    const db = req.db;
    const { id } = req.params;
    const { ten, mota, id_chuyen_khoa, id_bac_si } = req.body;
    const anh = req.file ? req.file.filename : null;

    const sql = 'UPDATE bai_viet SET ten = ?, mota = ?, anh = ?, id_chuyen_khoa = ?, id_bac_si = ? WHERE id = ?';
    db.query(sql, [ten, mota, anh, id_chuyen_khoa, id_bac_si, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Lỗi khi cập nhật bài viết" });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Bài viết không tồn tại' });
        }
        res.json({ message: 'Bài viết đã được cập nhật!' });
    });
});

// Delete an article
router.delete('/:id', (req, res) => {
    const db = req.db;
    const { id } = req.params;

    const sql = 'DELETE FROM bai_viet WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Lỗi khi xóa bài viết" });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Bài viết không tồn tại' });
        }
        res.json({ message: 'Bài viết đã được xóa!' });
    });
});

// Get articles by specialty ID
router.get('/chuyen-khoa/:id/bai-viet', (req, res) => {
    const db = req.db;
    const { id } = req.params;

    db.query('SELECT * FROM bai_viet WHERE id_chuyen_khoa = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get articles by doctor ID
router.get('/bac-si/:bacSiId/bai-viet', (req, res) => {
    const db = req.db;
    const { bacSiId } = req.params;

    db.query('SELECT * FROM bai_viet WHERE id_bac_si = ?', [bacSiId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Create a new image for a post
router.post('/anh-bai-viet', upload.single('anh'), (req, res) => {
    const db = req.db;
    const { id_bai_viet } = req.body;
    const anh = req.file ? req.file.filename : null;

    // Validate required fields
    if (!id_bai_viet || isNaN(id_bai_viet)) {
        return res.status(400).json({ error: "ID bài viết là bắt buộc và phải là một số" });
    }

    // SQL query to insert the new image
    const sql = 'INSERT INTO anh_bai_viet (anh, id_bai_viet) VALUES (?, ?)';
    db.query(sql, [anh, id_bai_viet], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Lỗi khi thêm hình ảnh" });
        }
        res.status(201).json({ message: 'Hình ảnh đã được thêm!', id: results.insertId });
    });
});

// Get images associated with a specific article
router.get('/anh-bai-viet/:id_bai_viet', (req, res) => {
    const db = req.db;
    const { id_bai_viet } = req.params;

    db.query('SELECT * FROM anh_bai_viet WHERE id_bai_viet = ?', [id_bai_viet], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});
// Get detailed article by ID including associated images
router.get('/chi-tiet/:id', (req, res) => {
    const db = req.db;
    const { id } = req.params;

    // Fetch the article and associated images using GROUP_CONCAT
    const sql = `
        SELECT b.*, GROUP_CONCAT(a.anh) AS images
        FROM bai_viet b
        LEFT JOIN anh_bai_viet a ON b.id = a.id_bai_viet
        WHERE b.id = ?
        GROUP BY b.id;
    `;

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Bài viết không tồn tại' });
        }

        const article = results[0];

        // Split the images string into an array
        const images = article.images ? article.images.split(',') : [];

        // Combine the article data with the associated images
        const detailedArticle = {
            ...article,
            images: images // Add images to the article object
        };

        res.json(detailedArticle);
    });
});

module.exports = router;
