// Main Application

// imports
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactState from './Context/Contact/ContactState';
import AuthState from './Context/Auth/AuthState';
import AlertState from './Context/Alert/AlertState';
import Navbar from './Components/Layout/Navbar';
import Alerts from './Components/Layout/Alerts';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';


import './App.css';



const App = () => {
  return (
   
    <AuthState>
    <ContactState>
    <AlertState>
    <Router>
      <Fragment>

        <Navbar />

        <div className="container">
          <Alerts />

          {/* Pages */}
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/about' Component={About} />
            <Route exact path='/register' Component={Register} />
            <Route exact path='/login' Component={Login} />
          </Routes>

        </div>

      </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
    
  );
}

export default App;
