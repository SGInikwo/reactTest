import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAlignJustify, faPhoneAlt, faTimes } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
    {/* Expand the search bar */}
    const expandSearch = () =>{
        document.getElementById("searchBar").setAttribute('style', 'display:inline !important');
        document.getElementById("searchIcon").setAttribute('style', 'display:none !important');
        document.getElementById("timesIcon").setAttribute('style', 'display:inline !important');
        document.getElementById("searchBar").focus();
    }

    /* Remove the search bar */
    const removeSearch = () =>{
        document.getElementById("searchBar").setAttribute('style', 'display:none !important');
        document.getElementById("searchIcon").setAttribute('style', 'display:inline !important');
        document.getElementById("timesIcon").setAttribute('style', 'display:none !important');
    }
    return (
        <nav className="col-lg-12 col-md-12">
            {/* Navbar with the items */}
            <img src={logo} alt="logo of the scool" />
            <div id="icons" className="float-end">
                <span id="numIcon" className="moveRight">01762 791234</span>
                <FontAwesomeIcon id="phoneIcon" className="moveRight" icon={faPhoneAlt}/>
                <input id="searchBar" class="form-control moveRight" thype="text"/>
                <FontAwesomeIcon id="searchIcon" className="moveRight" onClick={expandSearch} icon={faSearch}/>
                <FontAwesomeIcon id="timesIcon" className="moveRight" onClick={removeSearch} icon={faTimes}/>
                <FontAwesomeIcon id="ajIcon" className="moveRight" icon={faAlignJustify}/>
            </div>
            
        </nav>
    )
}

export default Nav
