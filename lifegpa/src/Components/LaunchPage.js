import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class LaunchPage extends Component {
  render() {
    return (
    <div>
        <div>
            <h1>LifeGPA</h1>
        </div>

        <div>
            <Link to="/Login">Login</Link>
            <Link to="/Signup">Sign Up</Link>
        </div>
    </div>
    )
  }
}
