

// imports
import { useReducer } from "react";
import { v4 as uuid} from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

import{
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CONTACT,
    CLEAR_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
} from "../types";

const ContactState = props => {

    // hardCode Contacts
    const initialState = {
        contacts:[]
    }

    const [state,dispatch] = useReducer(contactReducer, initialState);

    // ACTIONS
    // 1 Add Contact
    const addContact = Contact =>{

        Contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: Contact })
    }

    // 2 Delete Contact

    // 3 Set Contact 

    // 4 Clear Contact

    // 5 Update Contact

    // 6 Filter Contact

    // 7 Clear Filter


    return(
        <contactContext.Provider
            value={{
                contacts: state.contacts, addContact
            }}
        >
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;