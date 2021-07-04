import React, { Component,Fragment } from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
         {/* Footer Start */}
            <div className="footer wow fadeIn" data-wow-delay="0.3s">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="footer-info">
                                <h2>Tầng 4 Tòa nhà B Trường Cao Đẳng Nghề Đà Nẵng</h2>
                                <h3>99 Tô Hiến Thành, Đà Nẵng, Việt Nam</h3>
                                <div className="footer-menu">
                                    <p>P : +84 236 3888 503</p>
                                   <p style={{fontSize:'20px'}}>
                                    E: info.vietnam@passerellesnumeriques.org
                                    </p> 
                                </div>
                                <div className="footer-social">
                                    <a href='https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/'><i className="fab fa-twitter" /></a>
                                    <a href='https://www.facebook.com/passerelles.numeriques/'><i className="fab fa-facebook-f" /></a>
                                    <a href='https://www.youtube.com/watch?v=tGBO4zFlyy4'><i className="fab fa-youtube" /></a>
                                    <a href='https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/'><i className="fab fa-instagram" /></a>
                                    <a href='https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/'><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* <a href="https://www.passerellesnumeriques.org/vi/alettertoitengineers/"></a> */}
                {/* Back to top button */}
                {/* <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up" /></a> */}
                {/* Pre Loader */}
                {/* <div id="loader" className="show">
                    <div className="loader" />
                </div> */}
            {/* Footer End */}
        </Fragment>
        );
    }
}

export default Footer;