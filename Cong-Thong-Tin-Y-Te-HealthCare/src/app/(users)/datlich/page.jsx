"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../../../../public/css/user/datlich.css";
import GoiTongDai from "../Components/Goitongdai";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DatLich() {
  const [formData, setFormData] = useState({
    hoTen: "",
    soDienThoai: "",
    email: "",
    ngaySinh: "",
    gioiTinh: "",
    lyDoKham: "",
    idBenhVien: "",
    idChuyenKhoa: "",
    idBacSi: "",
    thoiGianKham: "",
  });
  const [idChuyenKhoa, setIdChuyenKhoa] = useState(null);

  const { data: benhVienData } = useSWR("http://localhost:3000/benhvien", fetcher);
  const { data: chuyenKhoaData } = useSWR("http://localhost:3000/chuyenkhoa", fetcher);
  const { data: bacsiData } = useSWR(
    idChuyenKhoa ? `http://localhost:3000/doctor/chuyen-khoa/${idChuyenKhoa}` : null,
    fetcher
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChuyenKhoaChange = (event) => {
    const value = event.target.value;
    setIdChuyenKhoa(value);
    setFormData((prev) => ({ ...prev, idChuyenKhoa: value }));
  };

  const convertTo24HourFormat = (time12hr) => {
    const [time, modifier] = time12hr.split(" ");
    let [hours, minutes] = time.split(":");
    if (modifier === "PM" && hours !== "12") {
      hours = (parseInt(hours, 10) + 12).toString();
    } else if (modifier === "AM" && hours === "12") {
      hours = "00";
    }
    return `${hours}:${minutes}:00`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const time24hr = convertTo24HourFormat(formData.thoiGianKham);
    const appointmentDate = new Date();
    const [hours, minutes] = time24hr.split(":");
    appointmentDate.setHours(hours, minutes, 0, 0);

    if (isNaN(appointmentDate.getTime())) {
      alert("Thời gian khám không hợp lệ.");
      return;
    }

    const appointmentData = {
      id_chuyen_khoa: formData.idChuyenKhoa,
      thoi_gian_hen: appointmentDate.toISOString(),
      mo_ta: formData.lyDoKham,
      trang_thai: "Đang chờ",
      id_bac_si: formData.idBacSi,
      id_benh_vien: formData.idBenhVien,
    };

    const patientInfo = {
      anh: "anh1.jpg",
      ten: formData.hoTen,
      ngay_sinh: formData.ngaySinh,
      gioi_tinh: formData.gioiTinh,
      so_dien_thoai: formData.soDienThoai,
      email: formData.email,
    };

    try {
      const response = await fetch("http://localhost:3000/lichhen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appointmentData, patientInfo }),
      });
      if (!response.ok) throw new Error("Failed to submit the form");
      alert("Đặt lịch thành công!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    const start = new Date();
    start.setHours(8, 0, 0, 0);
    const end = new Date();
    end.setHours(16, 30, 0, 0);

    while (start <= end) {
      slots.push(start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      start.setMinutes(start.getMinutes() + 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <main>
      <GoiTongDai />
      <div className="container-all">
        <div className="cover-list-news">
          <img src="/images/img/thành tựu/banner.jpg" alt="" />
          <div className="name-cate-cover">Đăng ký khám</div>
        </div>
        <div className="container-body">
          <h2 className="sm-title_cate_news">Nội dung chi tiết đặt hẹn</h2>
          <form onSubmit={handleSubmit} className="lk-content_info_book">
            <div className="lk-list_two_booking">
              <div className="lk-col6 lk-right">
                <p>Bệnh viện/phòng khám</p>
                <select
                  name="idBenhVien"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Chọn cơ sở khám</option>
                  {benhVienData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.ten}
                    </option>
                  ))}
                </select>
                <p>Chuyên khoa</p>
                <select onChange={handleChuyenKhoaChange} required>
                  <option value="">Chọn chuyên khoa</option>
                  {chuyenKhoaData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.ten_chuyen_khoa}
                    </option>
                  ))}
                </select>
                <p>Bác sĩ</p>
                <select
                  name="idBacSi"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Chọn bác sĩ</option>
                  {bacsiData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.ten}
                    </option>
                  ))}
                </select>
              </div>
              <div className="lk-col6 lk-left">
                <p>Thời gian khám</p>
                <select
                  name="thoiGianKham"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Chọn thời gian khám</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <h2>Thông tin khách hàng</h2>
            <div>
              <p>Họ và tên</p>
              <input
                name="hoTen"
                type="text"
                onChange={handleInputChange}
                required
              />
              <p>Số điện thoại</p>
              <input
                name="soDienThoai"
                type="text"
                onChange={handleInputChange}
                required
              />
              <p>Email</p>
              <input
                name="email"
                type="email"
                onChange={handleInputChange}
                required
              />
              <p>Ngày sinh</p>
              <input
                name="ngaySinh"
                type="date"
                onChange={handleInputChange}
                required
              />
              <p>Lý do khám</p>
              <textarea
                name="lyDoKham"
                rows="4"
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit">Gửi thông tin</button>
          </form>
        </div>
      </div>
    </main>
  );
}
