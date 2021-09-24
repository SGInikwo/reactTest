import React from 'react'
import school from '../assets/school.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    /* Function to scroll to the main part */
    const scrollDown = () =>{
        window.scroll(0, (window.innerHeight));
        if(window.innerWidth <= 1530){
            window.scroll(0, (window.innerHeight/1.43));
        }
    }

    return (
        <div id="banner" className="col-lg-12 col-md-12">
            <img src={school} alt="school"/>
            <p>All Saints C of E First School &amp; Bussy Bees Pre-School</p>

            {/* The find more button */}
            <div id="moreBtn">Find out more</div>

            {/* Arrows */}
            <FontAwesomeIcon id="chevronLeft" icon={faChevronLeft}/>
            <FontAwesomeIcon id="chevronRight" icon={faChevronRight}/>
            <FontAwesomeIcon id="angleDown" onClick={scrollDown} icon={faAngleDown}/>

            {/* The three Rectangles */}
            <div id="threeBoxes">
                <div id="boxLeft" className="float-start"></div>
                <div id="boxMid" className="float-start"></div>
                <div id="boxRight" className="float-start"></div> 
            </div>
            
        </div>
    )
}

export default Banner
