import React from "react";
import authentication from "../Authentication/authentication";

import HabitList from './HabitList';


class HomePage extends React.Component {
  state = {
    habits: [],
    completed: false,
    editHappening: false,
    editId: null
  };

  logOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.props.history.push("/login");
  };

  componentDidMount() {
   this.getHabits()
  }

<<<<<<< HEAD
  getHabits = () => {
    const userId = localStorage.getItem("id");
=======
  getHabits = () => {    
    const userId = localStorage.getItem(`user`);
    
>>>>>>> ca99c4bf9a30761b86245a5fc098d487f7cdfa6b

    authentication()
      .get(`https://gentle-ridge-32500.herokuapp.com/api/habits/`)
      .then(res => {
        console.log(res)
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
      .delete(`https://gentle-ridge-32500.herokuapp.com/api/habits/`)
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

        <HabitList apiList={[]}/>

      </div>
    );
  }
}

export default HomePage;
      
    
