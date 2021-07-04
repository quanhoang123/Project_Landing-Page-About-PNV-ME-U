import React, { Component } from "react";
import PropTypes from "prop-types";
import './enroll.css';
export default class Enroll extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <div>
          <div className="portfolio" id="portfolio">
            <div className="container">
              <div
                className="section-header text-center wow zoomIn"
                data-wow-delay="0.1s"
              >
                <p>Tuyển sinh PNV</p>
                <div className="infor">
                  Hàng năm, từ tháng Một đến tháng Tám, đội ngũ tuyển sinh của
                  Passerelles numériques Việt Nam đi đến bảy tỉnh thành miền
                  Trung Việt Nam (Quảng Bình, Quảng Trị, Đà Nẵng, Quảng Nam,
                  Quảng Ngãi, Kon Tum, Bình Định), thực hiện một quy trình tuyển
                  sinh chặt chẽ gồm 4 bước để chọn ra những thanh thiếu niên có
                  hoản cảnh khó khăn nhưng tài năng và có ý chí vươn lên . Với
                  sự hỗ trợ từ Hội Khuyến học ở các tỉnh thành, PN Việt Nam được
                  giới thiệu đến các trường THPT địa phương và tạo điều kiện
                  thuận lợi cho các hoạt động tuyển sinh của PN tại các tỉnh
                  thành. Chúng tôi luôn nỗ lực để có thể duy trì được tỉ lệ sinh
                  viên nữ trong mỗi khóa không dưới 50%. Tuy nhiên, trên tất cả,
                  ưu tiên hàng đầu vẫn được dành cho những đối tượng có hoàn
                  cảnh khó khăn nhất.
                </div>
                <h2>Kế hoạch tuyển sinh 2022</h2>
              </div>

              <div className="row">
                <div className="col-12">
                  <ul id="portfolio-filter">
                    <li data-filter="*" className="filter-active">
                      Tất cả
                    </li>
                    <li data-filter=".filter-1">Đối tượng</li>
                    <li data-filter=".filter-2">Cơ hội nghề nghiệp</li>
                    <li data-filter=".filter-3">Qui trình</li>
                  </ul>
                </div>
              </div>

              <div className="row portfolio-container">
                <div
                  className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
                  data-wow-delay="0.0s"
                >
                  <div className="portfolio-wrap">
                    <h2>Đối tượng tuyển sinh</h2>
                    <div className="contents">
                      <div className="form-group">
                        <i class="fas fa-book-reader"></i>
                        <p>
                          Đang học lớp 12 hoặc đã tốt nghiệp trong vòng 5 năm
                        </p>
                      </div>
                      <div className="form-group">
                        <i class="fa fa-home"></i>
                        <p>Có hoàn cảnh gia đình khó khăn</p>
                      </div>
                      <div className="form-group">
                        <i class="fa fa-desktop"></i>
                        <p>Yêu thích lĩnh vực CNTT</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="portfolio-wrap">
                    <h2>Cơ hội nghề nghiệp</h2>
                    <div className="contents">
                      <div className="form-group">
                        <span class="fa fa-star star_icon"></span>
                        <p>Lập trình viên di động</p>
                      </div>

                      <div className="form-group">
                        <span class="fa fa-star star_icon"></span>
                        <p>Lập trình viên phần mềm</p>
                      </div>
                      <div className="form-group">
                        <span class="fa fa-star star_icon"></span>
                        <p> Lập trình và thiết kế web</p>
                      </div>
                      <div className="form-group">
                        <span class="fa fa-star star_icon"></span>
                        <p>Kiểm thử vên</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="portfolio-wrap">
                    <h2>Qui trình tuyển sinh</h2>
                    <div className="contents ">
                      <div className="form-group">
                        <i class="fa fa-check-square"></i>
                        <p> Giới thiệu học bổng</p>
                      </div>
                      <div className="form-group">
                        <i class="fa fa-check-square"></i>
                        <p>Thi đầu vào</p>
                      </div>
                      <div className="form-group">
                        <i class="fa fa-check-square"></i>
                        <p> Khảo sát gia cảnh</p>
                      </div>
                      <div className="form-group">
                        <i class="fa fa-check-square"></i>
                        <p> Thông báo kết quả</p>
                      </div>
                      <div className="form-group">
                        <i class="fa fa-check-square"></i>
                        <p> Nhập học</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="portfolio-wrap">
                    <div className="portfolio-img">
                      <img src="imgPNV/img1.jpg" alt="Image" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="portfolio-wrap">
                    <div className="portfolio-img">
                      <img src="imgPNV/enroll.png" alt="Image" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <div className="portfolio-wrap">
                    <div className="portfolio-img">
                      <img src="imgPNV/tuyensinh.PNG" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
