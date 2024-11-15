import React from 'react'
import { useContacts } from './context/ContactProvider'
import { ListGroup } from 'react-bootstrap';
function Contact() {

    const{contacts}=useContacts();
  return (
    <ListGroup variant='flush'>
        {contacts.map(contact=>(
            <ListGroup.Item key={contact.id}>
                {contact.name}
            </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

export default Contact
