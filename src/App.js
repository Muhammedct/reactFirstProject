import React, { Component } from 'react';
import User from "./components/User";
import './App.css';
import Navbar from "./components/Navbar"
import Users from './components/Users';
import PropTypes from 'prop-types';


class App extends Component {
  state = {

    id:"",
    name :"",
    position:"",
    salary :"" ,
    //property
    users : [
      {
        id:1,
        name : "Muhammed Can TOPÇU",
        position : "Frontend Developer"
      },
      {
        id:2,
        name : "Hamza Topçu",
        salary : 500+"₺",
        position : "Student"
      }
    ]
  }

  
  deleteUser = (id) =>{
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })

  }

  //toDo
  addUser = ()=> {
    
    this.setState({users: [...this.state.users, {id:this.state.id, name:this.state.name, position: this.state.position, salary: this.state.salary}]})  // array ekleme.

  }
  addUser2 = (name)=> {
    
    this.setState({users: [...this.state.users, {id:5, name:name, position: "this.state.position", salary: "this.state.salary"}]})  // array ekleme.

  }
  
  render() {
    return (
      <div className="container">
        <Navbar title="Test Application" />
        <hr />

      <Users  deleteUser ={this.deleteUser} users = { this.state.users}/>

      </div>
    );
  }
}

export default App;
