// In this component, ham search input lagae ge

// imports
import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../Context/Contact/contactContext';


const ContactFilter = () => {

  // initialize
  const contactContext = useContext(ContactContext)

  // destructuring
  const {filterContacts, clearFilter, filtered} = contactContext;

  const text = useRef('');

  useEffect(() => {
    
    if (filtered === null ){
        text.current.value = '';
    }
  })

  // Function for Onchange   
  const onChange = e =>{
    
    if(text.current.value !== '' ){
        filterContacts(e.target.value);
    }
    else{
        clearFilter();
    }
  }

  return (

    <form>
        <input ref={text} type="text" placeholder='Search Contact' onChange={onChange}/>
    </form>
  )
}

export default ContactFilter;