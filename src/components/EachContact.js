import React from 'react'

const EachContact = (props) => {
  return (
    <>
      <div key={props.contact.id}>{props.contact.name}: {props.contact.city}, {props.contact.state}</div>
    </>
  )
}

export default EachContact
