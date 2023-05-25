// Home Page, Here all the Functional Components will be made

// imports
import React from "react";
import Contacts from "../Contacts/Contact";
import ContactForm from "../Contacts/ContactForm";


const Home = () => {

  return (

    <div className="grid-2">
      
      <div>
        <ContactForm/>
      </div>

      <div>
        <Contacts />
      </div>

    </div>
  )
}

export default Home;