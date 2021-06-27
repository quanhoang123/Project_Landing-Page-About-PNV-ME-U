import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Share from "../components/Share";
import Enrollment from "../components/Enrollment";


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

        {/* Enrollment Start */}
        <Enrollment></Enrollment>
        {/* Enrollmet End */}

        {/* Share start */}
        <Share></Share>
        {/* Share end */}

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
        {/* Footer End */}
        {/* Back to top button */}
        <a href="#" className="btn back-to-top" style={{ marginRight: "9vh" }}>
          <i className="fa fa-chevron-up" />
        </a>
        {/* Pre Loader */}
        <div id="loader" className="show">
          <div className="loader" />
        </div>
      </div>
    );
  }
}

export default Master;
