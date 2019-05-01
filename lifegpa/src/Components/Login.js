import React from "react";
import axios from "axios";
import { Link} from "react-router-dom";


class Login extends React.Component {
  state = {
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
    const credentials = this.state;
    axios
      .post("https://gentle-ridge-32500.herokuapp.com/api/login", credentials)
      .then(res => {
        const token = res.data.token;
        const id = res.data.id;
        localStorage.setItem("token", token);
        localStorage.setItem('id', id )
        this.props.history.push("/home");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
        <div>
            <h1>LifeGPA</h1>
            <div className='login'>
                <h2>Login</h2>
                <form className='loginForm' onSubmit={this.handleSubmit}>
                  <div className='inputs'>
                    <input
                        className='loginInput user'
                        type="username"
                        name="username"
                        placeholder='Username'
                        onChange={this.handleChange}
                        value={this.state.username}
                        required
                    />
                    <input
                        className='loginInput password'
                        type="password"
                        name="password"
                        placeholder='Password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                  </div>
                  <button onClick={this.handleSubmit} className='loginButton'>Login</button>
                </form>

                

                <div className="createNewAccountLink">
                    <p>New to LifeGPA?</p>
                    <Link to="/register" className='registerationLink'>Create an Account</Link>
                </div>
            </div>
        </div>
    );
  }
}
export default Login;