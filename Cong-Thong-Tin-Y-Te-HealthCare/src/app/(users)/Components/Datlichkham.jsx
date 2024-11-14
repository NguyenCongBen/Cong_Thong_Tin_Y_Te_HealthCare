// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import useSWR from "swr";

// export default function DatLichKham() {
//     const fetcher = (...args) => fetch(...args).then((res) => res.json());
//     const router = useRouter();
//     const [selectedChuyenKhoaId, setSelectedChuyenKhoaId] = useState("");
//     const [formData, setFormData] = useState({
//         hoTen: '',
//         soDienThoai: '',
//         email: '',
//         ngaySinh: '',
//         lyDoKham: '',
//         gioiTinh: '',
//         diaChi: '',
//         idBenhVien: '',
//         idBacSi: '',
//         idChuyenKhoa: '',
//         thoiGianKham: '',
//     });


//     const { data: dataPhongkham, error: errorPhongkham, isLoading: isLoadingPhongkham } = useSWR('http://localhost:3000/benhvien', fetcher);
//     const { data: dataChuyenkhoa, error: errorChuyenkhoa, isLoading: isLoadingChuyenkhoa } = useSWR('http://localhost:3000/chuyenkhoa', fetcher);
//     const { data: dataBacsi, error: errorBacsi, isLoading: isLoadingBacsi } = useSWR(
//         selectedChuyenKhoaId ? `http://localhost:3000/doctor/chuyen-khoa/${selectedChuyenKhoaId}` : null,
//         fetcher
//     );

//     if (errorPhongkham || errorChuyenkhoa || errorBacsi) return <strong>Lỗi...</strong>;
//     if (isLoadingPhongkham || isLoadingChuyenkhoa || isLoadingBacsi) return <strong>Đang tải...</strong>;

//     const handleChuyenKhoaChange = (event) => {
//         setSelectedChuyenKhoaId(event.target.value);
//         setFormData({ ...formData, idChuyenKhoa: event.target.value });
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();


//         const appointmentData = {
//             id_chuyen_khoa: formData.idChuyenKhoa,
//             thoi_gian_hen: formData.thoiGianKham,
//             mo_ta: formData.lyDoKham,
//             trang_thai: 'Đang chờ',
//             id_bac_si: formData.idBacSi,
//             id_benh_vien: formData.idBenhVien
//         };


//         const patientInfo = {
//             anh: "anh1.jpg",
//             ten: formData.hoTen,
//             ngay_sinh: formData.ngaySinh,
//             gioi_tinh: formData.gioiTinh,
//             dia_chi: formData.diaChi,
//             so_dien_thoai: formData.soDienThoai,
//             email: formData.email
//         };

//         try {
//             const response = await fetch('http://localhost:3000/lichhen/lich_hen', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ appointmentData, patientInfo }),
//             });

//             console.log('Submitting data:', { appointmentData, patientInfo });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Error response from server:', errorData);
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log(data);
//             alert('Đặt lịch hẹn thành công');
//             router.push('/dltc');
//             setIsSuccess(true);
//             resetForm();
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             hoTen: '',
//             soDienThoai: '',
//             email: '',
//             gioiTinh: '',
//             diaChi: '',
//             ngaySinh: '',
//             lyDoKham: '',
//             idBenhVien: '',
//             idBacSi: '',
//             idChuyenKhoa: '',
//             thoiGianKham: ''
//         });
//         setSelectedChuyenKhoaId('');
//     };

//     const generateTimeSlots = () => {
//         const slots = [];
//         const start = new Date();
//         start.setHours(8, 0, 0, 0);
//         const end = new Date();
//         end.setHours(16, 30, 0, 0);

//         while (start <= end) {
//             const time = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//             slots.push(time);
//             start.setMinutes(start.getMinutes() + 30);
//         }
//         return slots;
//     };

