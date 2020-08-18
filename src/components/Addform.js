import React, { Component } from 'react'
import {Form, Col, Button} from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';


class Addform extends Component {

  addContact = (e) =>{
    e.preventDefault();

    let newguy = {
      id: uuidv1(),
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
    this.props.handleAdd(newguy);
  }
    
  render() {
    return (
      <>
        <form onSubmit={this.addContact}>
            <Form.Group controlId="formBasicEmail">
                <Col><input ref="name" type="text" placeholder="name" /></Col>
                <Col><input ref="email" type="text" placeholder="email" /></Col>
                <Col><input ref="phone" type="text" placeholder="phone" /></Col>
                <Col><input ref="address" type="text" placeholder="address" /></Col>
                <Col><input ref="city" type="text" placeholder="city" /></Col>
                <Col><input ref="state" type="text" placeholder="state" /></Col>
                <Col><input ref="zip" type="text" placeholder="zip" /></Col>
            </Form.Group>
            <Button variant="primary" value='submit' type="submit">
                Submit
            </Button>
           
        </form>
      </>
    )
  }
}

export default Addform