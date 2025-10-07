import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 thêm để điều hướng
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👇 Giả lập đăng nhập thành công
    if (email === "admin@gmail.com" && password === "123456") {
      alert("Đăng nhập thành công!");
      navigate("/home"); // chuyển đến trang chủ
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-header">
          <img src="/logo.webp" alt="Car Ticket Logo" className="logo" />
          <h2>Car Ticket Booking</h2>
          <p>Đặt vé nhanh chóng – An tâm mỗi chuyến đi</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
        </form>

        <p className="footer-text">
          © {new Date().getFullYear()} Car Ticket Booking – All rights reserved
        </p>
      </div>
    </div>
  );
}
