import React, { useMemo, useState } from "react";
import "./tuyen-duong.css";
import Header from "../components/Header";


const allRoutes = [
  {
    title: "Đặt vé xe tuyến Bến xe Ngã Tư Ga đi Bắc Giang",
    desc: "Bạn đang tìm kiếm một chuyến xe chất lượng cao từ Bến xe Ngã Tư…",
    img: "/td1.png",
  },
  {
    title: "Đặt vé xe tuyến Sài Gòn đi Rạch Giá – Kiên Giang",
    desc: "Phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn…",
    img: "/td2.png",
  },
  {
    title: "Tuyến Sài Gòn đi Cam Ranh Khánh Hòa",
    desc: "Top 10 nhà xe tuyến Sài Gòn đi Cam Ranh Khánh Hòa được đánh giá…",
    img: "/td3.png",
  },
  {
    title: "Đặt vé xe Bình Thuận đi Cam Ranh – Khánh Hòa",
    desc: "Bạn đang tìm chuyến xe chất lượng trên tuyến đường Bình Thuận…",
    img: "/td4.png",
  },
  {
    title: "Top 8 nhà xe từ Bến xe Gia Lai đi Sài Gòn",
    desc: "Danh sách nhà xe nổi tiếng, nhiều lựa chọn, chất lượng cao…",
    img: "/td5.png",
  },
  {
    title: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    desc: "Gợi ý giờ chạy, loại xe và giá vé tham khảo cho hành trình…",
    img: "/td6.png",
  },
  {
    title: "Đặt vé xe tuyến Hà Nội đi Vân Đồn – Quảng Ninh",
    desc: "Lịch trình, giờ xuất bến, loại xe và nhà xe uy tín…",
    img: "/td7.png",
  },
  {
    title: "Đặt vé xe từ Vũng Tàu đi Sân bay Tân Sơn Nhất",
    desc: "Xe limousine/ghế ngồi, chạy liên tục nhiều khung giờ trong ngày…",
    img: "/td8.png",
  },
];

export default function TuyenDuong() {
  // phân trang đơn giản
  const pageSize = 8;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allRoutes.length / pageSize);
  const data = useMemo(
    () => allRoutes.slice((page - 1) * pageSize, page * pageSize),
    [page]
  );

  const go = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="routes-page">
      <Header />

      <div className="container">
        <h1 className="page-title">TUYẾN ĐƯỜNG</h1>

        <div className="routes-grid">
          {data.map((r, idx) => (
            <article key={idx} className="route-card">
              <div className="card-img">
                <img src={r.img} alt={r.title} />
              </div>
              <div className="card-body">
                <h3 className="card-title">{r.title}</h3>
                <p className="card-desc">{r.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => go(page - 1)} disabled={page === 1}>«</button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => go(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => go(page + 1)} disabled={page === totalPages}>»</button>
        </div>

        <p className="desc">
          Tổng hợp các tuyến đường phổ biến: thời gian khởi hành, loại xe, giá vé
          và nhà xe uy tín. Bạn có thể thay dữ liệu demo ở đây bằng API thật.
        </p>
      </div>

      {/* Footer: mình giữ nguyên block như trang Bến Xe để đồng bộ */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="ft-col">
            <h4>Tin tức</h4>
            <ul>
              <li><a href="#">Xe Limousine – Đẳng cấp hạng thương gia thời đại mới</a></li>
              <li><a href="#">Tổng quan các bến xe Vũng Tàu – Giới thiệu thông tin lịch trình nhà xe</a></li>
              <li><a href="#">Top 31 nhà xe limousine, xe giường nằm đi Đà Lạt</a></li>
            </ul>
          </div>
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
          <div className="ft-col contact">
            <h4>Liên hệ</h4>
            <p><b>Hotline: 1900 0152</b><br/><small>(Cước phí: 3.000 đ/phút)</small></p>
            <p><b>Hotline: 1900 996 678</b><br/><small>(Cước phí: 1.000 đ/phút)</small></p>
            <p><b>Hotline: 1900 0179</b><br/><small>(Cước phí: 8000 đ/phút - Dịch vụ đặt vé nhanh 24/7)</small></p>
          </div>
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
