"use client";
import { useState } from "react";
import "../../../../public/css/user/login.css";

export default function Register() {
  const [formData, setFormData] = useState({
    ten: "",
    email: "",
    mat_khau: "",
    vai_tro: "",
    trang_thai: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ten, email, mat_khau, vai_tro, trang_thai } = formData;
    const data = { ten, email, mat_khau, vai_tro, trang_thai };

    try {
      // Send POST request to API /register
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Đăng ký thành công!");
        setFormData({
          ten: "",
          email: "",
          mat_khau: "",
          vai_tro: "",
          trang_thai: "",
        });
      } else {
        alert(result.message || "Đăng ký thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="container">
      <h1>Đăng Ký</h1>
      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ten">Họ và Tên:</label>
          <input
            type="text"
            id="ten"
            name="ten"
            placeholder="Nhập họ và tên"
            value={formData.ten}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Nhập email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mat_khau">Mật khẩu:</label>
          <input
            type="password"
            id="mat_khau"
            name="mat_khau"
            placeholder="Nhập mật khẩu"
            value={formData.mat_khau}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vai_tro">Vai Trò:</label>
          <select
            id="vai_tro"
            name="vai_tro"
            value={formData.vai_tro}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Chọn vai trò
            </option>
            <option value="bệnh nhân">Bệnh nhân</option>
            <option value="bác sĩ">Bác sĩ</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="trang_thai">Trạng Thái:</label>
          <select
            id="trang_thai"
            name="trang_thai"
            value={formData.trang_thai}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Chọn trạng thái
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="button">
          Đăng ký
        </button>
      </form>
      <div className="register-link">
        <p>
          Đã có tài khoản? <a href="/dangnhap">Đăng nhập ngay</a>
        </p>
      </div>
    </div>
  );
}
