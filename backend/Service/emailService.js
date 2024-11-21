// emailService.js
const nodemailer = require('nodemailer');


// Hàm gửi email
async function sendEmail({ to, subject, text }) {
    try {
        // Tạo transporter từ biến môi trường hoặc dịch vụ email khác
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ncb301104@gmail.com', // Email người gửi từ biến môi trường
                pass: 'osqx ueqr ohiu ghmd'  // Mật khẩu ứng dụng từ biến môi trường
            }
        });


        const mailOptions = {
            from:'ncb301104@gmail.com', // Email người gửi
            to: to,
            subject: subject,
            text: text,
        };


        // Gửi email
        await transporter.sendMail(mailOptions);
        console.log('Email đã được gửi thành công!');
    } catch (error) {
        console.error('Lỗi khi gửi email:', error);
        throw error; // Đẩy lỗi ra ngoài để xử lý ở nơi gọi
    }
}


module.exports = { sendEmail };





