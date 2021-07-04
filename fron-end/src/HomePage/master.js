import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Enroll from "../Enroll/Enroll";

import Share from '../Share/Share';
import Notificate from '../Notificate/Notificate';
class Master extends Component {
    render() {
        return (
            <div>
                <Header></Header>
               
                {/* Hero End */}
                {/* About Start */}
                
                {/* About End */}
                {/* Service Start */}
               
                {/* Service End */}
                {/* Experience Start */}
              
                {/* Job Experience End */}               
                {/* Banner Start */}
               
                {/* Banner End */}              
                {/* Enroll Start */}
 <Enroll></Enroll>
                {/* Enroll End */}  
                       {/*  Share*/}
                       <Share></Share>
                       {/* End share */}
                {/* Banner Start */}
 
                {/* Banner End */}
                {/* Sesstion Start */}
                
               
                {/* Testimonials End */}
                {/* Testimonial Start */}

                {/* Testimonial End */}
               
                {/* Team Start */}

                {/* Team End */}
                {/* Contact Start */}

                {/* Contact End */}
                {/* Blog Start */}

                {/* Blog End */}
                {/* Footer Start */}
                <Footer></Footer>
                <Notificate></Notificate>
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