// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="container">
          <span>Hệ thống Đặt Vé Xe Toàn Quốc</span>
          <div className="tb-right">
            <a href="mailto:info@carticket.com">info@carticket.com</a>
            <span className="sep" />
            <a href="tel:19000152">1900 0152</a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            <NavLink to="/home">
              <img src="/logo.webp" alt="Car Ticket Booking" />
            </NavLink>
          </div>
          <ul className="menu">
            <li><NavLink to="/home">Trang chủ</NavLink></li>
            <li><NavLink to="/gioi-thieu">Giới thiệu</NavLink></li>
            <li><NavLink to="/thongtinnhaxe">Thông tin nhà xe</NavLink></li>
            <li><NavLink to="/bus-station">Bến xe</NavLink></li>
            <li><NavLink to="/tuyen-duong">Tuyến đường</NavLink></li>
            <li><NavLink to="/kiem-tra-ve">Kiểm tra vé</NavLink></li>
          </ul>
          <button className="search-mini" aria-label="Search">🔍</button>
        </div>
      </nav>
    </>
  );
}
