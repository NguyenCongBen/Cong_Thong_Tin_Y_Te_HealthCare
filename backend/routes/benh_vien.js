const express = require('express');
const router = express.Router();

// Lấy tất cả bệnh viện
router.get('/thong-tin-benh-vien', (req, res) => {
    req.db.query(`SELECT * FROM ThongTinBenhVien`, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
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

// Xuất router
module.exports = router;
