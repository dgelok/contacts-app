import React, { Component } from 'react'
import Addform from './components/Addform'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }
  
    componentDidMount = async () =>{
    let setupContacts = [
    {
      name: "Dan Gelok",
      email: "dgelok@gmail.com",
      phone: "832-266-7763",
      address: "4510 Alamo Ave",
      city: "Sugar Land",
      state: "TX",
      zip: "77479",
    },
    {
      name: "Michael Woods",
      email: "mrwoodzi@gmail.com",
      phone: "888-888-9999",
      address: "4123 Cumberland Dr",
      city: "El Paso",
      state: "TX",
      zip: "78909"
    },
    {
      name: "Karrie Coffman",
      email: "CK@gmail.com",
      phone: "123-123-1234",
      address: "15 The Hollow",
      city: "Amherst",
      state: "MA",
      zip: "01002"
    }];

    await this.setState({
      contacts: setupContacts
    });

    console.log(this.state.contacts);
  }
  
  
  render() {
    return (
      <>
        <h1>Contacts List</h1>
        <Addform />
      </>
    )
  }
}

export default App
