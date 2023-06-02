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

        // Register User
        case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return{
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false
        }

        // Register User Fail
        case REGISTER_FAIL:
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