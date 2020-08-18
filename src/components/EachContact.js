import React from 'react'

const EachContact = (props) => {
  return (
    <>
      <div key={props.contact.id}>{props.contact.name}</div>
    </>
  )
}

export default EachContact
