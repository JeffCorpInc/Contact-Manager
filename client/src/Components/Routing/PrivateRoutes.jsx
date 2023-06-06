// Private oute he agr user login nhi hoga to auto login page pr lejae ga warna logged in he to private route pr hi rhe ga

// imports
import React, { useContext } from 'react'
import { Outlet, Navigate} from 'react-router-dom';
import AuthContext from '../../Context/Auth/authContext';


const PrivateRoutes = () => {

  // Initialize
  const authContext = useContext(AuthContext);
  
  // Destructuring
  const { isAuthenticated, loading} = authContext;

  // this is the standard implementation to make private route
  return (

    // if user is not authenticated, we'll redirect him to login 
    !isAuthenticated && !loading ? <Navigate to='login'/> : <Outlet /> 
  )
}

export default PrivateRoutes;