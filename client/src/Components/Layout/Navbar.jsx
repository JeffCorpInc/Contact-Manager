// Navbar Component, 

// imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Navbar = ({ title,icon }) => {
    
  return (
    
    <div className='navbar bg-primary'>
        
      <h1>
        <i className={icon}/> {title}
      </h1>
      
      <ul>
        <li>
          <Link to="./">Home </Link>
          <Link to="./about">About </Link>
          <Link to="./login">Login </Link>
          <Link to="./register">Register </Link>
        </li>
      </ul>

    </div>
  )

}


// PropTypes is used to ensure that the current Value is Correct DataType.
Navbar.propTypes = {

    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

// Added Default Props Values
Navbar.defaultProps = {

    title: "Contact Manager App",
    icon: "fas fa-id-card-alt"
}

export default Navbar;
