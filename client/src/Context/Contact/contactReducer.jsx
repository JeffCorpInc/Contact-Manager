// 

// imports
import{ADD_CONTACT,DELETE_CONTACT,SET_CONTACT,CLEAR_CONTACT,UPDATE_CONTACT,FILTER_CONTACT,CLEAR_FILTER,SET_ALERT,REMOVE_ALERT} from "../types";
import ContactState from "./ContactState";



const Reducer = (state,action) => {
    switch(action.type){
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state;
    }
}

export default Reducer;