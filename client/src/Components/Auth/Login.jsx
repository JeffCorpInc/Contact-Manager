
// imports
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Context/Auth/authContext';
import AlertContext from '../../Context/Alert/alertContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  // initialize
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const navigate = useNavigate();


  // destructuring
  const {setAlert} = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(()=>{

    // isAuthenticated is true then redirect page to home
    if(isAuthenticated){

      navigate('/');
    }

    if(error === 'Incorrect Password'){

      setAlert(error,'danger')
      clearErrors();
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[error, isAuthenticated, navigate])

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const {email, password} = user;

  const onChange = e => setUser({

    // ... update existing array or object
    ...user , [e.target.name]: e.target.value
  })

  const onSubmit = e => {
    
    // prevent loading
    e.preventDefault();
    
    // if the credentials are empty
    if(email === '' || password === '') {
      
      setAlert('Please enter Credentials' , 'danger')
    }
    else{
      login({email,password})
    }
  }

  return (

    <div className='form-container'>

        <h1>User Login</h1>

        <form onSubmit={onSubmit}>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={email} onChange={onChange} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={password} onChange={onChange} />
            </div>

            <input type="submit" value='Login'className='btn btn-primary btn-block' />

        </form>
    </div>
  )
}

export default Login;