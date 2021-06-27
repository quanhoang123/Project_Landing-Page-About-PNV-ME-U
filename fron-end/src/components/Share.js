import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Slider from './Slider';
//import Video from './Video';
export default class Share extends Component {


  state = {
    items: [
      {id: 1, title: <Slider></Slider>},
      {id: 2, title: <img
        src="imgPNV/studentGraduate_share.jpg"
        alt="Image"
        style={{width: "100%", height: "100%" }}
      ></img>},
      {id: 3, title: <img
        src="imgPNV/StudentOutdoor_share.JPG"
        alt="Image"
        style={{width: "100%", height: "100%" }}
      ></img>},
      {id: 4, title: <img
        src="imgPNV/StudentStudy_share.JPG"
        alt="Image"
        style={{width: "100%", height: "100%" }}
      ></img>},
      {id : 5, title: 'Video'}
      // {id: 5, title: <Video></Video>}
    ]
  }
  render() {
    const { items } = this.state;
    return (
      <div className="share">
        <div className="container">
          <div
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>Cảm nhận PNV</p>
            <h2>Chia sẻ từ giáo viên và sinh viên PNV</h2>
          </div>
          {/* <center><h2 style={{textShadow:"1px 1px 4px  #67d0f0"}}>Chia sẻ</h2></center> */}
          <Carousel itemsToShow={1}>
            {items.map(item => <div key={item.id}>{item.title}</div>)}
          </Carousel>
        </div>
      </div>
    );
  }
}
