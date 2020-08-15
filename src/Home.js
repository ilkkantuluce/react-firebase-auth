import React, { Component } from 'react'
import fire from './config/fire'
import './App.css';


class Home extends Component {

    logout(){
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="wrapper">
                <h1>You are logged in</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;