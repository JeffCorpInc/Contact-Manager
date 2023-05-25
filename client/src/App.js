// Main Application

// imports
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactState from './Context/Contact/ContactState';
import Navbar from './Components/Layout/Navbar';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

import './App.css';



const App = () => {
  return (
    <ContactState>
    <Router>
      <Fragment>

        <Navbar />

        <div className="container">

          {/* Pages */}
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/about' Component={About} />
          </Routes>

        </div>

      </Fragment>
    </Router>
    </ContactState>
  );
}

export default App;
