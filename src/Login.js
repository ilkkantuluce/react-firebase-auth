import React, { Component } from 'react'
import fire from './config/fire';
import './App.css';



class Login extends Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <form>
                    <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Enter password"
                    value={this.state.password}
                    />
                    <p>Click sign up if you don't have an account</p>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Sign up</button>

                </form>
            </div>
        )
    }
}

export default Login;