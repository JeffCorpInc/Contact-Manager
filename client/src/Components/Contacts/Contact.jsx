// This component contain all the user contacts and infomation inside it is in another component


// imports
import React, { Fragment, useContext } from "react";
import ContactContext from "../../Context/Contact/contactContext";
import ContactItems from "./ContactItems";



const Contacts = ()=>{

    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;

    return (
        <Fragment>
            {contacts.map( contact => (

                <ContactItems key={contact.id} Contact={contact} />

            ))}
        </Fragment>
    )
}

export default Contacts;