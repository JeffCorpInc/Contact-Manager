// 

// imports
import{GET_CONTACT,ADD_CONTACT,DELETE_CONTACT,SET_CURRENT,CLEAR_CURRENT,UPDATE_CONTACT,FILTER_CONTACT,CLEAR_FILTER,CLEAR_CONTACT,SET_ALERT,REMOVE_ALERT,CONTACT_ERROR} from "../types";
import ContactState from "./ContactState";



const Reducer = (state,action) => {
    switch(action.type){

        // Get Contact
        case GET_CONTACT:
            return{
                ...state,
                contacts: action.payload,
                loading: false
            }

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
                contacts: state.contacts.filter( contact => contact._id !== action.payload )
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
                contacts: state.contacts.map( contact => contact._id === action.payload._id ? action.payload : contact )
            }

        case CLEAR_CONTACT:
            return{
                ...state,
                contacts: null,
                filtered: null,
                error: null,
                current: null
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

        // COntact Error
        case CONTACT_ERROR:
            return{
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default Reducer;