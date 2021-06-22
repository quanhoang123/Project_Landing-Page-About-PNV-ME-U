import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
class Master extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                {/* Hero End */}
                {/* About Start */}
                <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src="img/about.jpg" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-header text-left">
                                        <p>Learn About Me</p>
                                        <h2>10 Years Experience</h2>
                                    </div>
                                    <div className="about-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                        </p>
                                    </div>
                                    <div className="skills">
                                        <div className="skill-name">
                                            <p>Web Design</p><p>85%</p>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="skill-name">
                                            <p>Web Development</p><p>95%</p>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="skill-name">
                                            <p>Apps Design</p><p>90%</p>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="skill-name">
                                            <p>Apps Development</p><p>85%</p>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <a className="btn" href>Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Service Start */}
                <div className="service" id="service">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p>What I do</p>
                            <h2>Awesome Quality Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <i className="fa fa-laptop" />
                                    </div>
                                    <div className="service-text">
                                        <h3>Web Design</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <i className="fa fa-laptop-code" />
                                    </div>
                                    <div className="service-text">
                                        <h3>Web Development</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <i className="fab fa-android" />
                                    </div>
                                    <div className="service-text">
                                        <h3>Apps Design</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <i className="fab fa-apple" />
                                    </div>
                                    <div className="service-text">
                                        <h3>Apps Development</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* Experience Start */}
                <div className="experience" id="experience">
                    <div className="container">
                        <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p>My Resume</p>
                            <h2>Working Experience</h2>
                        </header>
                        <div className="timeline">
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                    <div className="timeline-date">2045 - 2050</div>
                                    <h2>Web Developer</h2>
                                    <h4>Soft Agency, San Francisco, CA</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                    <div className="timeline-date">2045 - 2050</div>
                                    <h2>Web Developer</h2>
                                    <h4>Soft Agency, San Francisco, CA</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                    <div className="timeline-date">2045 - 2050</div>
                                    <h2>Web Developer</h2>
                                    <h4>Soft Agency, San Francisco, CA</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                    <div className="timeline-date">2045 - 2050</div>
                                    <h2>Web Developer</h2>
                                    <h4>Soft Agency, San Francisco, CA</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                    <div className="timeline-date">2045 - 2050</div>
                                    <h2>Web Developer</h2>
                                    <h4>Soft Agency, San Francisco, CA</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text">
                                    <div className="timeline-date">2045 - 2050</div>
                                    <h2>Web Developer</h2>
                                    <h4>Soft Agency, San Francisco, CA</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Job Experience End */}
                {/* Banner Start */}
                <div className="banner wow zoomIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="section-header text-center">
                            <p>Reasonable Price</p>
                            <h2>Get A <span>Special</span> Price</h2>
                        </div>
                        <div className="container banner-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                            </p>
                            <a className="btn">Pricing Plan</a>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
                {/* Portfolio Start */}
                <div className="portfolio" id="portfolio">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p>My Portfolio</p>
                            <h2>My Excellent Portfolio</h2>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul id="portfolio-filter">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-1">Web Design</li>
                                    <li data-filter=".filter-2">Mobile Apps</li>
                                    <li data-filter=".filter-3">Game Dev</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container">
                            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                                <div className="portfolio-wrap">
                                    <div className="portfolio-img">
                                        <img src="img/portfolio-1.jpg" alt="Image" />
                                    </div>
                                    <div className="portfolio-text">
                                        <h3>eCommerce Website</h3>
                                        <a className="btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="portfolio-wrap">
                                    <div className="portfolio-img">
                                        <img src="img/portfolio-2.jpg" alt="Image" />
                                    </div>
                                    <div className="portfolio-text">
                                        <h3>Product Landing Page</h3>
                                        <a className="btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="portfolio-wrap">
                                    <div className="portfolio-img">
                                        <img src="img/portfolio-3.jpg" alt="Image" />
                                    </div>
                                    <div className="portfolio-text">
                                        <h3>JavaScript quiz game</h3>
                                        <a className="btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="portfolio-wrap">
                                    <div className="portfolio-img">
                                        <img src="img/portfolio-4.jpg" alt="Image" />
                                    </div>
                                    <div className="portfolio-text">
                                        <h3>JavaScript drawing</h3>
                                        <a className="btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="portfolio-wrap">
                                    <div className="portfolio-img">
                                        <img src="img/portfolio-5.jpg" alt="Image" />
                                    </div>
                                    <div className="portfolio-text">
                                        <h3>Social Mobile Apps</h3>
                                        <a className="btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                                <div className="portfolio-wrap">
                                    <div className="portfolio-img">
                                        <img src="img/portfolio-6.jpg" alt="Image" />
                                    </div>
                                    <div className="portfolio-text">
                                        <h3>Company Website</h3>
                                        <a className="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Portfolio End */}
                {/* Banner Start */}
                <div className="banner wow zoomIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="section-header text-center">
                            <p>Awesome Discount</p>
                            <h2>Get <span>30%</span> Discount</h2>
                        </div>
                        <div className="container banner-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                            </p>
                            <a className="btn">Order Now</a>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
                {/* Testimonials Start */}
                 <section className="testimonials">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                                    <p>Pricing Plan</p>
                                    <h2>Affordable Price</h2>
                                </div>
                                <div id="customers-testimonials" className="owl-carousel">
                                    {/*TESTIMONIAL 1 */}
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <h2>Basic</h2>
                                            <div className="price-prices">
                                                <h2><small>$</small>49<span>/ mo</span></h2>
                                            </div>
                                            <div className="price-description">
                                                <ul>
                                                    <li>Bootstrap 4</li>
                                                    <li>Font Awesome 5</li>
                                                    <li>Responsive Design</li>
                                                    <li>Browser Compatibility</li>
                                                    <li>Easy To Use</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="testimonial-name">Order Now</div>
                                    </div>
                                    {/*END OF TESTIMONIAL 1 */}
                                    {/*TESTIMONIAL 2 */}
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <h2>STANDARD</h2>
                                            <div className="price-prices">
                                                <h2><small>$</small>99<span>/ mo</span></h2>
                                            </div>
                                            <div className="price-description">
                                                <ul>
                                                    <li>Bootstrap 4</li>
                                                    <li>Font Awesome 5</li>
                                                    <li>Responsive Design</li>
                                                    <li>Browser Compatibility</li>
                                                    <li>Easy To Use</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="testimonial-name">Order Now</div>
                                    </div>
                                    {/*END OF TESTIMONIAL 2 */}
                                    {/*TESTIMONIAL 3 */}
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                            <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                        </div>
                                        <div className="testimonial-name">LARA ATKINSON</div>
                                    </div>
                                    {/*END OF TESTIMONIAL 3 */}
                                    {/*TESTIMONIAL 4 */}
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                            <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                        </div>
                                        <div className="testimonial-name">IAN OWEN</div>
                                    </div>
                                    {/*END OF TESTIMONIAL 4 */}
                                    {/*TESTIMONIAL 5 */}
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                            <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                        </div>
                                        <div className="testimonial-name">MICHAEL TEDDY</div>
                                    </div>
                                    {/*END OF TESTIMONIAL 5 */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonials End */}
                {/* Testimonial Start */}
                <div className="testimonial wow fadeInUp" data-wow-delay="0.1s" id="review">
                    <div className="container">
                        <div className="testimonial-icon">
                            <i className="fa fa-quote-left" />
                        </div>
                        <div className="owl-carousel testimonials-carousel">
                            <div className="testimonial-item">
                                <div className="testimonial-img">
                                    <img src="img/testimonial-1.jpg" alt="Image" />
                                </div>
                                <div className="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                                    </p>
                                    <h3>Customer Name</h3>
                                    <h4>Profession</h4>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-img">
                                    <img src="img/testimonial-2.jpg" alt="Image" />
                                </div>
                                <div className="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                                    </p>
                                    <h3>Customer Name</h3>
                                    <h4>Profession</h4>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-img">
                                    <img src="img/testimonial-3.jpg" alt="Image" />
                                </div>
                                <div className="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                                    </p>
                                    <h3>Customer Name</h3>
                                    <h4>Profession</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
               
                {/* Team Start */}
                <div className="team" id="team">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p>My Team</p>
                            <h2>Expert Team Members</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="img/team-1.jpg" alt="Image" />
                                    </div>
                                    <div className="team-text">
                                        <h2>Mollie Ross</h2>
                                        <h4>Web Designer</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                        </p>
                                        <div className="team-social">
                                            <a className="btn" href><i className="fab fa-twitter" /></a>
                                            <a className="btn" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn" href><i className="fab fa-linkedin-in" /></a>
                                            <a className="btn" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="img/team-2.jpg" alt="Image" />
                                    </div>
                                    <div className="team-text">
                                        <h2>Dylan Adams</h2>
                                        <h4>Web Developer</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                        </p>
                                        <div className="team-social">
                                            <a className="btn" href><i className="fab fa-twitter" /></a>
                                            <a className="btn" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn" href><i className="fab fa-linkedin-in" /></a>
                                            <a className="btn" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="img/team-3.jpg" alt="Image" />
                                    </div>
                                    <div className="team-text">
                                        <h2>Jennifer Page</h2>
                                        <h4>Apps Designer</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                        </p>
                                        <div className="team-social">
                                            <a className="btn" href><i className="fab fa-twitter" /></a>
                                            <a className="btn" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn" href><i className="fab fa-linkedin-in" /></a>
                                            <a className="btn" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="img/team-4.jpg" alt="Image" />
                                    </div>
                                    <div className="team-text">
                                        <h2>Josh Dunn</h2>
                                        <h4>Apps Developer</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                        </p>
                                        <div className="team-social">
                                            <a className="btn" href><i className="fab fa-twitter" /></a>
                                            <a className="btn" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn" href><i className="fab fa-linkedin-in" /></a>
                                            <a className="btn" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Contact Start */}
                <div className="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-4" />
                                <div className="col-md-8">
                                    <div className="contact-form">
                                        <div id="success" />
                                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                            <div className="control-group">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                                <p className="help-block" />
                                            </div>
                                            <div className="control-group">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                                <p className="help-block" />
                                            </div>
                                            <div className="control-group">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                                <p className="help-block" />
                                            </div>
                                            <div className="control-group">
                                                <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                                                <p className="help-block" />
                                            </div>
                                            <div>
                                                <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
                {/* Blog Start */}
                <div className="blog" id="blog">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p>From Blog</p>
                            <h2>Latest Articles</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="blog-item wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="blog-img">
                                        <img src="img/blog-1.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-text">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <div className="blog-meta">
                                            <p><i className="far fa-user" />Admin</p>
                                            <p><i className="far fa-list-alt" />Web Design</p>
                                            <p><i className="far fa-calendar-alt" />01-Jan-2045</p>
                                            <p><i className="far fa-comments" />5</p>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                                        </p>
                                        <a className="btn" href>Read More <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog-item wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="blog-img">
                                        <img src="img/blog-2.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-text">
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <div className="blog-meta">
                                            <p><i className="far fa-user" />Admin</p>
                                            <p><i className="far fa-list-alt" />Apps Design</p>
                                            <p><i className="far fa-calendar-alt" />01-Jan-2045</p>
                                            <p><i className="far fa-comments" />10</p>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                                        </p>
                                        <a className="btn" href>Read More <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog End */}
                {/* Footer Start */}
                <Footer></Footer>
                {/* Footer End */}
                {/* Back to top button */}
                <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up" /></a>
                {/* Pre Loader */}
                <div id="loader" className="show">
                    <div className="loader" />
                </div>
            </div>
        );
    }
}

export default Master;