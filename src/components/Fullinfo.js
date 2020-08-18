import React from 'react'

const Fullinfo = (props) => {

    let deleteme = () =>{
        props.handleDelete(props.contact.id)
    }
  return (
    <>
      <div>{props.contact.phone}</div>
      <div>{props.contact.email}</div>
      <div>{props.contact.address}</div>
      <div>{props.contact.city}, {props.contact.state} {props.contact.zip}</div>
      <div>Delete? <button onClick={deleteme}>X</button></div>
      <br />
    </>
  )
}

export default Fullinfo
