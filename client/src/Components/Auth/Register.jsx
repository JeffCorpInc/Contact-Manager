import React, { useState, useContext, useEffect} from 'react';
import AlertContext from '../../Context/Alert/alertContext'
import AuthContext from '../../Context/Auth/authContext';


const Register = () => {

  // Initializing  
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  // destructuring
  const {setAlert} = alertContext;
  const { register, error, clearErrors  } = authContext;

  // display email overwrite error
  useEffect(()=>{

    if(error === 'A User with this email is already exists.'){

      setAlert(error,'danger')
      clearErrors();
    }
  }, [error])

  const [user, setUser] = useState({

    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = user;

  const onChange = e => setUser({

    // ... update existing array or object
    ...user , [e.target.name]: e.target.value
  })

  const onSubmit = e => {
    
    // prevent loading
    e.preventDefault();

    if(name === '' || email === '' || password === ''){

      setAlert("Please Provide Credentials" , 'danger')

    } else if( password !== password2 ){

      setAlert("Password Do not Match", "danger")
    } else {

      register({
        name,
        email, 
        password
      })

    }
  }

  return (

    <div className='form-container'>

        <h1>User Registration</h1>

        <form onSubmit={onSubmit}>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' value={name} onChange={onChange} />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={email} onChange={onChange} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={password} onChange={onChange} minLength="6" />
            </div>

            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name='password2' value={password2} onChange={onChange} minLength="6" />
            </div>

            <input type="submit" value='Register'className='btn btn-primary btn-block' />

        </form>
    </div>
  )
}

export default Register