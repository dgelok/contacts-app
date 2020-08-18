import React from 'react'

const Fullinfo = (props) => {
  return (
    <>
      <div>{props.contact.phone}</div>
      <div>{props.contact.email}</div>
      <div>{props.contact.address}</div>
      <div>{props.contact.city}, {props.contact.state} {props.contact.zip}</div>
      <br />
    </>
  )
}

export default Fullinfo
