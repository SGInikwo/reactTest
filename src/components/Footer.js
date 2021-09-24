import React from 'react'
import Map from './Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                {/* The footer with extra links */}
                <div id="blackBox" className="col-lg-8 col-md-8 col-xs-12">

                    <div className="float-start mx-auto listText">
                        <p>Useful Links</p>

                        <ul className="float-start mx-auto" >
                            <li>Home</li>
                            <li>Curriculum</li>
                            <li>Academic</li>
                            <li>Pastoral Support</li>
                            <li>Extra Curricular</li>
                            <li>Admissions</li>
                            <li>Parents</li>
                        </ul> 
                        <ul className="float-start mx-auto" >
                            <li>Latest News</li>
                            <li>Calendar Events</li>
                            <li>Galleries</li>
                            <li>Clubs And Teams</li>
                            <li>Communication</li>
                            <li>Policies</li>
                            <li>Sitemap</li>
                        </ul> 
                    </div>
                    <div className="float-start mx-auto listText">
                        <p>Contact information</p>

                        <ul className="float-start mx-auto" >
                            <li>All Saints C of E School</li>
                            <li>Bussy Bees Pre-School</li>
                            <li>Address Line 1</li>
                            <li>Address Line 2</li>
                            <li>Town/City</li>
                            <li>County</li>
                            <li>Country</li>
                            <li>Postcode</li>
                        </ul> 
                        <ul className="float-start mx-auto" >
                            <li>TEL</li>
                            <li>01234 567 890</li>
                            <li id="emptyList"></li>
                            <li>EMAIL</li>
                            <li>email@emailaddress.com</li>
                        </ul>
                    </div>
                </div>

                {/* Google map */} 
                <Map />

                {/* External links */}
                <div id="copyright">
                    <a href="https://www.facebook.com"><FontAwesomeIcon className="footIcon" icon={faFacebookSquare}/></a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon className="footIcon" icon={faTwitter}/></a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon className="footIcon" icon={faInstagram}/></a>
                    <a href="https://www.google.com"><FontAwesomeIcon className="footIcon" icon={faGooglePlusG}/></a>
                    <div id="copyText">
                        <span>Copyright &copy; 2011 CCHS |</span><a href="#"> Site Map</a>
                    </div>

                </div>
            </div>
        </footer>
        
    )
}

export default Footer
