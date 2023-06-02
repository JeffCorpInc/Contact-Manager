

// imports
import { useReducer } from "react";
import { v4 as uuid} from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

import{
    
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER

} from "../types";

const ContactState = props => {

    // hardCode Contacts
    const initialState = {
        contacts:[],
        current:null,
        filtered: null
    };

    const [state,dispatch] = useReducer(contactReducer, initialState);


    // ACTIONS

    // 1 Add Contact
    const addContact = Contact =>{

        Contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: Contact })
    };

    // 2 Delete Contact
    const deleteContact = (id) => {

        dispatch({ type: DELETE_CONTACT, payload: id })
    };

    // 3 Set Current Contact 
    const setCurrent = (contact) => {

        dispatch({ type: SET_CURRENT, payload: contact })
    };

    // 4 Clear Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // 5 Update Contact
    const updateContact = (contact) => {

        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    // 6 Filter Contact
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACT, payload: text })
    }

    // 7 Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }


    return(

        // yaha ham isliye add kar rhe hein har function ko take wo 
        // contactContext me chala gae or contactContext ko import krke ye functions use karsake.
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,deleteContact,setCurrent,clearCurrent,updateContact,filterContacts,clearFilter
            }}
        >
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;