import React from "react";
import "./gioithieu.css";
import { NavLink } from "react-router-dom";


export default function GioiThieu() {
  return (
    <div className="about">
      {/* === TOPBAR + NAVBAR (nhúng trực tiếp) === */}
      <div className="topbar">
        <div className="container">
          <span>Hệ thống Đặt Vé Xe Toàn Quốc</span>
          <div className="tb-right">
            <a href="mailto:info.vivutoday@gmail.com">info.vivutoday@gmail.com</a>
            <span className="sep" />
            <a href="tel:19000152">1900 0152</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
  <div className="container nav-inner">
    <div className="brand">
      <img src="/logo.png" alt="Car Ticket Booking" />
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


      {/* === HERO === */}
      <section className="about-hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <h1 className="slogan">
              <span className="line line-1">Tiện lợi,</span><br/>
              <span className="line line-2">tận tâm,</span><br/>
              <span className="line line-3">an toàn.</span>
            </h1>

            <div className="follow">
              <p>Theo dõi chúng tôi tại:</p>
              <div className="brands">
                <img className="brand-vivu" src="/logo.png" alt="Vivutoday" />
                <a href="#"><img className="brand-ico" src="/facebook.png" alt="Facebook" /></a>
                <a href="#"><img className="brand-ico" src="/zalo.png" alt="Zalo" /></a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <img src="/gioithieu.png" alt="Đặt vé xe toàn quốc" />
          </div>
        </div>
        <div className="hero-divider" />
      </section>

      {/* === INTRO + BOXES === */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Hệ thống đặt vé xe toàn quốc <span className="brand">Vivutoday.com</span>
          </h2>
          <p className="lead">
            Trong thời đại số hóa ngày nay, việc sử dụng công nghệ thông tin để giải quyết nhu cầu của cuộc sống trở nên
            quen thuộc. Khi bạn cần tìm một trang web đáng tin cậy để đặt vé xe, Vivutoday.com sẽ là người bạn đồng hành
            tin cậy giúp bạn di chuyển một cách an toàn và tiện lợi.
          </p>

          <div className="feature-grid">
            <div className="feature-card blue">
              <h3>Chúng tôi cam kết đảm bảo</h3>
              <p>
                Cho bạn một môi trường đăng tin cậy để đặt vé xe. Với việc kiểm tra đối tác kỹ càng và sự hợp tác
                với các đối tác uy tín, chúng tôi đảm bảo mọi chuyến đi của bạn diễn ra an toàn và suôn sẻ.
              </p>
              <a className="btn-ghost" href="#">An Toàn Được Đảm Bảo</a>
            </div>

            <div className="feature-card teal">
              <h3>Hỗ trợ tận tâm</h3>
              <p>
                Với đội ngũ tư vấn viên chuyên nghiệp luôn sẵn sàng hỗ trợ <b>24/7</b>, chúng tôi sẽ giúp bạn mọi lúc cần
                cân. Điều này đảm bảo bạn luôn có <b>một người bạn đồng hành đáng tin</b> trong mỗi hành trình.
              </p>
              <a className="btn-ghost" href="#">Hỗ Trợ Tận Tâm</a>
            </div>

            <div className="stats-card">
              <div className="stat">
                <div className="num">1500+</div>
                <div className="label">nhà xe</div>
              </div>
              <div className="stat">
                <div className="num">5000+</div>
                <div className="label">lịch trình</div>
              </div>
              <p>Chúng tôi cung cấp nhiều sự lựa chọn để đáp ứng mọi nhu cầu của khách hàng.</p>
              <a className="btn-link" href="#">Đa Dạng Sự Lựa Chọn</a>
            </div>
          </div>
        </div>
      </section>

      {/* === LÝ DO + MASCOT === */}
      <section className="section alt">
        <div className="container">
          <h2 className="section-title">
            Lý do bạn nên đặt vé tại <span className="brand">Vivutoday.com</span>
          </h2>

          <div className="reason-grid">
            <div className="reason">
              <h3>Tìm Kiếm Thông Tin Một Cách Dễ Dàng</h3>
              <p>Giao diện của VivuToday.com được thiết kế để giúp bạn tìm kiếm thông tin nhà xe, giờ khởi hành, điểm xuất phát và đích một cách nhanh chóng và dễ dàng. Thông qua việc nhập các thông tin cơ bản, bạn có thể tìm kiếm lịch trình phù hợp chỉ trong vài giây.</p>

              <h3>Tùy Chỉnh Theo Tài Chính Của Bạn</h3>
              <p>Chúng tôi hiểu rằng mỗi hành trình có một ngân sách riêng. Với giao diện của chúng tôi, bạn có thể tùy chỉnh lựa chọn những nhà xe nằm trong khoảng giá tiền mà bạn mong muốn. Điều này giúp bạn tiết kiệm thời gian và tìm được các lựa chọn phù hợp với túi tiền.</p>
            </div>

            <div className="mascot">
              <img src="/mascot.png" alt="Mascot" />
            </div>

            <div className="reason">
              <h3>Lựa Chọn Nhà Xe Có Đánh Giá Cao</h3>
              <p>Chất lượng là một yếu tố quan trọng. Trên giao diện của VivuToday.com, bạn có thể chọn lựa những nhà xe được đánh giá cao với mục đánh giá 5 sao. Điều này đảm bảo rằng bạn đang chọn một dịch vụ uy tín và chất lượng cho hành trình của mình.</p>

              <h3>Thanh Toán An Toàn</h3>
              <p>Việc thanh toán không còn là vấn đề khiến bạn lo lắng. Chúng tôi cung cấp các phương thức thanh toán đa dạng bao gồm thanh toán trực tuyến, qua ngân hàng và epays. Đảm bảo bạn có sự linh hoạt trong việc chọn phương thức phù hợp với bạn và đảm bảo tính an toàn cho giao dịch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === KHÁCH HÀNG LÀ TRUNG TÂM === */}
      <section className="section">
        <div className="container">
          <h2 className="section-title center">Khách hàng là trung tâm</h2>
          <p className="lead center">
            Chúng tôi luôn đặt “khách hàng là trung tâm” và xem việc làm hài lòng, đáp ứng nhu cầu của khách hàng như mục tiêu hàng đầu. Chúng tôi lắng nghe và tiếp thu những đóng góp quý báu từ khách hàng, để không ngừng hoàn thiện, đổi mới và cung cấp dịch vụ ngày càng tốt hơn.
            Nếu bạn cần di chuyển đến bất kỳ tỉnh thành nào trong cả nước, hãy đến với vivutoday.com để trải nghiệm những tiện ích tuyệt vời mà hệ thống của chúng tôi mang lại.
          </p>
        </div>
      </section>

      {/* === LIÊN HỆ === */}
      <section className="section contact">
        <div className="container">
          <h2 className="section-title center">Liên hệ với chúng tôi</h2>

          <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert("Đã gửi liên hệ!");}}>
            <label>Họ và Tên</label>
            <input placeholder="Nhập họ tên của bạn" />
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
            <label>Số Điện Thoại</label>
            <input placeholder="09xx xxx xxx" />
            <label>Tin Nhắn</label>
            <textarea rows="5" placeholder="Nội dung bạn muốn trao đổi..." />
            <button type="submit" className="btn-primary">GỬI NGAY</button>
          </form>
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
