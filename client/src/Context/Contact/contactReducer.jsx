// 

// imports
import{ADD_CONTACT,DELETE_CONTACT,SET_CURRENT,CLEAR_CURRENT,UPDATE_CONTACT,FILTER_CONTACT,CLEAR_FILTER,SET_ALERT,REMOVE_ALERT} from "../types";
import ContactState from "./ContactState";



const Reducer = (state,action) => {
    switch(action.type){

        // add contact
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [...state.contacts, action.payload]
            }


        // delete Contact
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter( contact => contact.id !== action.payload )
            }
        
        // Set Current Contact
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }

        // Clear Current
        case CLEAR_CURRENT:
            return{
                ...state,
                current: null
            }

        // Update Contact
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.map( contact => contact.id === action.payload.id ? action.payload : contact )
            }

        default:
            return state;
    }
}

export default Reducer;