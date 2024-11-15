const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { sendEmail } = require('../Service/emailService'); // Import module emailService

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
        bv.ten,
        bn.ten AS ten_benh_nhan,
        bn.email AS email_benh_nhan,
        ck.ten_chuyen_khoa

       FROM lich_hen lh
       JOIN bac_si bs ON lh.id_bac_si = bs.id
       JOIN benh_nhan bn ON lh.id_benh_nhan = bn.id
       JOIN chuyen_khoa ck ON lh.id_chuyen_khoa = ck.id
       JOIN thong_tin_benh_vien bv ON lh.id_benh_vien = bv.id
       ORDER BY lh.id DESC`, // Sắp xếp theo id tăng dần
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
        bv.ten,
        bn.ten AS ten_benh_nhan,
        ck.ten_chuyen_khoa

        FROM lich_hen lh
       JOIN bac_si bs ON lh.id_bac_si = bs.id
       JOIN benh_nhan bn ON lh.id_benh_nhan = bn.id
       JOIN chuyen_khoa ck ON lh.id_chuyen_khoa = ck.id
       JOIN thong_tin_benh_vien bv ON lh.id_benh_vien = bv.id
        WHERE bn.id = ?
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
    const benhnhanId = req.params.id;

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
            bv.ten AS ten_benh_vien,
            bn.ten AS ten_benh_nhan,
            bn.ngay_sinh,
           bn.email,
           bn.so_dien_thoai,
           bn.gioi_tinh,
            bn.dia_chi,

            ck.ten_chuyen_khoa
        FROM lich_hen lh
        JOIN bac_si bs ON lh.id_bac_si = bs.id
        JOIN benh_nhan bn ON lh.id_benh_nhan = bn.id
        JOIN chuyen_khoa ck ON lh.id_chuyen_khoa = ck.id
        JOIN thong_tin_benh_vien bv ON lh.id_benh_vien = bv.id
        WHERE lh.id_benh_nhan = ?
        ORDER BY lh.thoi_gian_hen DESC
        LIMIT 1`, 
        [benhnhanId], // Pass the patient ID as a parameter to the query
        (error, results) => {
            if (error) {
                console.error("Database error:", error.message);
                return res.status(500).json({ error: "An error occurred while fetching the appointment details." });
            }

            // If no results found (i.e., the patient has no appointments)
            if (results.length === 0) {
                return res.status(404).json({ message: 'No appointment found for this patient' });
            }

            // Return the appointment details in a structured response
            return res.json({
                success: true,
                data: results[0]  // Return only the latest appointment
            });
        }
    );
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

// Cập nhật trạng thái lịch hẹn và gửi email cho bệnh nhân
router.put('/:id/status', (req, res) => {
    const appointmentId = req.params.id;
    const { trang_thai, email_benh_nhan, ten_benh_nhan, ten_bac_si, ten_benh_vien, thoi_gian_hen, ten_chuyen_khoa, mo_ta } = req.body;

    // Kiểm tra xem trạng thái có hợp lệ không
    if (!trang_thai) {
        return res.status(400).json({ message: 'Trạng thái không được để trống' });
    }

    // Cập nhật chỉ trạng thái của cuộc hẹn
    req.db.query(
        `UPDATE lich_hen SET 
            trang_thai = ?
        WHERE id = ?`,
        [
            trang_thai, // Cập nhật trạng thái
            appointmentId
        ],
        async (error, results) => {
            if (error) {
                console.error('Lỗi khi cập nhật trạng thái:', error);
                return res.status(500).json({ error: 'Lỗi khi cập nhật trạng thái.' });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ message: 'Cuộc hẹn không tồn tại' });
            }

            // Nếu trạng thái là "Đã xác nhận" và có email bệnh nhân, gửi email
            if (trang_thai === 'Đã xác nhận' && email_benh_nhan) {
                try {
                    const emailSubject = 'Lịch hẹn của bạn đã được xác nhận';
                    const emailText = `
                        Kính gửi ${ten_benh_nhan},\n\n
                        Lịch hẹn của bạn với bác sĩ ${ten_bac_si} tại bệnh viện ${ten_benh_vien} đã được xác nhận. Chi tiết lịch hẹn như sau:\n
                        - Thời gian: ${new Date(thoi_gian_hen).toLocaleString()}\n
                        - Chuyên khoa: ${ten_chuyen_khoa}\n
                        - Lý do khám: ${mo_ta}\n\n
                        Vui lòng kiểm tra lại và đến đúng giờ.\n
                        Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.\n\n
                        Trân trọng,\nHệ thống đặt lịch khám
                    `;

                    // Gửi email
                    await sendEmail({
                        to: email_benh_nhan,
                        subject: emailSubject,
                        text: emailText,
                    });

                    console.log('Email đã được gửi thành công');
                } catch (emailError) {
                    console.error('Lỗi khi gửi email:', emailError);
                    return res.status(500).json({ error: 'Lỗi khi gửi email thông báo cho bệnh nhân.' });
                }
            }

            return res.status(200).json({ message: 'Trạng thái cuộc hẹn đã được cập nhật thành công.' });
        }
    );
});





