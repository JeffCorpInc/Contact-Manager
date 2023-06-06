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

const Reducer = (state,action) => {
    switch(action.type){

        // Load User / Auth
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }

        // Register Success / Login Success
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return{
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false
        }

        // Register User Fail / Auth Error / login Fail / logout  | Removing token
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        localStorage.removeItem('token');
        return{
            ...state,
            token:null,
            isAuthenticated: false,
            loading: false,
            user: null,
            error: action.payload
        }

        // Clear Errors
        case CLEAR_ERROR:
            return{
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export default Reducer; 