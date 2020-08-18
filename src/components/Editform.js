import React, { Component } from 'react'
import {Form, Col, Button} from 'react-bootstrap';


class Editform extends Component {
  
  findID = () =>{
      return this.props.contact.id;
  }
    
  addContact = (e) =>{
    e.preventDefault();

    let newguy = {
      id: this.findID(),
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      address: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.name.value,
      isShown: false,
      edit: false
    };
    console.log(newguy)
    this.props.handleUpdate(newguy);
  }
    
  render() {
    return (
      <>
        <form onSubmit={this.addContact}>
            <Form.Group controlId="formBasicEmail">
                <Col><input ref="name" type="text" defaultValue={this.props.contact.name} /></Col>
                <Col><input ref="email" type="text" defaultValue={this.props.contact.email} /></Col>
                <Col><input ref="phone" type="text" defaultValue={this.props.contact.phone} /></Col>
                <Col><input ref="address" type="text" defaultValue={this.props.contact.address} /></Col>
                <Col><input ref="city" type="text" defaultValue={this.props.contact.city} /></Col>
                <Col><input ref="state" type="text" defaultValue={this.props.contact.state} /></Col>
                <Col><input ref="zip" type="text" defaultValue={this.props.contact.zip} /></Col>
                
            </Form.Group>
            <Button variant="primary" value='submit' type="submit">
                Edit
            </Button>
           
        </form>
      </>
    )
  }
}

export default Editform