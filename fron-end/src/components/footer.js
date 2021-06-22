import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                 {/* Footer Start */}
                 <div className="footer wow fadeIn" data-wow-delay="0.3s">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="footer-info">
                                <h2>Kate Winslet</h2>
                                <h3>123 Street, New York, USA</h3>
                                <div className="footer-menu">
                                    <p>+012 345 67890</p>
                                    <p>info@example.com</p>
                                </div>
                                <div className="footer-social">
                                    <a href><i className="fab fa-twitter" /></a>
                                    <a href><i className="fab fa-facebook-f" /></a>
                                    <a href><i className="fab fa-youtube" /></a>
                                    <a href><i className="fab fa-instagram" /></a>
                                    <a href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="container copyright">
                            <p>© <a href="#">ME:U</a>, All Right Reserved | Designed By <a href="">HTML Codex</a></p>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
            </div>
        );
    }
}

export default Footer;