import React, { useState, useRef } from "react";
import "./home.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
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
          <li><NavLink to="/home" className={({isActive}) => isActive ? "active" : ""}>Trang chủ</NavLink></li>
          <li><NavLink to="/gioi-thieu">Giới thiệu</NavLink></li>
          <li><NavLink to="/thongtinnhaxe">Thông tin nhà xe</NavLink></li>
          <li><NavLink to="/bus-station">Bến xe</NavLink></li>
          <li><NavLink to="/tuyen-duong">Tuyến đường</NavLink></li>
          <li><NavLink to="/kiem-tra-ve">Kiểm tra vé</NavLink></li>
          </ul>
          <button className="search-mini" aria-label="Search">🔍</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
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

      {/* TUYẾN ĐƯỜNG PHỔ BIẾN */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tuyến đường phổ biến</h2>
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
        </div>
      </section>

      {/* ƯU ĐÃI NỔI BẬT */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Ưu đãi nổi bật</h2>

          <div className="promo-wrap">
            <img src="/uudai.png" alt="Ưu đãi khứ hồi" className="promo-img" />
            <div className="promo-nav">
              <button type="button" aria-label="Prev" className="promo-btn prev">❮</button>
              <button type="button" aria-label="Next" className="promo-btn next">❯</button>
            </div>
          </div>
        </div>
      </section>

      {/* NHÀ XE */}
<section className="section">
  <div className="container">
    <h2 className="section-title">Nhà xe phổ biến</h2>
    <div className="cards bus-list">
      <div className="bus-card">
        <img src="/nhaxeanhoa.jpg" alt="Nhà xe An Hòa Hiệp" />
        <h3>Nhà xe An Hòa Hiệp</h3>
      </div>
      <div className="bus-card">
        <img src="/nhaxehoason.jpg" alt="Nhà xe Futa Hà Sơn" />
        <h3>Nhà xe Futa Hà Sơn</h3>
      </div>
      <div className="bus-card">
        <img src="/nhaxevulinh.png" alt="Nhà xe Vũ Linh" />
        <h3>Nhà xe Vũ Linh</h3>
      </div>
      <div className="bus-card">
        <img src="/nhaxetoanthang.jpg" alt="Nhà xe Toàn Thắng" />
        <h3>Nhà xe Toàn Thắng</h3>
      </div>
    </div>
  </div>
</section>

{/* TOP REVIEWS */}
<section className="section">
  <div className="container">
    <h2 className="section-title">Top Reviews</h2>

    <div className="top-grid">
      {/* Dòng 1 */}
      <a className="tile big" href="#" style={{backgroundImage:'url(/saigon.png)'}}>
        <div className="tile__cap"><h3>Sài Gòn</h3><span>287 bài viết</span></div>
      </a>
      <a className="tile tall" href="#" style={{backgroundImage:'url(/vungtau.png)'}}>
        <div className="tile__cap"><h3>Vũng Tàu</h3><span>98 bài viết</span></div>
      </a>

      {/* Dòng 2 */}
      <a className="tile" href="#" style={{backgroundImage:'url(/dalat.png)'}}>
        <div className="tile__cap"><h3>Đà Lạt</h3><span>87 bài viết</span></div>
      </a>
      <a className="tile big" href="#" style={{backgroundImage:'url(/hanoi.png)'}}>
        <div className="tile__cap"><h3>Hà Nội</h3><span>612 bài viết</span></div>
      </a>
      <a className="tile" href="#" style={{backgroundImage:'url(/quynhon.png)'}}>
        <div className="tile__cap"><h3>Quy Nhơn</h3><span>81 bài viết</span></div>
      </a>

      {/* Dòng 3 */}
      <a className="tile big nha-trang" href="#" style={{backgroundImage:'url(/nhatrang.png)'}}>
       <div className="tile__cap"><h3>Nha Trang</h3><span>557 bài viết</span></div>
      </a>

      <a className="tile danang" href="#" style={{backgroundImage:'url(/danang.png)'}}>
        <div className="tile__cap"><h3>Đà Nẵng</h3><span>570 bài viết</span></div>
      </a>

      <a className="tile phanthiet" href="#" style={{backgroundImage:'url(/phanthiet.png)'}}>
       <div className="tile__cap"><h3>Phan Thiết</h3><span>276 bài viết</span></div>
      </a>

    </div>
  </div>
</section>

      {/* Bến xe */}
<section className="section">
  <div className="container">
    <h2 className="section-title">Bến xe phổ biến</h2>
    <div className="cards bus-list">
      <div className="bus-card">
        <img src="/benxemiendong.jpg" alt="Bến xe Miền Đông Mới" />
        <h3>Bến xe Miền Đông Mới</h3>
      </div>
      <div className="bus-card">
        <img src="/benxemientay.jpg" alt="Bến xe Miền Tây" />
        <h3>Bến xe Miền Tây</h3>
      </div>
      <div className="bus-card">
        <img src="/benxagiapbat.jpg" alt="Bến xe Giáp Bát" />
        <h3>Bến xe Giáp Bát</h3>
      </div>
      <div className="bus-card">
        <img src="/benxamydinh.jpg" alt="Bến xe Mỹ Đình" />
        <h3>Bến xe Mỹ Đình</h3>
      </div>
    </div>
  </div>
</section>

{/* NỀN TẢNG KẾT NỐI NGƯỜI DÙNG VÀ NHÀ XE */}
<section className="section alt">
  <div className="container">
    <h2 className="section-title">Nền Tảng Kết Nối Người Dùng Và Nhà xe</h2>

    <div className="value-grid">
      {/* 1 */}
      <div className="value-item">
        <div className="value-icon">
          <img src="/like.png" alt="" />
        </div>
        <div className="value-text">
          <h3 className="value-title">Đáp ứng mọi nhu cầu tìm kiếm</h3>
          <p className="value-desc">Với hơn 5000+ tuyến đường và 1500+ nhà xe trên khắp cả nước</p>
        </div>
      </div>

      {/* 2 */}
      <div className="value-item">
        <div className="value-icon">
          <img src="/sao.png" alt="" />
        </div>
        <div className="value-text">
          <h3 className="value-title">Đảm bảo có vé</h3>
          <p className="value-desc">Hoàn ngay <b>150%</b> nếu không có vé, mang đến hành trình trọn vẹn</p>
        </div>
      </div>

      {/* 3 */}
      <div className="value-item">
        <div className="value-icon">
          <img src="/battay.png" alt="" />
        </div>
        <div className="value-text">
          <h3 className="value-title">Cam kết giữ vé</h3>
          <p className="value-desc">Vivutoday cam kết hoàn <b>150%</b> nếu nhà xe không giữ vé</p>
        </div>
      </div>

      {/* 4 */}
      <div className="value-item">
        <div className="value-icon">
          <img src="/tick.png" alt="" />
        </div>
        <div className="value-text">
          <h3 className="value-title">Tổng đài hỗ trợ khách hàng 24/7</h3>
          <p className="value-desc">Giải quyết kịp thời vấn đề của khách hàng một cách nhanh chóng</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* VIVUTODAY ĐƯỢC NHẮC TÊN TRÊN */}
<section className="section">
  <div className="container">
    <h2 className="section-title">Vivutoday Được Nhắc Tên Trên</h2>

    <div className="press-logos">
      <img src="/24h.png"      alt="24h" />
      <img src="/vtc.png"  alt="VTC News" />
      <img src="/eva.png"      alt="eva.vn" />
      <img src="/afamily.png"  alt="aFamily" />
      <img src="/bariavungtau.png"  alt="Bà Rịa Vũng Tàu" />
      <img src="/danangvivu.png"   alt="Đà Nẵng Online" />
    </div>
  </div>
</section>

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
