

// imports
import { useReducer } from "react";
import axios from 'axios';
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

import{
    GET_CONTACT,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    CLEAR_CONTACT,
    CONTACT_ERROR

} from "../types";

const ContactState = props => {

    // hardCode Contacts
    const initialState = {
        contacts: null,
        current:  null,
        filtered: null,
        error:    null
    };

    const [state,dispatch] = useReducer(contactReducer, initialState);


    // ACTIONS

    // 0 Get contacts
    const getContacts = async () => {

        try {
            
            // get req to receive data
            const res = await axios.get('api/contacts')
            dispatch({ type: GET_CONTACT, payload: res.data })

        } 
        catch (err) {
            
            // dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
            console.log(err);
        }
    }

    // 1 Add Contact
    const addContact = async Contact => {

        // adding axios to save contacts to DB
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            
            // post req to send data
            const res = await axios.post('api/contacts', Contact, config)
            dispatch({ type: ADD_CONTACT, payload: res.data })

        } 
        catch (err) {
            
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg })
        }
    };

    // 2 Delete Contact
    const deleteContact = async id => {

        try {
            
            // to delete data
            await axios.delete(`api/contacts/${id}`)
            dispatch({ type: DELETE_CONTACT, payload: id})

        } 
        catch (err) {
            
            console.log(err);
        }
        
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
    const updateContact = async contact => {

        // adding axios to save contacts to DB
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            
            // put req to edit data
            const res = await axios.put(`api/contacts/${contact._id}`, contact, config)
            dispatch({ type: UPDATE_CONTACT, payload: res.data })

        } 
        catch (err) {
            
            console.log(err);
        }
    }

    // 6 Filter Contact
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACT, payload: text })
    }

    // 7 Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    // 8 Clear Contacts
    const clearContacts = () => {
        dispatch({ type: CLEAR_CONTACT })
    }


    return(

        // yaha ham isliye add kar rhe hein har function ko take wo 
        // contactContext me chala gae or contactContext ko import krke ye functions use karsake.
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addContact,deleteContact,setCurrent,clearCurrent,updateContact,filterContacts,clearFilter,getContacts,clearContacts
            }}
        >
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;