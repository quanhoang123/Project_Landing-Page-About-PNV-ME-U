import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Activities from './components/activities';

class Master extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Activities/>
                <Footer></Footer>
         
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