import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Partner from '../Partner/main_partner';
import Local_partner from '../Partner/local_partner';
class Master extends Component {
    render() {
        return (
            <div>
                {/* <Header></Header> */}
                {/* Hero End */}
                {/* About Start */}
                
                {/* About End */}
                {/* Service Start */}
               
                {/* Service End */}
                {/* Experience Start */}
              
                {/* Job Experience End */}               
                {/* Banner Start */}
               
                {/* Banner End */}              
                {/* Portfolio Start */}
 
                {/* Portfolio End */}         
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
                {/* Partner Start */}
                    <Partner />
                    <Local_partner />
                {/* Partner End */}
              
                
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