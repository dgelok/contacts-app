import React from 'react'
import Editform from './Editform'

const Fullinfo = (props) => {

    let deleteme = () =>{
        props.handleDelete(props.contact.id)
    }

    let editme = () =>{
        props.handleEdit(props.contact.id)
    }
  return (
    <>
      <div>{props.contact.phone}</div>
      <div>{props.contact.email}</div>
      <div>{props.contact.address}</div>
      <div>{props.contact.city}, {props.contact.state} {props.contact.zip}</div>
      <div>Delete? <button onClick={deleteme}>X</button></div>
      <div>Edit? <button onClick={editme}>O</button></div>
      {props.contact.edit ? <Editform handleUpdate={props.handleUpdate} contact={props.contact}/> : <br />}
    </>
  )
}

export default Fullinfo
