import React from 'react';
import { Link } from 'react-router-dom';

import HabitList from './HabitList';


class HomePage extends React.Component {
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
}

export { HomePage };