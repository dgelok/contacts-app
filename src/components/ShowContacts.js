import React from 'react'
import EachContact from './EachContact'

const ShowContacts = (props) => {

    let contactsArr = props.contacts.map(contact =>{
        return <EachContact contact={contact}/>
    })
  return (
    <>
      <h3> Contacts: </h3>
      {contactsArr}
    </>
  )
}

export default ShowContacts
