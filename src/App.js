import React, { Component } from 'react'
import Addform from './components/Addform'
import ShowContacts from './components/ShowContacts'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v1 as uuidv1 } from 'uuid';


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
      id: uuidv1(),
      name: "Dan Gelok",
      email: "dgelok@gmail.com",
      phone: "832-266-7763",
      address: "4510 Alamo Ave",
      city: "Sugar Land",
      state: "TX",
      zip: "77479",
      isShown: false,
      edit: false
    },
    {
      id: uuidv1(),
      name: "Michael Woods",
      email: "mrwoodzi@gmail.com",
      phone: "888-888-9999",
      address: "4123 Cumberland Dr",
      city: "El Paso",
      state: "TX",
      zip: "78909",
      isShown: false,
      edit: false
    },
    {
      id: uuidv1(),
      name: "Karrie Coffman",
      email: "CK@gmail.com",
      phone: "123-123-1234",
      address: "15 The Hollow",
      city: "Amherst",
      state: "MA",
      zip: "01002",
      isShown: false,
      edit: false
    }];

    await this.setState({
      contacts: setupContacts
    });

    console.log(this.state.contacts);
  }
  
  handleAdd = (contact) =>{
      let newCList = [...this.state.contacts];
      newCList.push(contact);
      this.setState({
          contacts: newCList
      })
  
  }

  handleUpdate = (contact) =>{
    // console.log("handling an update")
    let oldContacts = [...this.state.contacts];
    let index = oldContacts.findIndex(obj =>{
      return obj.id === contact.id
    });

    oldContacts.splice(index, 1);
    oldContacts.push(contact);

    this.setState({
      contacts: oldContacts
    })    
  }

  handleDelete = (id) =>{
    let oldContacts = [...this.state.contacts];
    let index = oldContacts.findIndex(obj =>{
      return obj.id === id
    });

    oldContacts.splice(index, 1);

    this.setState({
      contacts: oldContacts
    })
  }
  
  handleEdit = (id) =>{
    let oldContacts = [...this.state.contacts];
    let index = oldContacts.findIndex(obj =>{
      return obj.id === id
    });

    oldContacts.[index].edit = true;
    
    this.setState({
      contacts: oldContacts
    })
  }
  search = (e) =>{
    console.log(e.target.value)
  }

  handleClick = (id) =>{
    let oldContacts = [...this.state.contacts];
    let index = oldContacts.findIndex(obj =>{
      return obj.id === id
    });

    oldContacts.[index].isShown = true;
    
    this.setState({
      contacts: oldContacts
    })
  }


  render() {
    return (
      <>
        <h1>Contacts List</h1>
        <Addform handleAdd={this.handleAdd}/>
        <ShowContacts search={this.search} contacts={this.state.contacts} handleClick={this.handleClick} handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleUpdate={this.handleUpdate}/>
      </>
    )
  }
}

export default App
