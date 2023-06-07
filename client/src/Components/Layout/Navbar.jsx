// Navbar Component, 

// imports
import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import AuthContext from '../../Context/Auth/authContext';
import ContactContext from '../../Context/Contact/contactContext';



const Navbar = ({ title,icon }) => {

  // initialize
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  // destructuring
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  // logout function
  const onLogout =()=> {

    logout();
    clearContacts();
  }
    
  // when user is on home page after register/login
  const authLinks = (
    
    <Fragment>

      <li> Hello {user && user.name}</li>

      <li>    
        <a href='#!' onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  ) 

  // if user is not logged in
  const guestLinks = (

    <Fragment>
    
      <li>
        <Link to="./login">Login </Link>
      </li>

      <li>
        <Link to="./register">Register </Link>
      </li>

    </Fragment>
  )
    
  return (
    
    <div className='navbar bg-primary'>
        
      <h1>
        <i className={icon}/> {title}
      </h1>
      
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
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
