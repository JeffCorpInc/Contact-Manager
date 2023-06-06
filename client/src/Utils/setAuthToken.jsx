
// utility file - ham check kare ge ke token jo pass hora he wo valid he ya nhi | if yes then we'll send it to global header


// imports
import axios from 'axios';


const setAuthToken = token => {

    if (token) {
        
        // Identifying token validity
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {

        // deleting x-auth token key
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;

