import React, { Component } from 'react';
// import Header from '../header';
import './style1.css';
class Donation extends Component {
  
    render() {
        return (

            <div className="main1">
                {/* <Header></Header> */}
                <div className="container1">
                    <h2>Sign up to great new account </h2>
                    <form method="POST" id="donation-form" className="donation-form">
                        <h3>
                            <span className="title_text">My Donation</span>
                        </h3>
                        <fieldset>
                            <div className="fieldset-content">
                                <div className="form-group">
                                <label htmlFor="email" className="form-label">Donation Account</label>
                                    <ul className="select_donation">
                                        <li><a href="#">
                                            <button className="btn-blue active" data-dollars={25} data-impact="Covers housing or counseling services for one person">
                                                $25
                                            </button>
                                        </a></li>
                                        <li><a href="#">
                                            <button className="btn-blue" data-dollars={50} data-impact="Covers housing or counseling services for two people">
                                                $50
                                            </button>
                                        </a></li>
                                        <li><a href="#">
                                            <button className="btn-blue" data-dollars={100} data-impact="Covers housing or counseling services for four people">
                                                $100
                                            </button>
                                        </a></li>
                                        <li><a href="#">
                                            <button className="btn-blue" data-dollars={500} data-impact="Covers housing or counseling services for twenty people">
                                                $500
                                            </button>
                                        </a></li>
                                        
                                        <li id="other-input">
                                            <span>$</span>                                      
                                            <input type="number" data-impact="That’s great. Thank you!" style={{width: '100px', height:'20px'}} />
                                        </li>                                                                   
                                    </ul>
                                    {/* <input type="text" name="donation_amount" id="donation_amount" placeholder="Donation Amount" /> */}

                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                </div>
                                <div className="form-group form-password">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" id="password" data-indicator="pwindicator" />
                                    <div id="pwindicator">
                                        <div className="bar-strength">
                                            <div className="bar-process">
                                                <div className="bar" />
                                            </div>
                                        </div>
                                        <div className="label" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_avatar" className="form-label">Select avatar</label>
                                    <div className="form-file">
                                        <input type="file" name="your_avatar" id="your_avatar" className="custom-file-input" />
                                        <span id="val" />
                                        <span id="button">Select File</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fieldset-footer">
                                <span>Step 1 of 3</span>
                            </div>
                        </fieldset>                      
                        <h3>
                            <span className="title_text">My Details</span>
                        </h3>
                        <fieldset>
                            <div className="fieldset-content">
                                <div className="form-group">
                                    <label htmlFor="full_name" className="form-label">Full name</label>
                                    <input type="text" name="full_name" id="full_name" placeholder="Full Name" />
                                </div>
                                <div className="form-select">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select name="country" id="country">
                                        <option value>Country</option>
                                        <option value="Australia">Australia</option>
                                        <option value="USA">America</option>
                                    </select>
                                </div>
                                <div className="form-radio">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <div className="form-radio-item">
                                        <input type="radio" name="gender" defaultValue="male" id="male" defaultChecked="checked" />
                                        <label htmlFor="male">Male</label>
                                        <input type="radio" name="gender" defaultValue="female" id="female" />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                                <div className="form-textarea">
                                    <label htmlFor="about_us" className="form-label">About us</label>
                                    <textarea name="about_us" id="about_us" placeholder="Who are you ..." defaultValue={""} />
                                </div>
                            </div>
                            <div className="fieldset-footer">
                                <span>Step 2 of 3</span>
                            </div>
                        </fieldset>
                        <h3>
                            <span className="title_text">My Sumary</span>
                        </h3>
                        <fieldset>
                            <div className="fieldset-content">
                                <div className="form-radio">
                                    <label htmlFor="payment_type">Payment Type</label>
                                    <div className="form-radio-flex">
                                        <input type="radio" name="payment_type" id="payment_visa" defaultValue="payment_visa" defaultChecked="checked" />
                                        <label htmlFor="payment_visa"><img src="resource/images/icon-visa.png" alt="" /></label>
                                        <input type="radio" name="payment_type" id="payment_master" defaultValue="payment_master" />
                                        <label htmlFor="payment_master"><img src="resource/images/icon-master.png" alt="" /></label>
                                        <input type="radio" name="payment_type" id="payment_paypal" defaultValue="payment_paypal" />
                                        <label htmlFor="payment_paypal"><img src="resource/images/icon-paypal.png" alt="" /></label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="credit_card" className="form-label">Credit Card</label>
                                        <input type="text" name="credit_card" id="credit_card" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cvc" className="form-label">CVC</label>
                                        <input type="text" name="cvc" id="cvc" />
                                    </div>
                                </div>
                                <div className="form-date">
                                    <label htmlFor="expiry_date">Expiration Date</label>
                                    <div className="form-flex">
                                        <div className="form-date-item">
                                            <select id="expiry_date" name="expiry_date" />
                                            <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                                        </div>
                                        <div className="form-date-item">
                                            <select id="expiry_year" name="expiry_year" />
                                            <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_of_card" className="form-label">Name of card</label>
                                    <input type="text" name="name_of_card" id="name_of_card" />
                                </div>
                            </div>
                            <div className="fieldset-footer">
                                <span>Step 3 of 3</span>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>


        );
    }
}

export default Donation;