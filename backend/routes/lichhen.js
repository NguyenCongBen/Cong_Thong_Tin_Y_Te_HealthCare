const express = require('express');
const router = express.Router();

// Lấy tất cả bệnh việnrouter.get('/', (req, res) => {
    router.get('/', (req, res) => {
        req.db.query(`
            SELECT 
                lich_hen.*, 
                bac_si.*
            FROM 
                lich_hen
            JOIN 
                bac_si ON lich_hen.id_bac_si = bac_si.id
        `, (error, results) => {
            if (error) return res.status(500).json({ error: error.message });
            res.json(results);
        });
    });
    
  
// Cập nhật trạng thái lịch hẹn
router.put('/:id/status', (req, res) => {
    const { id } = req.params; 
    const { trang_thai } = req.body; 

    const query = 'UPDATE lich_hen SET trang_thai = ? WHERE id = ?';

    req.db.query(query, [trang_thai, id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Lịch hẹn không tìm thấy' });
        }
        res.json({ id: id, trang_thai: trang_thai }); // Trả về ID và trạng thái đã cập nhật
    });
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
router.post('/', (req, res) => {
    const { appointmentData, patientInfo } = req.body;

    // Insert new patient
    const patientQuery = 'INSERT INTO benh_nhan SET ?';
    req.db.query(patientQuery, patientInfo, (error, patientResult) => {
        if (error) {
            console.error('Error adding patient:', error);
            return res.status(500).json({ message: 'Error adding patient', error });
        }

        // Prepare appointment data with the new patient ID
        const appointmentDataWithPatientId = {
            ...appointmentData,
            id_benh_nhan: patientResult.insertId,
        };

        const appointmentQuery = 'INSERT INTO lich_hen SET ?';
        req.db.query(appointmentQuery, appointmentDataWithPatientId, (error, appointmentResult) => {
            if (error) {
                console.error('Error adding appointment:', error);
                // If there was an error while inserting appointment data, consider rolling back the patient insertion if applicable
                return res.status(500).json({ message: 'Error adding appointment', error });
            }

            // Successful response with appointment and patient IDs
            return res.status(201).json({
                message: 'Appointment and patient created successfully',
                appointmentId: appointmentResult.insertId,
                patientId: patientResult.insertId,
            });
        });
    });
});

module.exports = router;