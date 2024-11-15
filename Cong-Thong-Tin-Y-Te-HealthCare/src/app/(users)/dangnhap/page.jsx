"use client";
import { useState } from "react";
import "../../../../public/css/user/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [mat_khau, setMatKhau] = useState("");

  // Handle email and password input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "mat_khau") setMatKhau(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, mat_khau };

    try {
      // Send POST request to the login API
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        alert(result.message || "Đã xảy ra lỗi. Vui lòng thử lại.");
        return;
      }

      // On successful login, store the JWT token
      localStorage.setItem("token", result.token);
      alert("Đăng nhập thành công!");

      // Check user role and redirect accordingly
      const userRole = result.vai_tro; // Assuming vai_tro indicates the user role
      setTimeout(() => {
        if (userRole === "Bệnh nhân") {
          // Redirect to the home page for patient
          window.location.href = "/";
        } else if (userRole === "Bác sĩ") {
          // Redirect to the admin page for doctor
          window.location.href = "/admin";
        }
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  return (
    <div className="container">
      <h1>Đăng Nhập</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Nhập email"
            value={email}
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
            value={mat_khau}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="button">
          Đăng nhập
        </button>
      </form>

      {/* Link to registration page */}
      <div className="register-link">
        <p>
          Chưa có tài khoản? <a href="/dangky">Đăng ký ngay</a>
        </p>
      </div>
    </div>
  );
}