//     const timeSlots = generateTimeSlots();
//     return (
//         <>
//             <main>
//                 <div class="container-all">
//                     <div class="container-body">
//                         <div class="container-1">
//                             <div class="lk-content_info_book-1">
//                                 <div class="lk-content_info_book">
//                                     <h2 class="sm-title_cate_news">
//                                         Nội dung chi tiết đặt hẹn
//                                     </h2>
//                                     <form onSubmit={handleSubmit}>
//                                         <div class="lk-list_two_booking">
//                                             <div class="lk-col6 lk-right">
//                                                 <div class="lk-mb2">
//                                                     <p class="lk-color-blue">
//                                                         Bệnh viện/phòng khám Vinmec
//                                                         <span class="lk-color-red">*</span>
//                                                     </p>
//                                                     <select class="form-select form-select-lg mb-3" id="lk-form-select" value={selectedChuyenKhoaId} onChange={handleChuyenKhoaChange}>
//                                                         <option value="">Chọn cơ sở khám</option>
//                                                         {dataPhongkham.map(bv => (
//                                                             <option key={bv.id} value={bv.id}>{bv.ten}</option>
//                                                         ))}
//                                                     </select>
//                                                 </div>
//                                                 <div class="lk-mb2">
//                                                     <p class="lk-color-blue">
//                                                         Chuyên khoa
//                                                         <span class="lk-color-red">*</span>
//                                                     </p>
//                                                     <select onChange={(e) => { setFormData({ ...formData, idChuyenKhoa: e.target.value }) }} class="form-select form-select-lg mb-3" id="lk-form-select">
//                                                         <option selected>Chọn chuyên khoa</option>
//                                                         <option value="0">Chưa xác định chuyên khoa</option>
//                                                         {dataChuyenkhoa.map(ck => (
//                                                             <option key={ck.id} value={ck.id}>{ck.ten_chuyen_khoa}</option>
//                                                         ))}
//                                                     </select>
//                                                 </div>
//                                                 <div class="lk-mb2">
//                                                     <p class="lk-color-blue">
//                                                         Bác sĩ
//                                                     </p>
//                                                     <select onChange={(e) => { setFormData({ ...formData, idBacSi: e.target.value }) }} class="form-select form-select-lg mb-3" id="lk-form-select">
//                                                         <option selected>Chọn Bác sĩ muốn khám</option>
//                                                         {dataBacsi && dataBacsi.map(bs => (
//                                                             <option key={bs.id_chuyen_khoa} value={bs.id_chuyen_khoa}>{bs.ten}</option>
//                                                         ))}
//                                                     </select>
//                                                 </div>
//                                                 <div>
//                                                     <label for="#" class="lk-flex">
//                                                         <input type="checkbox" />
//                                                         Đặt hẹn cho người nước ngoài
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                             <div className="lk-col6 lk-left">
//                                                 <p className="lk-color-blue color-toi">
//                                                     Thời gian khám<span className="lk-color-red color-toi">*</span>
//                                                 </p>
//                                                 <select
//                                                     onChange={(e) => {
//                                                         setFormData({ ...formData, thoiGianKham: e.target.value });
//                                                     }}
//                                                     className="form-select lk-input-2"
//                                                     id="lk-form-select"
//                                                     required
//                                                 >
//                                                     <option value="">Chọn thời gian khám</option>
//                                                     {timeSlots.map((slot, index) => (
//                                                         <option key={index} value={slot}>
//                                                             {slot}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                                 <div className="lk-mt2">
//                                                     *Lưu ý: Thời gian khám trên chỉ là thời gian dự kiến, tổng đài sẽ liên hệ xác nhận thời gian khám chính xác tới quý khách sau khi quý khách đặt hẹn.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="lk-mt60">
//                                             <h2 class="sm-title_cate_news">
//                                                 Thông tin khách hàng
//                                             </h2>
//                                             <div class="lk-list_two_booking lk-mbt-1">
//                                                 <div class="lk-col6 lk-right">
//                                                     <div class="lk-mb2 lk-mbt">
//                                                         <p class="lk-color-blue">
//                                                             Họ và tên
//                                                             <span class="lk-color-red">*</span>
//                                                         </p>
//                                                         <div class="lk-input">
//                                                             <input class="lk-input-1" id="lk-form-select" type="text"
//                                                                 placeholder="Họ và tên" name="hoTen" onChange={handleInputChange} required />
//                                                             <div class="lk-input_gender">
//                                                                 <label for="#" class="lk-lable">
//                                                                     <input type="radio" name="gender" class="lk-gender-picker" onChange={handleInputChange} required />
//                                                                     Nam
//                                                                 </label>
//                                                                 <label for="#" class="lk-lable">
//                                                                     <input type="radio" name="gender" class="lk-gender-picker" onChange={handleInputChange} required />
//                                                                     Nữ
//                                                                 </label>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="lk-mb2 lk-mbt">
//                                                         <p class="lk-color-blue">
//                                                             Số điện thoại
//                                                             <span class="lk-color-red">*</span>
//                                                         </p>
//                                                         <div class="lk-input">
//                                                             <input class="lk-input-2" id="lk-form-select" type="text"
//                                                                 placeholder="Nhập số điện thoại" name="soDienThoai" onChange={handleInputChange} required />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="lk-col6 lk-left">
//                                                     <div class="lk-mb2 lk-mbt">
//                                                         <p class="lk-color-blue">
//                                                             Ngày tháng năm sinh
//                                                             <span class="lk-color-red">*</span>
//                                                         </p>
//                                                         <div class="lk-input">
//                                                             <input class="lk-input-2" id="lk-form-select" type="date"
//                                                                 placeholder="Ngày tháng năm sinh" name="ngaySinh" max="10/04/2024" onChange={handleInputChange} required />
//                                                         </div>
//                                                     </div>
//                                                     <div class="lk-mb2 lk-mbt">
//                                                         <p class="lk-color-blue">
//                                                             Email
//                                                             <span class="lk-color-red">*</span>
//                                                         </p>
//                                                         <div class="lk-input">
//                                                             <input class="lk-input-2" id="lk-form-select" type="email"
//                                                                 placeholder="Nhập email" name="email" onChange={handleInputChange} required />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="lk-col12">
//                                                     <div class="lk-mb2 lk-mbt">
//                                                         <p class="lk-color-blue">
//                                                             Lý do khám
//                                                             <span class="lk-color-red">*</span>
//                                                         </p>
//                                                         <div class="lk-input">
//                                                             <textarea class="lk-input-2" id="lk-form-select" cols="30"
//                                                                 rows="10" placeholder="Triệu chứng của bạn" name="lyDoKham" onChange={handleInputChange} required></textarea>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <label for="#" class="lk-flex">
//                                                         <input type="checkbox" />
//                                                         <div class="lk-thoathuan">
//                                                             Tôi đã đọc và xác nhận <a class="lk-cl-blue" href="#">Điều khoản dịch
//                                                                 vụ</a>
//                                                             của bệnh viện.
//                                                             <span class="lk-color-red">*</span>
//                                                         </div>
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                             <div class="lk-text-center">
//                                                 <button class="lk-btn_send_book" type="submit">Gửi thông tin</button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }