// This component contain information which is inside the "conact" coponent

// imports
import React from 'react'
import PropTypes from 'prop-types'



const ContactItems = ({Contact}) => {

  const { name, email, phone, type } = Contact;

  return (

    <div className='card bg-light' >
        
        <span style={{float: "right"}} className={'badge ' + (type === 'Professional' ? 'badge-success' : 'badge-primary')}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>

        <h3 className='text-primary text-left'>
            {name}{' '} 
        </h3>     

        <ul className='list'>
            {email && (
                <li>
                    <i className="fas fa-envelope-open" /> {email}
                </li>
            )}
            {phone &&(
                <li>
                    <i className="fas-phone"/> {phone}
                </li>
            )}
        </ul>

        <p>
            <button className='btn btn-dark btn-sm'> Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>
        </p>

    </div>
  )
}

ContactItems.protoTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItems