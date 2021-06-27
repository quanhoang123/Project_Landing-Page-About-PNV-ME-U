import React, { Component } from "react";

class Enrollment extends Component {
  render() {
    return (
      <div>
        <div className="portfolio" id="portfolio">
          <div className="container">
            <div
              className="section-header text-center wow zoomIn"
              data-wow-delay="0.1s"
            >
              <p>Tuyển sinh PNV</p>
              <div>
                Hàng năm, từ tháng Một đến tháng Tám, đội ngũ tuyển sinh của
                Passerelles numériques Việt Nam đi đến bảy tỉnh thành miền Trung
                Việt Nam (Quảng Bình, Quảng Trị, Đà Nẵng, Quảng Nam, Quảng Ngãi,
                Kon Tum, Bình Định), thực hiện một quy trình tuyển sinh chặt chẽ
                gồm 4 bước để chọn ra những thanh thiếu niên có hoản cảnh khó
                khăn nhưng tài năng và có ý chí vươn lên . Với sự hỗ trợ từ Hội
                Khuyến học ở các tỉnh thành, PN Việt Nam được giới thiệu đến các
                trường THPT địa phương và tạo điều kiện thuận lợi cho các hoạt
                động tuyển sinh của PN tại các tỉnh thành. Chúng tôi luôn nỗ lực
                để có thể duy trì được tỉ lệ sinh viên nữ trong mỗi khóa không
                dưới 50%. Tuy nhiên, trên tất cả, ưu tiên hàng đầu vẫn được dành
                cho những đối tượng có hoàn cảnh khó khăn nhất.
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
                  <div className="row contents">
                    <div className="col-sm-4" >
                      <i class="fas fa-book-reader" ></i>
                    </div>
                    <div className="col-sm-8">
                      <p style={{ marginLeft: "-12vh", marginTop: "1vh" }}>
                        Đang học lớp 12 hoặc đã tốt nghiệp trong vòng 5 năm
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <i class="fa fa-home"></i>
                    </div>
                    <div className="col-sm-8">
                      <p style={{ marginLeft: "-12vh", marginTop: "1vh" }}>
                        Có hoàn cảnh gia đình khó khăn
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <i class="fa fa-desktop" ></i>
                    </div>
                    <div className="col-sm-8">
                      <p style={{ marginLeft: "-12vh", marginTop: "1vh" }}>
                        Yêu thích lĩnh vực CNTT
                      </p>
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
                  <div className="enrollment contents">
                      <div className="row">
                        <div className="col-sm-4">  <span class="fa fa-star star_icon"></span></div>
                        <div className="col-sm-8"><p style={{ marginLeft: "-11vh", marginTop: "1vh" }}>Lập trình viên di động</p></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">  <span class="fa fa-star star_icon"></span></div>
                        <div className="col-sm-8"><p style={{ marginLeft: "-11vh", marginTop: "1vh" }}>Lập trình và thiết kế web</p></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">  <span class="fa fa-star star_icon"></span></div>
                        <div className="col-sm-8"><p style={{ marginLeft: "-11vh", marginTop: "1vh" }}>Lập trình viên phần mềm</p></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">  <span class="fa fa-star star_icon"></span></div>
                        <div className="col-sm-8"><p style={{ marginLeft: "-11vh", marginTop: "1vh" }}> Kiểm thử viên</p></div>
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
                  <div className="row contents ">
                    <h6 className="col-sm-4" style={{marginLeft:"-6vh"}}>Tháng 1-2 </h6>
                    <p className="col-sm-8" style={{marginLeft:"-5vh"}} >
                      Giới thiệu học bổng
                    </p>
                    <h6 className="col-sm-4" style={{marginLeft:"-6vh"}}>Tháng 3-4 </h6>
                    <p className="col-sm-8"style={{marginLeft:"-5vh"}} >
                      Thi đầu vào
                    </p>
                    <h6 className="col-sm-4" style={{marginLeft:"-6vh"}}>Tháng 5-7 </h6>
                    <p className="col-sm-8"style={{marginLeft:"-5vh"}} >
                      Khảo sát gia cảnh
                    </p>
                    <h6 className="col-sm-4" style={{marginLeft:"-6vh"}}>Tháng 8-9 </h6>
                    <p className="col-sm-8"style={{marginLeft:"-5vh"}} >
                      Thông báo kết quả 
                    </p>
                    <h6 className="col-sm-4 " style={{marginLeft:"-6vh"}}>Tháng 9 </h6>
                    <p
                      className="col-sm-8" style={{marginLeft:"-5vh"}}
                    
                    >
                      Nhập học
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img
                      src="imgPNV/img1.jpg"
                      alt="Image"
                      style={{ height: "40vh", width: "60vh" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img
                      src="imgPNV/enroll.png"
                      alt="Image"
                      style={{ height: "40vh", width: "60vh" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
                data-wow-delay="1s"
              >
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img
                      src="imgPNV/process_enr.PNG"
                      alt="Image"
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: "14vh",
                      }}
                    />
                  </div>
                  {/* <div className="portfolio-text">
                                          <h3>Company Website</h3>
                                          <a className="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Enrollment;
