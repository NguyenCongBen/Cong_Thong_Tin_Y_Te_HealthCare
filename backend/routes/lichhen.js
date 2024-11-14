const express = require('express');
const router = express.Router();

// Lấy tất cả bệnh việnrouter.get('/', (req, res) => {
// router.get('/', (req, res) => {
//     req.db.query(`
//             SELECT 
//                 lich_hen.*, 
//                 bac_si.*
//             FROM 
//                 lich_hen
//             JOIN 
//                 bac_si ON lich_hen.id_bac_si = bac_si.id
//         `, (error, results) => {
//         if (error) return res.status(500).json({ error: error.message });
//         res.json(results);
//     });
// });

//show tất cả lịch hẹn 
router.get('/', (req, res) => {
    req.db.query(
        `SELECT 
        lh.id, 
        lh.id_benh_nhan, 
        lh.id_chuyen_khoa, 
        lh.thoi_gian_hen, 
        lh.mo_ta, 
        lh.trang_thai, 
        lh.id_bac_si, 
        lh.id_benh_vien, 
        bs.ten AS ten_bac_si,
        bv.ten
       FROM lich_hen lh
       JOIN bac_si bs ON lh.id_bac_si = bs.id
       JOIN thong_tin_benh_vien bv ON lh.id_benh_vien = bv.id
       ORDER BY lh.id ASC`, // Sắp xếp theo id tăng dần
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            // Trả về danh sách lịch hẹn
            res.json(results);
        }
    );
});

// show tất cả trạng thái
router.get('/status', (req, res) => {
    req.db.query(
        `SELECT DISTINCT trang_thai 
        FROM lich_hen
        ORDER BY trang_thai ASC`, // Sắp xếp trạng thái theo thứ tự chữ cái
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }

            // Kiểm tra nếu không có kết quả nào
            if (results.length === 0) {
                return res.status(404).json({ message: 'Không có trạng thái lịch hẹn nào' });
            }

            // Trả về tất cả các trạng thái
            res.json(results.map(result => result.trang_thai));
        }
    );
});



//cập nhật trạng thái 
router.put('/:id/status', (req, res) => {
    const appointmentId = req.params.id; // Lấy ID của lịch hẹn từ URL
    const { trang_thai } = req.body; // Lấy trạng thái mới từ body request

    // Kiểm tra nếu không có trạng thái trong body request
    if (!trang_thai) {
        return res.status(400).json({ message: 'Trạng thái không được để trống' });
    }

    // Cập nhật trạng thái mới cho lịch hẹn
    req.db.query(
        `UPDATE lich_hen
        SET trang_thai = ?
        WHERE id = ?`,
        [trang_thai, appointmentId], // Truyền tham số trạng thái mới và ID lịch hẹn
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }

            // Kiểm tra nếu không có bản ghi nào được cập nhật (có thể do không tìm thấy lịch hẹn)
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: 'Lịch hẹn không tồn tại' });
            }

            // Trả về thông báo thành công
            res.status(200).json({ message: 'Trạng thái lịch hẹn đã được cập nhật thành công' });
        }
    );
});


// show chi tiết lịch hẹn
router.get('/:id', (req, res) => {
    const appointmentId = req.params.id; // Get the appointment ID from the request URL

    req.db.query(
        `SELECT 
            lh.id, 
            lh.id_benh_nhan, 
            lh.id_chuyen_khoa, 
            lh.thoi_gian_hen, 
            lh.mo_ta, 
            lh.trang_thai, 
            lh.id_bac_si, 
            lh.id_benh_vien, 
            bs.ten AS ten_bac_si,
            bv.ten AS ten_benh_vien
        FROM lich_hen lh
        JOIN bac_si bs ON lh.id_bac_si = bs.id
        JOIN thong_tin_benh_vien bv ON lh.id_benh_vien = bv.id
        WHERE lh.id = ?
        LIMIT 1`, // Use the appointment ID to fetch a single appointment
        [appointmentId], // Pass the appointment ID as a parameter to the query
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }

            // If no results found
            if (results.length === 0) {
                return res.status(404).json({ message: 'Appointment not found' });
            }

            // Return the appointment details
            res.json(results[0]);
        }
    );
});



router.get('/bac_si/:id', (req, res) => {
    const doctorId = req.params.id; // Lấy ID bác sĩ từ tham số đường dẫn

    const query = `
        SELECT * FROM lich_hen 
        WHERE id_bac_si = ?
    `;

    req.db.query(query, [doctorId], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ error: 'An error occurred while fetching data.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: `No lich_hen found for doctor with ID ${doctorId}.` });
        }

        res.status(200).json(results); // Trả về danh sách lịch hẹn
    });
});

router.get('/benh_nhan/:id', (req, res) => {
    const doctorId = req.params.id; // Lấy ID bác sĩ từ tham số đường dẫn

    const query = `
        SELECT * FROM lich_hen 
        WHERE id_benh_nhan = ?
    `;

    req.db.query(query, [doctorId], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ error: 'An error occurred while fetching data.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: `No lich_hen found for doctor with ID ${doctorId}.` });
        }

        res.status(200).json(results); // Trả về danh sách lịch hẹn
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

// thêm lịch hẹn
// router.post('/', (req, res) => {
//     const { appointmentData, patientInfo } = req.body;

//     // Insert new patient
//     const patientQuery = 'INSERT INTO benh_nhan SET ?';
//     req.db.query(patientQuery, patientInfo, (error, patientResult) => {
//         if (error) {
//             console.error('Error adding patient:', error);
//             return res.status(500).json({ message: 'Error adding patient', error });
//         }

//         // Prepare appointment data with the new patient ID
//         const appointmentDataWithPatientId = {
//             ...appointmentData,
//             id_benh_nhan: patientResult.insertId,
//         };

//         const appointmentQuery = 'INSERT INTO lich_hen SET ?';
//         req.db.query(appointmentQuery, appointmentDataWithPatientId, (error, appointmentResult) => {
//             if (error) {
//                 console.error('Error adding appointment:', error);
//                 // If there was an error while inserting appointment data, consider rolling back the patient insertion if applicable
//                 return res.status(500).json({ message: 'Error adding appointment', error });
//             }

//             // Successful response with appointment and patient IDs
//             return res.status(201).json({
//                 message: 'Appointment and patient created successfully',
//                 appointmentId: appointmentResult.insertId,
//                 patientId: patientResult.insertId,
//             });
//         });
//     });
// });

router.post('/api/lich_hen', (req, res) => {
    const {
        id_benh_nhan,
        id_chuyen_khoa,
        thoi_gian_hen,
        mo_ta,
        id_bac_si,
        id_benh_vien
    } = req.body;

    // Nếu trạng thái không được gửi từ client, đặt mặc định là 'Đang chờ'
    const trang_thai = req.body.trang_thai || 'Đang chờ';

    // Truy vấn SQL để thêm lịch hẹn mới
    req.db.query(
        `INSERT INTO lich_hen (
            id_benh_nhan, 
            id_chuyen_khoa, 
            thoi_gian_hen, 
            mo_ta, 
            trang_thai, 
            id_bac_si, 
            id_benh_vien
        ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id_benh_nhan, id_chuyen_khoa, thoi_gian_hen, mo_ta, trang_thai, id_bac_si, id_benh_vien],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }

            res.status(201).json({ message: 'Lịch hẹn đã được thêm thành công', id: results.insertId });
        }
    );
});




module.exports = router;