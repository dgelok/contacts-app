import React from 'react'
import EachContact from './EachContact'

const ShowContacts = (props) => {

    let mycontacts = [...props.contacts];
    mycontacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
    let contactsArr = mycontacts.map(contact =>{
        return <EachContact contact={contact} handleClick={props.handleClick} handleDelete={props.handleDelete} handleEdit={props.handleEdit} handleUpdate={props.handleUpdate}/>
    })

    
  return (
    <>
      <h3> Contacts: </h3>
      <p>Search for a contact:</p>
      <input type="text" onChange={props.search}/>
      <br />
      {contactsArr}
    </>
  )
}

export default ShowContacts
