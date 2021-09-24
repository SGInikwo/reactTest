import React from 'react'
import rugby from '../assets/1-rugby.jpg'
import piano from '../assets/2-piano.jpg'
import ducks from '../assets/3-ducks.jpg'
import sports from '../assets/4-sports.jpg'
import classroom from '../assets/5-classroom.jpg'
import book from '../assets/6-book.jpg'
import child from '../assets/7-child.jpg'
import uniform from '../assets/8-uniform.jpg'
import Nav from './Nav'
import Banner from './Banner'
import Footer from './Footer'
 
const Main = () => {
    return (
        <div id="mainCards" className="row">
            <Nav />

            <Banner />
            
            {/* Main part of the site  */}
            <div className="card col-lg-3 col-md-6">
                <img src={rugby} alt="rugby"/>
                <div style={{backgroundColor: "#D90F5A"}}> <p>Pastoral Support</p></div>
            </div>
            <div className="card col-lg-3 col-md-6">
                <img src={piano} alt="rugby"/>
                <div style={{backgroundColor: "#0DE5A8"}}> <p>Calendar</p></div>
            </div>
            <div className="card col-lg-3 col-md-6">
                <img src={ducks} alt="rugby"/>
                <div style={{backgroundColor: "#30C4C9"}}> <p>Busy Bees</p></div>
            </div>
            <div className="card col-lg-3 col-md-6">
                <img src={sports} alt="rugby"/>
                <div style={{backgroundColor: "#FF6E27"}}> <p>News</p></div>
            </div>
            <div className="card col-lg-3 col-md-6">
                <img src={classroom} alt="rugby"/>
                <div style={{backgroundColor: "#FFB60B"}}> <p>Curriculum</p></div>
            </div>
            <div className="card col-lg-3 col-md-6">
                <img src={book} alt="rugby"/>
                <div style={{backgroundColor: "#4F2958"}}> <p>First School</p></div>
            </div>
            <div className="card col-lg-3 col-md-6">
                <img src={child} alt="rugby"/>
                <div style={{backgroundColor: "#212D44"}}> <p>Children</p></div>
            </div>
            <div className="card col-lg-3 col-md-6">
                <img src={uniform} alt="rugby"/>
                <div style={{backgroundColor: "#88C100"}}> <p>Parents</p></div>
            </div>

            <Footer />
        </div>
    )
}

export default Main
