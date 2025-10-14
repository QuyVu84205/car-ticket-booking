import React, { useState } from "react";
import "./bus-station.css";
import Header from "../components/Header";

const busStations = [
  {
    name: "Bến xe Gia Lâm",
    address: "Số 9 Ngô Gia Khảm, Long Biên, Hà Nội",
    hotline: "0243 877 1430",
    img: "/bxegialam.png",
  },
  {
    name: "Bến xe khách Quảng Bình",
    address: "Số 265 Lý Thường Kiệt, TP. Đồng Hới, Quảng Bình",
    hotline: "0232 3822 115",
    img: "/bxekhachquangbinh.png",
  },
  {
    name: "Bến xe Cần Thơ",
    address: "Số 91 Nguyễn Văn Linh, Ninh Kiều, TP. Cần Thơ",
    hotline: "0292 3890 444",
    img: "/benxecantho.png",
  },
  {
    name: "Bến xe Vũng Tàu",
    address: "Số 192 Nam Kỳ Khởi Nghĩa, TP. Vũng Tàu",
    hotline: "0254 3854 294",
    img: "/benxevungtau.png",
  },
  {
    name: "Danh sách bến xe Hà Nội",
    address: "Mỹ Đình, Giáp Bát, Nước Ngầm, Gia Lâm, Yên Nghĩa",
    hotline: "1900 0152",
    img: "/danhsachbenxehanoi.png",
  },
  {
    name: "Bến xe Thanh Hóa",
    address: "Số 99 Quang Trung, P. Ngọc Trạo, TP. Thanh Hóa",
    hotline: "0237 3852 555",
    img: "/benxethanhhoa.png",
  },
  {
    name: "Bến xe phía Bắc miền Nam Bắc",
    address: "Số 120 Nguyễn Văn Linh, Đà Nẵng",
    hotline: "0236 3821 007",
    img: "/benxetieubieu.png",
  },
  {
    name: "Bến xe Quy Nhơn - Bình Định",
    address: "QL1A, Trần Quang Diệu, Quy Nhơn",
    hotline: "0256 3741 888",
    img: "/benxequynhon.png",
  },
];

export default function BusStation() {
  const [page] = useState(1);

  return (
    <div className="busstation-page">
      <Header />

      <div className="container">
        <h1 className="page-title">BẾN XE</h1>

        <div className="busstation-grid">
          {busStations.map((station, i) => (
            <div key={i} className="busstation-card">
              <img src={station.img} alt={station.name} />
              <div className="busstation-body">
                <h3>{station.name}</h3>
                <p>{station.address}</p>
                <p><b>Hotline:</b> {station.hotline}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button disabled={page === 1}>«</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>148</button>
          <button>»</button>
        </div>

        <p className="desc">
          Tập hợp các bến xe và thông tin chi tiết lịch trình, giờ khởi hành của
          các nhà xe có tại bến.
        </p>
      </div>

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
