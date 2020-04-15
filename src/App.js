import React, { Component } from 'react';
import User from "./components/User";
import './App.css';
import Navbar from "./components/Navbar"
import Users from './components/Users';
import PropTypes from 'prop-types';


class App extends Component {
  state = {

    id:"",
    name: "",
    position: "",
    salary: "",
    //property
    users: [
      {
         id: 1,
        name: "Muhammed Can TOPÇU",
        position: "Frontend Developer"
      },
      {
         id: 2,
        name: "Hamza Topçu",
        salary: 500 + "₺",
        position: "Student"
      }
    ]
  }
  


  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter(user => id !== user.id)
    })

  }

  //toDo
  addUser = () => {
    this.setState({users:[{id:5, name: 'Name', salary:'1', position:'Worker'}]})

    //this.setState({ users: [...this.state.users, { id: 5, name: this.state.name, position: this.state.position, salary: this.state.salary }] })  // array ekleme.
    //alert('Gönderilen değer: ' + this.state.value);
  }
  
  handleNameChange = (event)  =>{
    this.setState({ name: event.target.value });
}
handlePositionChange= (event)  =>{
  this.setState({ position: event.target.value });
}
handleSalaryChange= (event)  =>{
  this.setState({ salary: event.target.value });
}


  render() {
    const { id, name, position, salary } = this.state;
    return (
      
      <div className="container">
        <Navbar title="Test Application" />
        <hr />

        <Users deleteUser={this.deleteUser} users={this.state.users} />
        <form onSubmit={this.addUser}>
          <label>
            Name:
            <input type="isim" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="name"/>
            <input type="pozisyon" value={this.state.position} onChange={this.handlePositionChange.bind(this)} placeholder="position"/>
            <input type="maas" value={this.state.salary} onChange={this.handleSalaryChange.bind(this)} placeholder="salary"/>
          </label>
          <input type="submit" value="Yeni Kişi Ekle" />
        </form>

      </div>
    );
  }
}

export default App;
