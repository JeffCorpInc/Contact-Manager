

// imports
import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import axios from 'axios';

import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERROR
} from "../types";




const AuthState = props => {

    // hardCode Contacts
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state,dispatch] = useReducer(authReducer, initialState);


    // ACTIONS

    // 0 Load user - check which user is login


    // 1 Register user - user signup and get token
    const register = async formData => {

        // config me headers me content type batae ge - json
        const config = {
            headers: {
                'Content-Type': 'application/json' 
            }
        }
        try {

            // we'll catch response from the post method ,,  // endpoint | data | config
            const res = await axios.post('/api/users',formData, config)

            // data will be token 
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        } 
        catch (err) {
            
            // agr registeration fail hogae
            dispatch({ type: REGISTER_FAIL , payload: err.response.data.msg })
        }
    }

    // 2 login user - get the token on login


    // 3 logout user - logout and token destroyed


    // 4 clear errors
    const clearErrors = () => dispatch({ type: CLEAR_ERROR })
    


    return(

        // yaha ham isliye add kar rhe hein har function ko take wo 
        // authContext me chala gae or authContext ko import krke ye functions use karsake.
        <authContext.Provider
            value={{

                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register, clearErrors
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;