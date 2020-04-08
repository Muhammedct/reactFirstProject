//rcc
import React, { Component } from 'react'
//impt
import PropTypes from 'prop-types'
import Users from './Users'


class User extends Component {
    state = {
        txt: "",
        isVisible: false
    }
    // constructor(props) {
    //     super(props);

    //     this.state = {

    //         isVisible: false
    //     }
    // }

    static defaultProps = {
        name: " bilgi yok",
        salary: " bilgi yok",
        position: "bilgi yok"
    }
    constructor(props) {
        super(props)
        this.onClickEvent = this.onClickEvent.bind(this);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //arrow func. otomatik bind işlemi yapar.
    onClickEvent = (number, event) => {
        // console.log(event.target);
        // console.log("test");
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    onDeleteUser = (e) => {
        const { id, deleteUser } = this.props;

        this.props.deleteUser(id);

    }

    testMethod1 = (e) => {
        // localStorage.setItem("name",{name});       
        document.body.style.backgroundColor = "lightblue";

    }
    testMethod2 = (e) => {
        document.body.style.backgroundColor = "white";
        //localStorage.setItem("lastname", "Smith");
        //document.getElementById("result").innerHTML = localStorage.getItem("lastname");


    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
    
        alert('Gönderilen değer: ' + this.state.value);
        this.state.addUser(this.state.value);
        event.preventDefault();
    }


    render() {
        //Destructing
        const { id, name, position, salary } = this.props;
        const { isVisible } = this.state;
        return (


            <div className="col-md-8 mb-4">

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Yeni Kişi Ekle" />
                </form>
                <div className="card">
                    <div className="card-header d-flex justify-content-between" onMouseLeave={this.testMethod2} onMouseOver={this.testMethod1}>
                        <h4 className="d-inline">   {name} </h4>
                        <i className="fas fa-plus" onClick={this.onClickEvent.bind(this, 34)} style={{ cursor: "pointer" }}> </i>
                        <i className="far fa-trash-alt" onClick={this.onDeleteUser} style={{ cursor: "pointer" }} ></i>

                    </div>
                </div>
                {isVisible ? <div className="card-body">
                    <p className="card-text">Id : {id} </p>
                    <p className="card-text">Salary : {salary} </p>
                    <p className="card-text">Position : {position}</p>

                </div> : null
                }

            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default User;
