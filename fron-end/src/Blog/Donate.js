import React, { Component } from 'react';
// import Header from '../header';
import './style1.css';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
class Donate extends Component {

    render() {
        var countries = [
            { "text": "Afghanistan", "value": "AF" },
            { "text": "Åland Islands", "value": "AX" },
            { "text": "Albania", "value": "AL" },
            { "text": "Algeria", "value": "DZ" },
            { "text": "American Samoa", "value": "AS" },
            { "text": "Andorra", "value": "AD" },
            { "text": "Angola", "value": "AO" },
            { "text": "Anguilla", "value": "AI" },
            { "text": "Antarctica", "value": "AQ" },
            { "text": "Antigua and Barbuda", "value": "AG" },
            { "text": "Argentina", "value": "AR" },
            { "text": "Armenia", "value": "AM" },
            { "text": "Aruba", "value": "AW" },
            { "text": "Australia", "value": "AU" },
            { "text": "Austria", "value": "AT" },
            { "text": "Azerbaijan", "value": "AZ" },
            { "text": "Bahamas", "value": "BS" },
            { "text": "Bahrain", "value": "BH" },
            { "text": "Bangladesh", "value": "BD" },
            { "text": "Barbados", "value": "BB" },
            { "text": "Belarus", "value": "BY" },
            { "text": "Belgium", "value": "BE" },
            { "text": "Belize", "value": "BZ" },
            { "text": "Benin", "value": "BJ" },
            { "text": "Bermuda", "value": "BM" },
            { "text": "Bhutan", "value": "BT" },
            { "text": "Bolivia", "value": "BO" },
            { "text": "Bosnia and Herzegovina", "value": "BA" },
            { "text": "Botswana", "value": "BW" },
            { "text": "Bouvet Island", "value": "BV" },
            { "text": "Brazil", "value": "BR" },
            { "text": "British Indian Ocean Territory", "value": "IO" },
            { "text": "Brunei Darussalam", "value": "BN" },
            { "text": "Bulgaria", "value": "BG" },
            { "text": "Burkina Faso", "value": "BF" },
            { "text": "Burundi", "value": "BI" },
            { "text": "Cambodia", "value": "KH" },
            { "text": "Cameroon", "value": "CM" },
            { "text": "Canada", "value": "CA" },
            { "text": "Cape Verde", "value": "CV" },
            { "text": "Cayman Islands", "value": "KY" },
            { "text": "Central African Republic", "value": "CF" },
            { "text": "Chad", "value": "TD" },
            { "text": "Chile", "value": "CL" },
            { "text": "China", "value": "CN" },
            { "text": "Christmas Island", "value": "CX" },
            { "text": "Cocos (Keeling) Islands", "value": "CC" },
            { "text": "Colombia", "value": "CO" },
            { "text": "Comoros", "value": "KM" },
            { "text": "Congo", "value": "CG" },
            { "text": "Congo, The Democratic Republic of the", "value": "CD" },
            { "text": "Cook Islands", "value": "CK" },
            { "text": "Costa Rica", "value": "CR" },
            { "text": "Cote D'Ivoire", "value": "CI" },
            { "text": "Croatia", "value": "HR" },
            { "text": "Cuba", "value": "CU" },
            { "text": "Cyprus", "value": "CY" },
            { "text": "Czech Republic", "value": "CZ" },
            { "text": "Denmark", "value": "DK" },
            { "text": "Djibouti", "value": "DJ" },
            { "text": "Dominica", "value": "DM" },
            { "text": "Dominican Republic", "value": "DO" },
            { "text": "Ecuador", "value": "EC" },
            { "text": "Egypt", "value": "EG" },
            { "text": "El Salvador", "value": "SV" },
            { "text": "Equatorial Guinea", "value": "GQ" },
            { "text": "Eritrea", "value": "ER" },
            { "text": "Estonia", "value": "EE" },
            { "text": "Ethiopia", "value": "ET" },
            { "text": "Falkland Islands (Malvinas)", "value": "FK" },
            { "text": "Faroe Islands", "value": "FO" },
            { "text": "Fiji", "value": "FJ" },
            { "text": "Finland", "value": "FI" },
            { "text": "France", "value": "FR" },
            { "text": "French Guiana", "value": "GF" },
            { "text": "French Polynesia", "value": "PF" },
            { "text": "French Southern Territories", "value": "TF" },
            { "text": "Gabon", "value": "GA" },
            { "text": "Gambia", "value": "GM" },
            { "text": "Georgia", "value": "GE" },
            { "text": "Germany", "value": "DE" },
            { "text": "Ghana", "value": "GH" },
            { "text": "Gibraltar", "value": "GI" },
            { "text": "Greece", "value": "GR" },
            { "text": "Greenland", "value": "GL" },
            { "text": "Grenada", "value": "GD" },
            { "text": "Guadeloupe", "value": "GP" },
            { "text": "Guam", "value": "GU" },
            { "text": "Guatemala", "value": "GT" },
            { "text": "Guernsey", "value": "GG" },
            { "text": "Guinea", "value": "GN" },
            { "text": "Guinea-Bissau", "value": "GW" },
            { "text": "Guyana", "value": "GY" },
            { "text": "Haiti", "value": "HT" },
            { "text": "Heard Island and Mcdonald Islands", "value": "HM" },
            { "text": "Holy See (Vatican City State)", "value": "VA" },
            { "text": "Honduras", "value": "HN" },
            { "text": "Hong Kong", "value": "HK" },
            { "text": "Hungary", "value": "HU" },
            { "text": "Iceland", "value": "IS" },
            { "text": "India", "value": "IN" },
            { "text": "Indonesia", "value": "ID" },
            { "text": "Iran, Islamic Republic Of", "value": "IR" },
            { "text": "Iraq", "value": "IQ" },
            { "text": "Ireland", "value": "IE" },
            { "text": "Isle of Man", "value": "IM" },
            { "text": "Israel", "value": "IL" },
            { "text": "Italy", "value": "IT" },
            { "text": "Jamaica", "value": "JM" },
            { "text": "Japan", "value": "JP" },
            { "text": "Jersey", "value": "JE" },
            { "text": "Jordan", "value": "JO" },
            { "text": "Kazakhstan", "value": "KZ" },
            { "text": "Kenya", "value": "KE" },
            { "text": "Kiribati", "value": "KI" },
            { "text": "Korea, Democratic People'S Republic of", "value": "KP" },
            { "text": "Korea, Republic of", "value": "KR" },
            { "text": "Kuwait", "value": "KW" },
            { "text": "Kyrgyzstan", "value": "KG" },
            { "text": "Lao People'S Democratic Republic", "value": "LA" },
            { "text": "Latvia", "value": "LV" },
            { "text": "Lebanon", "value": "LB" },
            { "text": "Lesotho", "value": "LS" },
            { "text": "Liberia", "value": "LR" },
            { "text": "Libyan Arab Jamahiriya", "value": "LY" },
            { "text": "Liechtenstein", "value": "LI" },
            { "text": "Lithuania", "value": "LT" },
            { "text": "Luxembourg", "value": "LU" },
            { "text": "Macao", "value": "MO" },
            { "text": "Macedonia, The Former Yugoslav Republic of", "value": "MK" },
            { "text": "Madagascar", "value": "MG" },
            { "text": "Malawi", "value": "MW" },
            { "text": "Malaysia", "value": "MY" },
            { "text": "Maldives", "value": "MV" },
            { "text": "Mali", "value": "ML" },
            { "text": "Malta", "value": "MT" },
            { "text": "Marshall Islands", "value": "MH" },
            { "text": "Martinique", "value": "MQ" },
            { "text": "Mauritania", "value": "MR" },
            { "text": "Mauritius", "value": "MU" },
            { "text": "Mayotte", "value": "YT" },
            { "text": "Mexico", "value": "MX" },
            { "text": "Micronesia, Federated States of", "value": "FM" },
            { "text": "Moldova, Republic of", "value": "MD" },
            { "text": "Monaco", "value": "MC" },
            { "text": "Mongolia", "value": "MN" },
            { "text": "Montserrat", "value": "MS" },
            { "text": "Morocco", "value": "MA" },
            { "text": "Mozambique", "value": "MZ" },
            { "text": "Myanmar", "value": "MM" },
            { "text": "Namibia", "value": "NA" },
            { "text": "Nauru", "value": "NR" },
            { "text": "Nepal", "value": "NP" },
            { "text": "Netherlands", "value": "NL" },
            { "text": "Netherlands Antilles", "value": "AN" },
            { "text": "New Caledonia", "value": "NC" },
            { "text": "New Zealand", "value": "NZ" },
            { "text": "Nicaragua", "value": "NI" },
            { "text": "Niger", "value": "NE" },
            { "text": "Nigeria", "value": "NG" },
            { "text": "Niue", "value": "NU" },
            { "text": "Norfolk Island", "value": "NF" },
            { "text": "Northern Mariana Islands", "value": "MP" },
            { "text": "Norway", "value": "NO" },
            { "text": "Oman", "value": "OM" },
            { "text": "Pakistan", "value": "PK" },
            { "text": "Palau", "value": "PW" },
            { "text": "Palestinian Territory, Occupied", "value": "PS" },
            { "text": "Panama", "value": "PA" },
            { "text": "Papua New Guinea", "value": "PG" },
            { "text": "Paraguay", "value": "PY" },
            { "text": "Peru", "value": "PE" },
            { "text": "Philippines", "value": "PH" },
            { "text": "Pitcairn", "value": "PN" },
            { "text": "Poland", "value": "PL" },
            { "text": "Portugal", "value": "PT" },
            { "text": "Puerto Rico", "value": "PR" },
            { "text": "Qatar", "value": "QA" },
            { "text": "Reunion", "value": "RE" },
            { "text": "Romania", "value": "RO" },
            { "text": "Russian Federation", "value": "RU" },
            { "text": "RWANDA", "value": "RW" },
            { "text": "Saint Helena", "value": "SH" },
            { "text": "Saint Kitts and Nevis", "value": "KN" },
            { "text": "Saint Lucia", "value": "LC" },
            { "text": "Saint Pierre and Miquelon", "value": "PM" },
            { "text": "Saint Vincent and the Grenadines", "value": "VC" },
            { "text": "Samoa", "value": "WS" },
            { "text": "San Marino", "value": "SM" },
            { "text": "Sao Tome and Principe", "value": "ST" },
            { "text": "Saudi Arabia", "value": "SA" },
            { "text": "Senegal", "value": "SN" },
            { "text": "Serbia and Montenegro", "value": "CS" },
            { "text": "Seychelles", "value": "SC" },
            { "text": "Sierra Leone", "value": "SL" },
            { "text": "Singapore", "value": "SG" },
            { "text": "Slovakia", "value": "SK" },
            { "text": "Slovenia", "value": "SI" },
            { "text": "Solomon Islands", "value": "SB" },
            { "text": "Somalia", "value": "SO" },
            { "text": "South Africa", "value": "ZA" },
            { "text": "South Georgia and the South Sandwich Islands", "value": "GS" },
            { "text": "Spain", "value": "ES" },
            { "text": "Sri Lanka", "value": "LK" },
            { "text": "Sudan", "value": "SD" },
            { "text": "Suriname", "value": "SR" },
            { "text": "Svalbard and Jan Mayen", "value": "SJ" },
            { "text": "Swaziland", "value": "SZ" },
            { "text": "Sweden", "value": "SE" },
            { "text": "Switzerland", "value": "CH" },
            { "text": "Syrian Arab Republic", "value": "SY" },
            { "text": "Taiwan, Province of China", "value": "TW" },
            { "text": "Tajikistan", "value": "TJ" },
            { "text": "Tanzania, United Republic of", "value": "TZ" },
            { "text": "Thailand", "value": "TH" },
            { "text": "Timor-Leste", "value": "TL" },
            { "text": "Togo", "value": "TG" },
            { "text": "Tokelau", "value": "TK" },
            { "text": "Tonga", "value": "TO" },
            { "text": "Trinidad and Tobago", "value": "TT" },
            { "text": "Tunisia", "value": "TN" },
            { "text": "Turkey", "value": "TR" },
            { "text": "Turkmenistan", "value": "TM" },
            { "text": "Turks and Caicos Islands", "value": "TC" },
            { "text": "Tuvalu", "value": "TV" },
            { "text": "Uganda", "value": "UG" },
            { "text": "Ukraine", "value": "UA" },
            { "text": "United Arab Emirates", "value": "AE" },
            { "text": "United Kingdom", "value": "GB" },
            { "text": "United States", "value": "US" },
            { "text": "United States Minor Outlying Islands", "value": "UM" },
            { "text": "Uruguay", "value": "UY" },
            { "text": "Uzbekistan", "value": "UZ" },
            { "text": "Vanuatu", "value": "VU" },
            { "text": "Venezuela", "value": "VE" },
            { "text": "Viet Nam", "value": "VN" },
            { "text": "Virgin Islands, British", "value": "VG" },
            { "text": "Virgin Islands, U.S.", "value": "VI" },
            { "text": "Wallis and Futuna", "value": "WF" },
            { "text": "Western Sahara", "value": "EH" },
            { "text": "Yemen", "value": "YE" },
            { "text": "Zambia", "value": "ZM" },
            { "text": "Zimbabwe", "value": "ZW" }
        ];

        return (
            <div>
                <div className="navbar navbar-expand-lg bg-light navbar-light">
                    <div className="container-fluid">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav ml-auto">
                                <a href="#home" className="nav-item nav-link active">Home</a>
                                <a href="#about" className="nav-item nav-link">About</a>
                                <a href="#service" className="nav-item nav-link">Acction</a>
                                <a href="#experience" className="nav-item nav-link">Information</a>
                                <a href="#portfolio" className="nav-item nav-link">Contact</a>

                                <Link to="donation"><button className="nav-item nav-link btn-danger">Donata Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero" id="home">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text">
                                        <p>I'm</p>
                                        <h1>Kate Winslet</h1>
                                        <h2 />
                                        <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                                    </div>
                                    <div className="hero-btn">
                                        <a className="btn" href>Hire Me</a>
                                        <a className="btn" >Contact Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-none d-md-block">
                                <div className="hero-image">
                                    {/* <img src="img/hero.png" alt="Hero Image" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="donation wow fadeInUp" data-wow-delay="0.1s" id="review">
                    <div className="container-fluid">

                        <div className="owl-carousel testimonials-carousel">
                            <div className="donation-item">
                                <img src="img/imageTrungquan.jpg" alt="Image" />
                            </div>
                            <div className="donation-item">
                                <img src="img/testimonial-1.jpg" alt="Image" />
                            </div>
                            <div className="donation-item">
                                <img src="img/testimonial-1.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container ">
                    <p>You can make a difference and improve the lives of underprivileged youths by helping Passerelles numériques in many different ways.
                    </p><p> Sponsor our actions on a monthly basis. Because it gives us long term stability, this regular donation is one of the most convenient and powerful help you can provide to Passerelles numériques.
                    </p><p>You can also make a one-off donation and contribute to Passerelles numériques’ program. It’s easy and secure! You can use our secure donation form below.
                    </p>
                    <p>If you prefer to pay by check, just send it to the PN centre nearest to you.</p>
                    <div className="donates-form" >
                        <img src="https://th.bing.com/th/id/OIP.VGclM04uzA6nLx6KcrKVxwHaFP?pid=ImgDet&rs=1" width="50px" height="33px" style={{ float: 'right' }} />
                        <img src="https://th.bing.com/th/id/R3faa0b3d7207fcb4f8bfc91dfa55d0be?rik=%2bkg6YoVdIzrMQA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2f2%2f21%2fFlag_of_Vietnam.svg%2f2000px-Flag_of_Vietnam.svg.png&ehk=ch8dvYpGh7gop%2bsuPbVjXDbHZdGC5ry%2f2p%2bmv9qn1iI%3d&risl=&pid=ImgRaw" width="50px" style={{ float: 'right' }} />
                        <img src="img/logo.png" width="100px" />
                        <span>Donate now to Passerelles numériques</span>
                        <form id="form-outsize">
                            <div className="row">
                                <div className="col-sm-4" >
                                    <div className="header-detail" id="header-detail">
                                        <h4>My Donation</h4>
                                    </div>
                                    <div id="second-form">
                                        <div className="form-group amount-container" >
                                            <ul className="select_donation">
                                                <li data-amount="15.00" data-reduction="unique" data-tip-min="1" data-tip-max="6.00000" data-tip-value="3.5000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="4534260" class="active-amount" data-tax-receipt="yes">15 €</li>
                                                <li data-amount="45.00" data-reduction="unique" data-tip-min="1" data-tip-max="10.300000000000000000000000000" data-tip-value="5.6500000000000000000000000000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="4534263" class="" data-tax-receipt="yes">45 €</li>
                                                <li data-amount="75.00" data-reduction="unique" data-tip-min="1" data-tip-max="13.00000" data-tip-value="7.0000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="4534278" class="" data-tax-receipt="yes">75 €</li>
                                                <li data-amount="150.00" data-reduction="unique" data-tip-min="1" data-tip-max="18.000000" data-tip-value="9.50000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="1236275" class="" data-tax-receipt="yes">150 €</li>
                                                <li data-amount="400.00" data-reduction="unique" data-tip-min="1" data-tip-max="33.00000" data-tip-value="17.0000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="1236276" class="" data-tax-receipt="yes">400 €</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-md-4">
                                    <div className="header-detail">
                                        <h4>My detail</h4>
                                    </div>
                                    <div id="content-detail">
                                        <input type="radio" name="test" id="private" className="radio-test " checked="checked" />
                                        <input type="radio" name="test" id="organze" className="radio-test " />
                                        <div className="labels">
                                            <label for="private" id="label-private" className="label col-sm-5">Private individual</label>
                                            <label for="organze" id="label-organze" className="label col-sm-5">Organization</label>
                                        </div>
                                        <div className="content content-private" id="content-private">
                                            <div className="form-group">
                                                <input type="text" name="lastname" id="lastname" className="col" />
                                                <input type="text" name="firstname" id="firstname" className="col" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="firstname" id="firstname" />
                                            </div>
                                            <div className="form-group" >
                                                <input type="text" name="email" id="email" />
                                            </div>
                                            <div className="form-group" >
                                                <input type="text" name="dayofbirth" id="dayofbirth" className="col-sm-5" />
                                            </div>
                                            <div className="form-group" >
                                                <input type="text" name="city" id="city" className="col" />
                                                <input type="text" name="zipCode" id="zipCode" className="col" />
                                            </div>
                                            <div className="form-group" >
                                                <select>
                                                    {
                                                        countries.map(a => (
                                                            <option>{a.text.toString()}</option>

                                                        ))
                                                    };
                                                </select>

                                            </div>
                                        </div>
                                        <div className="content content-organze" id="content-organze">
                                            <div className="form-group">
                                                <input type="text" name="lastname" id="lastname" className="col" />
                                                <input type="text" name="firstname" id="firstname" className="col" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="firstname" id="firstname" />
                                            </div>
                                            <div className="form-group" >
                                                <input type="text" name="email" id="email" />
                                            </div>
                                            <div className="form-group" >
                                                <input type="text" name="dayofbirth" id="dayofbirth" className="col-sm-5" />
                                            </div>
                                            <div className="form-group" >
                                                <input type="text" name="city" id="city" className="col" />
                                                <input type="text" name="zipCode" id="zipCode" className="col" />
                                            </div>
                                            <div className="form-group" >
                                                <select>
                                                    {
                                                        countries.map(a => (
                                                            <option>{a.text.toString()}</option>

                                                        ))
                                                    };
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-detail">
                                        <h4>Contact</h4>
                                        <p>Passerelles numériques VietNam</p>
                                        <p>99 Tô Hiến Thành, Đà Nẵng</p>

                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div id="second-form">
                                        <h6 >My Sumary</h6>
                                        <div className="form-group amount-container">
                                            <ul className="select_donation">
                                                <li data-amount="15.00" data-reduction="unique" data-tip-min="1" data-tip-max="6.00000" data-tip-value="3.5000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="4534260" class="active-amount" data-tax-receipt="yes">15 €</li>
                                                <li data-amount="45.00" data-reduction="unique" data-tip-min="1" data-tip-max="10.300000000000000000000000000" data-tip-value="5.6500000000000000000000000000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="4534263" class="" data-tax-receipt="yes">45 €</li>
                                                <li data-amount="75.00" data-reduction="unique" data-tip-min="1" data-tip-max="13.00000" data-tip-value="7.0000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="4534278" class="" data-tax-receipt="yes">75 €</li>
                                                <li data-amount="150.00" data-reduction="unique" data-tip-min="1" data-tip-max="18.000000" data-tip-value="9.50000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="1236275" class="" data-tax-receipt="yes">150 €</li>
                                                <li data-amount="400.00" data-reduction="unique" data-tip-min="1" data-tip-max="33.00000" data-tip-value="17.0000" data-action="update-dynamic-infos" data-pereodicity="unique" data-ref="1236276" class="" data-tax-receipt="yes">400 €</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Donate;