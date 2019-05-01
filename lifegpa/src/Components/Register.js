import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Register extends React.Component {
  state = {
    //first_name: '',
    //last_name: '',
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.props.history)
    const log = this.state;
    axios
      .post("https://gentle-ridge-32500.herokuapp.com/api/register", log)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        this.props.history.push("/login")
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
        <div>
            <h1>LifeGPA</h1>
            <div className='Register'>
                <h2>Register</h2>
                <form className='formContainer' onSubmit={this.handleSubmit}>
                  <div className='form'>
                    <input
                        className='signUpInput username'
                        type="username"
                        name="username"
                        placeholder='Username'
                        onChange={this.handleChange}
                        value={this.state.username}
                        required
                    />
                    <input
                        className='signUpInput password'
                        type="password"
                        name="password"
                        placeholder='Password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                  </div>
                  <button className='signUpButton' >Create Account</button>
                </form>

                

                <div className="loginLink">
                    <p>Already Have an Acount?</p>
                    <Link to="/login" className='signUpLoginLink'>Login</Link>
                </div>

            </div>
        </div>
    );
  }
}

export default Register;