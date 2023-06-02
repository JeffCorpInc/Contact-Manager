

// imports
import { useReducer } from "react";
import { v4 as uuid} from "uuid";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";

import{

    SET_ALERT,
    REMOVE_ALERT

} from "../types";

const AlertState = props => {

    // hardCode Contacts
    const initialState = [];

    const [ state,dispatch ] = useReducer(alertReducer, initialState);


    // ACTIONS

    // Set Alert
    const setAlert = (msg, type, timeout = 2000) => {

        const id = uuid();
        dispatch({type: SET_ALERT , payload: {msg, type, id}});

        setTimeout(() => dispatch ({type: REMOVE_ALERT , payload: id}) , timeout);
    }

    return(

        // yaha ham isliye add kar rhe hein har function ko take wo 
        // alertContext me chala gae or alertContext ko import krke ye functions use karsake.
        <alertContext.Provider
            value={{

                alerts: state,
                setAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;