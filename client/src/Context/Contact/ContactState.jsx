

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
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
} from "../types";

const ContactState = props => {

    // hardCode Contacts
    const initialState = {
        contacts:[],
        current:null
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

    // 7 Clear Filter


    return(
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,deleteContact,setCurrent,clearCurrent,updateContact
            }}
        >
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;