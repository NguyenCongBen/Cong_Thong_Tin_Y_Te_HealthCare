"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../../../public/css/user/datlich.css";
import GoiTongDai from "../Components/Goitongdai";
import useSWR from "swr";
import DatLichKham from "../Components/Datlichkham";
import { useRouter } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DatLich() {
  const router = useRouter();

  const [idChuyenKhoa, setIdChuyenKhoa] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    hoTen: "",
    soDienThoai: "",
    email: "",
    ngaySinh: "",
    lyDoKham: "",
    idBenhVien: "",
    idBacSi: "",
    idChuyenKhoa: "",
    thoiGianKham: "",
  });

  const {
    data: benhVienData,
    error: benhVienError,
    isLoading: isBenhVienLoading,
  } = useSWR("http://localhost:3000/benhvien", fetcher);
  const {
    data: chuyenKhoaData,
    error: chuyenKhoaError,
    isLoading: isChuyenKhoaLoading,
  } = useSWR("http://localhost:3000/chuyenkhoa", fetcher);
  const {
    data: bacsiData,
    error: bacsiError,
    isLoading: isbacsiLoading,
  } = useSWR(
    idChuyenKhoa
      ? `http://localhost:3000/doctor/chuyen-khoa/${idChuyenKhoa}`
      : null,
    fetcher
  );

  if (isBenhVienLoading || isChuyenKhoaLoading || isbacsiLoading) {
    return <div class="loading">Loading...</div>;
  }

  if (benhVienError || chuyenKhoaError || bacsiError) {
    return <div>Error</div>;
  }

  const handleChuyenKhoaChange = (event) => {
    setIdChuyenKhoa(event.target.value);
    setFormData({ ...formData, idChuyenKhoa: event.target.value });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appointmentData = {
      id_chuyen_khoa: formData.idChuyenKhoa,
      thoi_gian_hen: formData.thoiGianKham,
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
      dia_chi: "",
      so_dien_thoai: formData.soDienThoai,
      email: formData.email,
    };

    try {
      const response = await fetch("http://localhost:3000/lichhen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ appointmentData, patientInfo }),
      });
      console.log("Submitting data:", { appointmentData, patientInfo });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log(data);

      setIsSuccess(true);
      {
        isSuccess && router.push("/dltc");
      }
      resetForm();
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
      const time = start.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      slots.push(time);
      start.setMinutes(start.getMinutes() + 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <main>
      <GoiTongDai />
      <div className="container-all">
        <div class="cover-list-news">
          <img src="/images/img/thành tựu/banner.jpg" alt="" />
          <div class="name-cate-cover">Đăng ký khám</div>
          <div class="thanhtuu-bar_util">
            <div class="thanhtuu-col-4 col-4-w color-blue">
              <button
                type="button"
                class="btn btn-primary thanhtuu-col-4 col-4-w color-blue"
                id="btn-goi"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src="/images/img/thành tựu/Phone.png" alt="" />
                <span>Gọi tổng đài</span>
              </button>
            </div>
            <div class="thanhtuu-col-4 col-4-w">
              <Link href="/datlich">
                <img src="/images/img/thành tựu/Calendar.png" alt="" />
                <span>Đặt lịch hẹn</span>
              </Link>
            </div>
            <div class="thanhtuu-col-4 col-4-w">
              <Link href="/timbacsi">
                <img src="/images/img/thành tựu/doctor.png" alt="" />
                <span>Tìm bác sĩ</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-body">
          <div className="container-1">
            <div class="tt-bread-1">
              <Link href="#" class="tt-item">
                Trang chủ
              </Link>
              <i class="fa-solid fa-angle-right tt-item-1 gt-item"></i>
              <Link href="#" class="tt-item-1 cl-black">
                Chuyên gia y tế
              </Link>
            </div>
            <h2 className="sm-title_cate_news">Nội dung chi tiết đặt hẹn</h2>
            <form onSubmit={handleSubmit} className="lk-content_info_book">
              <div className="lk-list_two_booking">
                <div className="lk-col6 lk-right">
                  <div className="lk-mb2">
                    <p className="lk-color-blue">
                      Bệnh viện/phòng khám Vinmec
                      <span className="lk-color-red">*</span>
                    </p>
                    <select
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          idBenhVien: e.target.value,
                        });
                      }}
                      className="form-select form-select-lg mb-3"
                      id="lk-form-select"
                      required
                    >
                      <option selected>Chọn cơ sở khám</option>
                      {benhVienData.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.ten}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="lk-mb2">
                    <p className="lk-color-blue">
                      Chuyên khoa<span className="lk-color-red">*</span>
                    </p>
                    <select
                      onChange={handleChuyenKhoaChange}
                      className="form-select form-select-lg mb-3"
                      id="lk-form-select"
                      required
                    >
                      <option selected>Chọn chuyên khoa</option>
                      {chuyenKhoaData && chuyenKhoaData.length > 0 ? (
                        chuyenKhoaData.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.ten_chuyen_khoa}
                          </option>
                        ))
                      ) : (
                        <option disabled>No doctors found</option>
                      )}
                    </select>
                  </div>
                  <div className="lk-mb2">
                    <p className="lk-color-blue">Bác sĩ</p>
                    <select
                      onChange={(e) => {
                        setFormData({ ...formData, idBacSi: e.target.value });
                      }}
                      className="form-select form-select-lg mb-3"
                      id="lk-form-select"
                      required
                    >
                      <option selected>Chọn Bác sĩ muốn khám</option>
                      {bacsiData && bacsiData.length > 0 ? (
                        bacsiData.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.ten}
                          </option>
                        ))
                      ) : (
                        <option disabled>No doctors found</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="#" className="lk-flex">
                      <input type="checkbox" />
                      Đặt hẹn cho người nước ngoài
                    </label>
                  </div>
                </div>
                <div className="lk-col6 lk-left">
                  <p className="lk-color-blue color-toi">
                    Thời gian khám
                    <span className="lk-color-red color-toi">*</span>
                  </p>
                  <select
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        thoiGianKham: e.target.value,
                      });
                    }}
                    className="form-select lk-input-2"
                    id="lk-form-select"
                    required
                  >
                    <option value="">Chọn thời gian khám</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <div className="lk-mt2">
                    *Lưu ý: Thời gian khám trên chỉ là thời gian dự kiến, tổng
                    đài sẽ liên hệ xác nhận thời gian khám chính xác tới quý
                    khách sau khi quý khách đặt hẹn.
                  </div>
                </div>
              </div>
              <div className="lk-mt60">
                <h2 className="sm-title_cate_news">Thông tin khách hàng</h2>
                <div className="lk-list_two_booking lk-mbt-1">
                  <div className="lk-col6 lk-right">
                    <div className="lk-mb2 lk-mbt">
                      <p className="lk-color-blue">
                        Họ và tên<span className="lk-color-red">*</span>
                      </p>
                      <div className="lk-input">
                        <input
                          className="lk-input-1"
                          name="hoTen"
                          type="text"
                          placeholder="Họ và tên"
                          id="lk-form-select"
                          onChange={handleInputChange}
                          required
                        />
                        <div class="lk-input_gender">
                          <label for="#" class="lk-lable">
                          <input
                            class="lk-gender-picker"
                          type="radio"
                          name="gioiTinh"
                          value="Nam"
                          onChange={handleInputChange}
                          required
                        />
                            Nam
                          </label>
                          <label for="#" class="lk-lable">
                          <input
                           class="lk-gender-picker"
                          type="radio"
                          name="gioiTinh"
                          value="Nữ"
                          onChange={handleInputChange}
                          required
                        />
                            Nữ
                          </label>
                        </div>
            
                      </div>
                    </div>
                    <div className="lk-mb2 lk-mbt">
                      <p className="lk-color-blue">
                        Số điện thoại<span className="lk-color-red">*</span>
                      </p>
                      <div class="lk-input">
                        <input
                          className="lk-input-2"
                          name="soDienThoai"
                          type="text"
                          placeholder="Nhập số điện thoại"
                          id="lk-form-select"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lk-col6 lk-left">
                    <div className="lk-mb2 lk-mbt">
                      <p className="lk-color-blue">
                        Ngày tháng năm sinh
                        <span className="lk-color-red">*</span>
                      </p>
                      <div className="lk-input">
                        <input
                          className="lk-input-2"
                          name="ngaySinh"
                          type="date"
                          id="lk-form-select"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="lk-mb2">
                      <p className="lk-color-blue">
                        Email<span className="lk-color-red">*</span>
                      </p>
                      <div class="lk-input">
                        <input
                          className="lk-input-2"
                          name="email"
                          type="email"
                          id="lk-form-select"
                          placeholder="Nhập email"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lk-col12">
                    <div className="lk-mb2 lk-mbt">
                      <p className="lk-color-blue">
                        Lý do khám<span className="lk-color-red">*</span>
                      </p>
                      <div class="lk-input">
                        <textarea
                          className="lk-input-2"
                          name="lyDoKham"
                          rows="4"
                          id="lk-form-select"
                          placeholder="Nhập lý do khám"
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lk-text-center">
                <button type="submit" className="lk-btn_send_book">
                  Gửi thông tin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
