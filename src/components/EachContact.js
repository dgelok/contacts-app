import React from 'react'
import Fullinfo from './Fullinfo'

const EachContact = (props) => {

  let clickme = () =>{
    props.handleClick(props.contact.id)
  }

  let isShown = props.contact.isShown
  return (
    <>
      <div onClick={clickme} key={props.contact.id}>{props.contact.name}: {props.contact.city}, {props.contact.state}</div>
      {isShown ? <Fullinfo contact={props.contact} handleDelete={props.handleDelete}/> : <br />}
    </>
  )
}

export default EachContact
