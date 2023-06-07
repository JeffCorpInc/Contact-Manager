// This component contain all the user contacts and infomation inside it is in another component


// imports
import React, { Fragment, useContext, useEffect } from "react";
import ContactContext from "../../Context/Contact/contactContext";
import ContactItems from "./ContactItems";
import Spinner from '../Layout/Spinner';


const Contacts = ()=>{

    const contactContext = useContext(ContactContext);
    const { contacts, filtered, getContacts, loading } = contactContext;

    // useEffect is as componentDidMount, it runs the logic at loading
    useEffect(() => {

        getContacts()
        
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // if there is no contact on display
    if( contacts !== null && contacts.length === 0 && !loading){
        return <h4>
            Please add a Contact
        </h4>
    };

    return (
        <Fragment>

            {
                contacts !== null & !loading ? (

                    <Fragment>
                    {
                        filtered !== null ? filtered.map( contact => (
            
                            <ContactItems key={contact._id} Contact={contact} />
                        )) :
                        contacts.map( contact => (
            
                            <ContactItems key={contact._id} Contact={contact} />
                        ))
                    }
                    </Fragment>

                ) : <Spinner/>
            }

        </Fragment>
    )
}

export default Contacts;