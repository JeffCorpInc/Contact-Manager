

import{SET_ALERT,REMOVE_ALERT} from "../types";


const Reducer = (state,action) => {
    switch(action.type){

        // Set Alert
        case SET_ALERT:

         // ...state = isme sare existings array/objects rhe ge
            return  [...state, action.payload]
                
        // Remove Alert
        case REMOVE_ALERT:

        // state is the array of objects
            return state.filter( alert => alert.id !== action.payload )
               
        default:
            return state;
    }
}

export default Reducer;