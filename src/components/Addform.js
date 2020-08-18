import React, { Component } from 'react'
import {Form, Col, Button} from 'react-bootstrap';


class Addform extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();
        let newContact = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value,
            address: this.refs.address.value,
            city: this.refs.city.value,
            state: this.refs.state.value,
            zip: this.refs.name.value,
        }
        let newCList = this.state.contacts;
        newCList.push(newContact);
        this.setState({
            contacts: newCList
        })
    }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
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
