import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Slider from './Slider';
import Video from './Video';
import './share.css';
export default class Share extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
         
            <div className="share">
                <div className="container"
                    style={
                        {marginTop: "5vh"}
                }>
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>Cảm nhận PNV</p>
                <h2>Chia sẻ từ giáo viên và sinh viên Passerelles numériques Vietnam</h2>
            </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/* <img className="d-block w-100" src="imgPNV/StudentOutdoor_share.JPG" alt="First slide"
                                   /> */}
                                   <Slider></Slider>
                                  
                                  
                            </div>
                           
                            <div className="carousel-item">
                                <img className="d-block w-100" src="imgPNV/studentGraduate_share (2).jpg" alt="Third slide"/>
                                <i>Tại Lễ Kỉ Niệm 10 năm thành lập <a href="/">PNV</a> và Lễ Tốt Nghiệp của khóa 2017-2020</i>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="imgPNV/travalKMS2.jpg" alt="Fourt slide"/>
                                <i>Chuyến tham quan công ty <a href="https://www.kms-technology.com/">KMS Đà Nẵng</a></i>
                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100" src="imgPNV/newway.jpg"></img>
                                <i>Workshop của Tổ chức Newway tại <a href="/">PNV</a>  </i>
                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100" src="imgPNV/StudentOutdoor_share.JPG"></img>
                                <i>Hoạt động ngoại khóa của sinh viên <a href="/">PNV</a>  </i>
                            </div>
                            <div className="carousel-item">
                                <Video></Video>
                                <i>"Heart To Heart"_Những chia sẻ của sinh viên <a href="/">PNV</a></i>
                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" id="slide_img" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" id="slide_img" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
