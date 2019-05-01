import React from "react";
import authentication from "../Authentication/authentication";


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
    let lifeCount = 0;

    this.state.habits.map(habit => {
      let lastCompleteDate = new Date(habit.created_at);
      lastCompleteDate.setHours(0,0,0,0)
      console.log("lastCompleteDate:", lastCompleteDate)

      let today = new Date();
      today.setHours(0,0,0,0)
      console.log("today:", today)

      let daysSinceHabitStart;

      if (today - habit.created_at > 0) {
        daysSinceHabitStart = (today - habit.created_at) / 1000 / 60 / 60 / 24
      } else {
        daysSinceHabitStart = 1
      }
      console.log("daysSinceHabitStart:", daysSinceHabitStart)

      const habitGPA = habit.count / daysSinceHabitStart
      console.log("habitGPA:", habitGPA)

      lifeCount += habitGPA
    });
    let lifeGPA = (lifeCount / this.state.habits.length) * 100;


    
    return (

      <div>
        <button onClick={this.logOut}>Log Out</button>
        <div className="GPA">
          <h1 className="Initial">Life GPA 4.0</h1>

          <h2 className="Total">{lifeGPA}%</h2>
        </div>

      </div>
    );
  }
}

export default HomePage;
      
    
