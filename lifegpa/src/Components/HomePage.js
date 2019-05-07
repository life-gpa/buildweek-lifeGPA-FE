import React from "react";
import authentication from "../Authentication/authentication";

import HabitList from './HabitList';
import Percentages from './Percentages';
import GPA from './GPA';

import { Button } from 'reactstrap';



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

  getHabits = () => {
    authentication()
      .get(`https://gentle-ridge-32500.herokuapp.com/api/habits/`)
      .then(res => {
        this.setState({
          habits: res.data,
          completed: true
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

        {this.state.completed ?
            <div className='homePageContent'>
                <GPA apiList={this.state.habits} />
                <HabitList apiList={this.state.habits}/>
                <Percentages apiList={this.state.habits} />
            </div>
        :
            <p>Loading...</p>}
        <Button className='logout' onClick={this.logOut}>Log Out</Button>

      </div>
    );
  }
}

export default HomePage;