// thêm lịch hẹn
router.post('/', (req, res) => {
    const { appointmentData, patientInfo } = req.body;

    // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu chưa
    const checkEmailQuery = 'SELECT * FROM benh_nhan WHERE email = ?';
    req.db.query(checkEmailQuery, [patientInfo.email], (error, results) => {
        if (error) {
            console.error('Error checking email:', error);
            return res.status(500).json({ message: 'Error checking email', error });
        }

        // Nếu bệnh nhân đã tồn tại, cập nhật thông tin bệnh nhân
        if (results.length > 0) {
            const patientId = results[0].id;
            const updatePatientQuery = 'UPDATE benh_nhan SET ? WHERE id = ?';

            req.db.query(updatePatientQuery, [patientInfo, patientId], (updateError, updateResult) => {
                if (updateError) {
                    console.error('Error updating patient info:', updateError);
                    return res.status(500).json({ message: 'Error updating patient info', error: updateError });
                }

                // Tiếp tục với việc tạo lịch hẹn mới
                const appointmentDataWithPatientId = {
                    ...appointmentData,
                    id_benh_nhan: patientId,
                };

                const appointmentQuery = 'INSERT INTO lich_hen SET ?';
                req.db.query(appointmentQuery, appointmentDataWithPatientId, (appointmentError, appointmentResult) => {
                    if (appointmentError) {
                        console.error('Error adding appointment:', appointmentError);
                        return res.status(500).json({ message: 'Error adding appointment', error: appointmentError });
                    }

                    // Gửi email xác nhận
                    sendConfirmationEmail(patientInfo, appointmentData);

                    return res.status(200).json({
                        message: 'Patient info updated and appointment created successfully',
                        appointmentId: appointmentResult.insertId,
                        patientId: patientId,
                    });
                });
            });
        } else {
            // Nếu email chưa tồn tại, tạo mới bệnh nhân và lịch hẹn
            const patientQuery = 'INSERT INTO benh_nhan SET ?';
            req.db.query(patientQuery, patientInfo, (patientError, patientResult) => {
                if (patientError) {
                    console.error('Error adding patient:', patientError);
                    return res.status(500).json({ message: 'Error adding patient', error: patientError });
                }

                // Tạo lịch hẹn mới với id_benh_nhan
                const appointmentDataWithPatientId = {
                    ...appointmentData,
                    id_benh_nhan: patientResult.insertId,
                };

                const appointmentQuery = 'INSERT INTO lich_hen SET ?';
                req.db.query(appointmentQuery, appointmentDataWithPatientId, (appointmentError, appointmentResult) => {
                    if (appointmentError) {
                        console.error('Error adding appointment:', appointmentError);
                        return res.status(500).json({ message: 'Error adding appointment', error: appointmentError });
                    }

                    // Gửi email xác nhận
                    sendConfirmationEmail(patientInfo, appointmentData);

                    return res.status(201).json({
                        message: 'Patient and appointment created successfully',
                        appointmentId: appointmentResult.insertId,
                        patientId: patientResult.insertId,
                    });
                });
            });
        }
    });
});

// Hàm gửi email xác nhận
function sendConfirmationEmail(patientInfo, appointmentData) {
    const emailSubject = 'Xác nhận lịch hẹn';
    const emailText = `Chào ${patientInfo.ten},\n\n
Lịch hẹn của bạn đã được đặt thành công với các thông tin sau:\n
- Ngày giờ: ${appointmentData.thoi_gian_hen}\n
- Bệnh viện: ${appointmentData.id_benh_vien}\n
- Dịch vụ: ${appointmentData.mo_ta}\n
- Trạng thái: ${appointmentData.trang_thai}\n\n
Nếu bạn muốn hủy lịch hẹn, vui lòng liên hệ với chúng tôi hoặc làm theo hướng dẫn trong hệ thống.\n\n
Trân trọng,\nĐội ngũ chăm sóc khách hàng.`;

    sendEmail({
        to: patientInfo.email,
        subject: emailSubject,
        text: emailText,
    });
}





module.exports = router;