// This component contain information which is inside the "conact" coponent

// imports
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../Context/Contact/contactContext';

const ContactItems = ({Contact}) => {

  // ContactContext initialize   
  const contactContext = useContext(ContactContext);

  // destructure deleteContact from global state
  const {deleteContact, setCurrent, clearCurrent} = contactContext;

  const { id, name, email, phone, type } = Contact;

  // onDelete Function to remove contact 
  const onDelete = () => {
    
    deleteContact(id);
    clearCurrent();
  }

  // onDelete Function to remove contact 
  const onEdit = () => {

    setCurrent(Contact);
  }

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
            <button className='btn btn-dark btn-sm' onClick={onEdit}> Edit</button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </p>

    </div>
  )
}

ContactItems.protoTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItems