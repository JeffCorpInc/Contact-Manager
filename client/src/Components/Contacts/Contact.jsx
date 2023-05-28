// This component contain all the user contacts and infomation inside it is in another component


// imports
import React, { Fragment, useContext } from "react";
import ContactContext from "../../Context/Contact/contactContext";
import ContactItems from "./ContactItems";



const Contacts = ()=>{

    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    // if there is no contact on display
    if(contacts.length === 0){
        return <h4>
            Please add a Contact
        </h4>
    };

    return (
        <Fragment>

        {
            filtered !== null ? filtered.map( contact => (

                <ContactItems key={contact.id} Contact={contact} />
            )) :
            contacts.map( contact => (

                <ContactItems key={contact.id} Contact={contact} />
            ))
        }

        </Fragment>
    )
}

export default Contacts;