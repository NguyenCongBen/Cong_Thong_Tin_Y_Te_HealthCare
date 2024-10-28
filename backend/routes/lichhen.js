const express = require('express');
const router = express.Router();

// Lấy tất cả bệnh viện
router.get('/', (req, res) => {
    req.db.query(`SELECT * FROM lich_hen  `, (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(results);
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