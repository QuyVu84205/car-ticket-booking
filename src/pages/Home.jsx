import "./home.css";
import { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Tìm: ${from} → ${to} | ${date || "Chưa chọn ngày"}`);
  };

  return (
    <div className="home">
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

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            <img src="/logo.webp" alt="Car Ticket Booking" />
          </div>
          <ul className="menu">
            <li className="active"><a href="#">Trang chủ</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Thông tin nhà xe</a></li>
            <li><a href="#">Bến xe</a></li>
            <li><a href="#">Tuyến đường</a></li>
            <li><a href="#">Kiểm tra vé</a></li>
          </ul>
          <button className="search-mini" aria-label="Search">🔍</button>
        </div>
      </nav>

      {/* HERO (nền biển) */}
      <section className="hero">
        <div className="container hero-inner">
          
          {/* Panel tìm chuyến nổi trên ảnh */}
          <form className="search-card" onSubmit={handleSearch}>
            <div className="field">
              <label>Điểm khởi hành</label>
              <input placeholder="Chọn điểm đi" value={from} onChange={e=>setFrom(e.target.value)} />
            </div>
            <div className="field">
              <label>Điểm đến</label>
              <input placeholder="Chọn điểm đến" value={to} onChange={e=>setTo(e.target.value)} />
            </div>
            <div className="field">
              <label>Ngày khởi hành</label>
              <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
            </div>
            <button className="btn-primary" type="submit">
              <span className="ico">🔍</span> TÌM CHUYẾN XE
            </button>
          </form>
        </div>
      </section>

{/* PHẦN 2: TUYẾN ĐƯỜNG PHỔ BIẾN */}
<section className="popular-routes">
  <h2>Tuyến đường phổ biến</h2>
  <div className="routes-list">
    <div className="route-item">
      <img src="/sgvt.png" alt="Sài Gòn - Vũng Tàu" />
      <div className="route-info">
        <h3>Sài Gòn → Vũng Tàu</h3>
        <p>150.000đ</p>
      </div>
    </div>

    <div className="route-item">
      <img src="/sgmn.png" alt="Sài Gòn - Mũi Né" />
      <div className="route-info">
        <h3>Sài Gòn → Mũi Né</h3>
        <p>180.000đ</p>
      </div>
    </div>

    <div className="route-item">
      <img src="/sgnt.png" alt="Sài Gòn - Nha Trang" />
      <div className="route-info">
        <h3>Sài Gòn → Nha Trang</h3>
        <p>240.000đ</p>
      </div>
    </div>

    <div className="route-item">
      <img src="/ntdl.png" alt="Nha Trang - Đà Lạt" />
      <div className="route-info">
        <h3>Nha Trang → Đà Lạt</h3>
        <p>200.000đ</p>
      </div>
    </div>
  </div>
</section>


      <section className="section alt">
        <div className="container">
          <h2>Ưu đãi nổi bật</h2>
          <div className="promo">ĐẶT VÉ KHỨ HỒI – ƯU ĐÃI NHÂN ĐÔI</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Nhà xe phổ biến</h2>
          <div className="cards">
            <div className="card">Nhà xe Futa</div>
            <div className="card">Nhà xe An Hoa Hiệp</div>
            <div className="card">Nhà xe Vũ Linh</div>
            <div className="card">Nhà xe Toàn Thắng</div>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Car Ticket Booking</footer>
    </div>
  );
}
