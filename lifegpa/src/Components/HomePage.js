import React from "react";
import authentication from "../Authentication/authentication";

import HabitList from './HabitList';


class HomePage extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: [],
            habitCall: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
    }

    render() {
        const { user } = this.state;
        return (
            <div className="">
                <h1>Hi {user.username}!</h1>
                <p>You're logged in!!</p>

                <HabitList apiList={this.state.habitCall} />

                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
=======
  state = {
    habits: [],
    completed: false,
    editHappening: false,
    editId: null
  };

  logOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/login");
    console.log(event);
  };

  componentDidMount() {
   this.getHabits()
  }

  getHabits = () => {

    console.log('getHabits() invoked');
    
    const userId = localStorage.getItem("id");
    
    console.log(userId)

    authentication()
      .get(`https://gentle-ridge-32500.herokuapp.com/api/users/${userId}/habits`)
      .then(res => {
        console.log(res.data)
        res.data.habits.sort((a, b) => {
          return a.id - b.id
        })
        this.setState({
          habits: res.data.habits
        });
      })
      .catch(err => console.log("Data Failed", err));
  };

  handleDelete = (e, id) => {
    console.log('working')
    e.preventDefault();

    authentication()
      .delete(`https://gentle-ridge-32500.herokuapp.com/api/habits${id}`)
      .then(() => {
        authentication()
          .get("https://gentle-ridge-32500.herokuapp.com/api/habits")
          .then(res => {
            this.setState({
              habits: res.data
            });
          })
          .catch(err => console.log("Failed", err.response))
      })
  };

  
  render() {
    
    return (

      <div>
        <button onClick={this.logOut}>Log Out</button>
        <div className="GPA">
          <h1 className="Initial">Life GPA 4.0</h1>

          <h2 className="Total">%</h2>
        </div>

      </div>
    );
  }
>>>>>>> de765dea8cd517d5ac6e162919f7c1aefef40490
}

export default HomePage;
      
    
