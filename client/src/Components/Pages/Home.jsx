// Home Page, Here all the Functional Components will be made

// imports
import React, { useContext, useEffect } from "react";
import Contacts from "../Contacts/Contact";
import ContactForm from "../Contacts/ContactForm";
import ContactFilter from "../Contacts/ContactFilter"
import AuthContext from "../../Context/Auth/authContext";

const Home = () => {

  // initialize
  const authContext = useContext(AuthContext);

  useEffect(() => {

    authContext.loadUser();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (

    <div className="grid-2">
      
      <div>
        <ContactForm/>
      </div>

      <div>
        <ContactFilter/>
        <Contacts />
      </div>

    </div>
  )
}

export default Home;