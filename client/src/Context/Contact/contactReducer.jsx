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

        // Filter Contact
        case FILTER_CONTACT:
            return{
                ...state,
                filtered: state.contacts.filter( contact => {

                    // regular expression | regex me search input ka payload agaya
                    const regex = new RegExp( `${action.payload}` , 'gi' );

                    // either payload contact.name ya contact.email se match kare
                    return contact.name.match(regex) || contact.email.match(regex);
                })
            }

        // Clear Contact
        case CLEAR_FILTER:
            return{
                ...state,
                filtered: null
            }


        default:
            return state;
    }
}

export default Reducer;