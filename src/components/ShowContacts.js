import React from 'react'
import EachContact from './EachContact'

const ShowContacts = (props) => {

    let mycontacts = [...props.contacts];
    mycontacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
    let contactsArr = mycontacts.map(contact =>{
        return <EachContact contact={contact} handleClick={props.handleClick} handleDelete={props.handleDelete}/>
    })

    
  return (
    <>
      <h3> Contacts: </h3>
      {contactsArr}
    </>
  )
}

export default ShowContacts
