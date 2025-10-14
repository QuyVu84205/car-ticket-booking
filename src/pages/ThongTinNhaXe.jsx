import React, { useState } from "react";
import "./thongtinnhaxe.css";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const busList = [
  {
    name: "Nhà xe Thanh Nhung",
    address: "An Giang, Sa Đéc, Q. Bình Thạnh, TP. Hồ Chí Minh",
    hotline: "1900 0152",
    img: "/nhaxethanhnhung.png",
  },
  {
    name: "Nhà xe Xuân Quỳnh",
    address: "Tp. Hồ Chí Minh, Lê Hồng Phong, P.12, Q.10",
    hotline: "1900 2345",
    img: "/nhaxexuanquynh.png",
  },
  {
    name: "Nhà xe Quang Giang (Quang Tuyến)",
    address: "TP. Hà Giang, Bắc Quang, TT. Việt Quang",
    hotline: "1900 5432",
    img: "/nhaxequanggiang.png",
  },
  {
    name: "Nhà xe Văn Năm",
    address: "Hà Nội, TX. Sơn Tây, xã Cổ Đông",
    hotline: "1900 7890",
    img: "/nhaxevannam.png",
  },
  {
    name: "Nhà xe Chí Tâm",
    address: "Đà Lạt, QL 20, Đức Trọng, Lâm Đồng",
    hotline: "1900 9876",
    img: "/nhaxechitam.png",
  },
  {
    name: "Nhà xe Hồng Thịnh",
    address: "TP. Thanh Hóa, QL 1A, Phường Đông Hương",
    hotline: "1900 9999",
    img: "/nhaxehongthinh.png",
  },
  {
    name: "Nhà xe Bình Hà",
    address: "TP. Nha Trang, Lê Hồng Phong, Khánh Hòa",
    hotline: "1900 1122",
    img: "/nhaxebinhha.png",
  },
  {
    name: "Nhà xe Khang Phát",
    address: "TP. Biên Hòa, Đồng Nai, QL 51",
    hotline: "1900 2233",
    img: "/nhaxekhangphat.png",
  },
];

