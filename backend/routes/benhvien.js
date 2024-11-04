const express = require('express');
const router = express.Router();

// Lấy tất cả bệnh viện
router.get('/', (req, res) => {
    req.db.query(`SELECT * FROM thong_tin_benh_vien`, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
    });
});
router.get('/:id', (req, res) => {
    const hospitalId = req.params.id;

    const query = 'SELECT * FROM thong_tin_benh_vien WHERE id = ?';
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


// Lấy chi tiết thông tin bệnh viện
router.get('/thong-tin-benh-vien/:id', (req, res) => {
    const { id } = req.params;

    req.db.query('SELECT * FROM ThongTinBenhVien WHERE id_benh_vien = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Bệnh viện không tồn tại' });
        }
        res.json(results[0]);
    });
});

// Thêm bệnh viện mới
router.post('/thong-tin-benh-vien', (req, res) => {
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
router.put('/thong-tin-benh-vien/:id', (req, res) => {
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
router.delete('/thong-tin-benh-vien/:id', (req, res) => {
    const { id } = req.params;
    req.db.query(`DELETE FROM ThongTinBenhVien WHERE id_benh_vien = ?`, [id], (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        if (results.affectedRows === 0) return res.status(404).json({ error: 'Bệnh viện không tìm thấy' });
        res.json({ message: 'Bệnh viện đã được xóa' });
    });
});

// tìm kiếm
router.get('/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;

    // Truy vấn MySQL với collation không phân biệt chữ hoa chữ thường và hỗ trợ tiếng Việt
    const query = `
        SELECT id, anh, ten, dia_chi, mo_ta, email, ten_cua_hang 
        FROM thong_tin_benh_vien 
        WHERE ten COLLATE utf8mb4_unicode_ci LIKE ?
    `;
    const values = [`%${keyword}%`];

    // Thực hiện truy vấn
    req.db.query(query, values, (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
            return res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu.' });
        }

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).json({ message: "Không tìm thấy" });
        }
    });
});


// Xuất router
module.exports = router;
