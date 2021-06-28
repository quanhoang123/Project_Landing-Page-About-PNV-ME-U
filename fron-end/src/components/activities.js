import React, {Component} from 'react';

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="activity" id="activity">
                    <div className="container">
                        <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <h1>Những cột mốc quan trọng</h1>
                            <p>PN Việt Nam</p>
                        </header>
                        <div className="timeline">
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                <div className="timeline-date">2020</div>
                                    <h2>Kỷ niệm 10 năm thành lập PN Việt Nam</h2>
                                    <h4>Thành phố Đà Nẵng, Việt Nam</h4>
                                    <p>
                                        Sinh nhật 10 tuổi của PNV diễn ra trong niềm hạnh phúc vỡ òa của tất cả các thành viên trong đại gia đình PN Việt Nam.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                <div className="timeline-date">2017</div>
                                    <h2>Hợp tác cùng trường Cao đẳng Nghề Đà Nẵng</h2>
                                    <h4>Thành phố Đà Nẵng, Việt Nam</h4>
                                    <p>
                                        Hợp tác cùng đối tác mới là trường Cao đẳng Nghề Đà Nẵng để tiến hành chương trình đào tạo 3 năm với 3 chuyên ngành: Kiểm thử Tự động, Thiết kế Web và Lập trình thiết bị di động.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                <div className="timeline-date">2016</div>
                                    <h2>Hợp tác cùng trường Cao đẳng Kĩ thuật Đà Nẵng </h2>
                                    <h4>Thành phố Đà Nẵng, Việt Nam</h4>
                                    <p>
                                        Kết hợp đào tạo cùng trường Cao đẳng Kĩ thuật Đà Nẵng (nay là Đại học Kỹ thuật Sư phạm – Đại học Đà Nẵng)
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                <div className="timeline-date">2015</div>
                                    <h2>Kỷ niệm 5 năm hoạt động</h2>
                                    <h4>Thành phố Đà Nẵng, Việt Nam</h4>
                                    <p>
                                        Kỷ niệm 5 năm thành lập - một chặn đường đầy thử thách và thành công của PN Việt Nam.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                <div className="timeline-date">2014</div>
                                    <h2>PN Việt Nam - trở thành một tổ chức độc lập</h2>
                                    <h4>Thành phố Đà Nẵng, Việt Nam</h4>
                                    <p>
                                        PN Việt Nam trở thành một tổ chức hoạt động độc lập.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                <div className="timeline-date">2013</div>
                                    <h2>Triển khai 2 chuyên ngành mới</h2>
                                    <h4>Thành phố Đà Nẵng, Việt Nam</h4>
                                    <p>
                                        Triển khai 2 chuyên ngành: Phát triển Phần mềm (DeV) - Phát triển Web và Kiểm thử (WeB). Mảng WeB thay thế cho chuyên ngành cũ là Quản trị Mạng và Hệ thống (SNA).
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                <div className="timeline-date">2012</div>
                                    <h2>Lễ tốt nghiệp đầu tiên của sinh viên PNV</h2>
                                    <h4>Thành phố Đà Nẵng, Việt Nam</h4>
                                    <p>
                                        Sự thành công đầu tiên của PN với lễ tốt nghiệp của 27 em sinh viên khóa 1.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                    <div className="timeline-date">2010</div>
                                        <h2>PN Việt Nam được thành lập</h2>
                                        <h4>Thành phố Đà Nẵng, Việt Nam</h4>
                                        <p>
                                            Chi nhánh thứ 3 của PN tại Đông Nam Á chính thức đi vào hoạt động tại Đà Nẵng với 30 sinh viên.
                                        
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Activities;