export default function Thongtinnhaxe() {
  const [page] = useState(1);

  return (
    <div className="bus-info-page">
      {/* Top bar */}
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

      <nav className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            <NavLink to="/home">
              <img src="/logo.webp" alt="Vivutoday" />
            </NavLink>
          </div>
          <ul className="menu">
            <li><NavLink to="/home">Trang chủ</NavLink></li>
            <li><NavLink to="/gioi-thieu">Giới thiệu</NavLink></li>
            <li><NavLink to="/thongtinnhaxe" className="active">Thông tin nhà xe</NavLink></li>
            <li><NavLink to="/bus-station">Bến xe</NavLink></li>
            <li><NavLink to="/tuyen-duong">Tuyến đường</NavLink></li>
            <li><NavLink to="/kiem-tra-ve">Kiểm tra vé</NavLink></li>
          </ul>
        </div>
      </nav>

      {/* MAIN */}
      <div className="container">
        <h1 className="page-title">NHÀ XE</h1>

        <div className="bus-grid">
          {busList.map((bus, i) => (
            <div key={i} className="bus-card">
              <img src={bus.img} alt={bus.name} />
              <div className="bus-body">
                <h3>{bus.name}</h3>
                <p>{bus.address}</p>
                <p><b>Hotline:</b> {bus.hotline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <button disabled={page === 1}>«</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>149</button>
          <button>»</button>
        </div>

        {/* DESCRIPTION */}
        <p className="desc">
          Nhà xe – Vivutoday.com | Hệ thống đặt vé xe online cao cấp, dễ dàng tra cứu giá vé,
          lịch trình, số điện thoại, tuyến đường của 1000+ hãng xe chất lượng tốt nhất.
        </p>
      </div>

{/* FOOTER */}
<footer className="site-footer">
  <div className="container footer-grid">
    {/* Cột 1: Tin tức */}
    <div className="ft-col">
      <h4>Tin tức</h4>
      <ul>
        <li><a href="#">Xe Limousine – Đẳng cấp hạng thương gia thời đại mới</a></li>
        <li><a href="#">Tổng quan các bến xe Vũng Tàu – Giới thiệu thông tin lịch trình nhà xe</a></li>
        <li><a href="#">Top 31 nhà xe limousine, xe giường nằm đi Đà Lạt</a></li>
      </ul>
    </div>

    {/* Cột 2: Tuyến đường */}
    <div className="ft-col">
      <h4>Tuyến đường</h4>
      <ul>
        <li><a href="#">Xe đi Buôn Ma Thuột từ Sài Gòn</a></li>
        <li><a href="#">Xe đi Vũng Tàu từ Sài Gòn</a></li>
        <li><a href="#">Xe đi Nha Trang từ Sài Gòn</a></li>
        <li><a href="#">Xe đi Đà Lạt từ Sài Gòn</a></li>
        <li><a href="#">Xe đi Sapa từ Hà Nội</a></li>
        <li><a href="#">Xe đi Hải Phòng từ Hà Nội</a></li>
        <li><a href="#">Xe đi Vinh từ Hà Nội</a></li>
      </ul>
    </div>

    {/* Cột 3: Xe Limousine */}
    <div className="ft-col">
      <h4>Xe Limousine</h4>
      <ul>
        <li><a href="#">Xe Limousine đi Đà Lạt từ Sài Gòn</a></li>
        <li><a href="#">Xe Limousine đi Vũng Tàu từ Sài Gòn</a></li>
        <li><a href="#">Xe Limousine đi Nha Trang từ Sài Gòn</a></li>
        <li><a href="#">Xe Limousine đi Thủ Đức từ Sài Gòn</a></li>
        <li><a href="#">Xe Limousine đi Hạ Long từ Hà Nội</a></li>
        <li><a href="#">Xe Limousine đi Sapa từ Hà Nội</a></li>
        <li><a href="#">Xe Limousine đi Quảng Ninh từ Hà Nội</a></li>
      </ul>
    </div>

    {/* Cột 4: Bến xe */}
    <div className="ft-col">
      <h4>Bến xe</h4>
      <ul>
        <li><a href="#">Bến xe Miền Đông</a></li>
        <li><a href="#">Bến xe Trung tâm Đà Nẵng</a></li>
        <li><a href="#">Bến xe Gia Lâm</a></li>
        <li><a href="#">Bến xe Mỹ Đình</a></li>
        <li><a href="#">Bến xe An Sương</a></li>
        <li><a href="#">Bến xe Nước Ngầm</a></li>
        <li><a href="#">Bến xe Miền Tây</a></li>
      </ul>
    </div>

    {/* Cột 5: Nhà xe */}
    <div className="ft-col">
      <h4>Nhà xe</h4>
      <ul>
        <li><a href="#">Xe Sao Việt</a></li>
        <li><a href="#">Xe Hoa Mai</a></li>
        <li><a href="#">Xe Hạ Long Travel</a></li>
        <li><a href="#">Xe Quốc Đạt</a></li>
        <li><a href="#">Xe Thanh Bình Xanh</a></li>
        <li><a href="#">Xe Thiện Thành limousine</a></li>
        <li><a href="#">Xe Minh Quốc</a></li>
      </ul>
    </div>

    {/* Cột 6: Hỗ trợ & Về chúng tôi */}
    <div className="ft-col">
      <h4>Hỗ Trợ</h4>
      <ul>
        <li><a href="#">Chính sách bảo mật</a></li>
        <li><a href="#">Chính sách điều khoản và giao dịch chung</a></li>
        <li><a href="#">Chính sách đổi trả và hoàn tiền</a></li>
        <li><a href="#">Chính sách thanh toán</a></li>
        <li><a href="#">Quy chế hoạt động</a></li>
      </ul>
      <h4 className="mt16">Về Chúng Tôi</h4>
      <ul>
        <li><a href="#">Giới thiệu Vivutoday</a></li>
        <li><a href="#">Liên hệ</a></li>
        <li><a href="#">Giá trị cốt lõi</a></li>
      </ul>
    </div>

    {/* Cột 7: Liên hệ */}
    <div className="ft-col contact">
      <h4>Liên hệ</h4>
      <p><b>Hotline: 1900 0152</b><br/><small>(Cước phí: 3.000 đ/phút)</small></p>
      <p><b>Hotline: 1900 996 678</b><br/><small>(Cước phí: 1.000 đ/phút)</small></p>
      <p><b>Hotline: 1900 0179</b><br/><small>(Cước phí: 8000 đ/phút - Dịch vụ đặt vé nhanh 24/7)</small></p>
    </div>

    {/* Cột 8: Chứng nhận */}
    <div className="ft-col badges">
      <h4>Chứng nhận</h4>
      <div className="badge-list">
        <img src="/DMCA.png" alt="DMCA" />
        <img src="/NCSC.png" alt="NCSC" />
        <img src="/TMDT.png" alt="TMĐT" />
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="container">
      © {new Date().getFullYear()} Vivutoday • All rights reserved.
    </div>
  </div>
</footer>

    </div>
  );
}
