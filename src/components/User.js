import axios from 'axios';
import React, { Component } from 'react';

class User extends Component {
    state = {
        user: null
    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/gabe-morris`)
        .then(res => {
            console.log(res.data)
            this.setState({
                user: res.data,
            })
        })
        .catch(err => console.log(err))
        
    }
    render() {
        const {user} = this.state
        if(!user) return <p>Loading user data</p>
        return (
            <div>
            <div className='user-img'>
            <img src={user.avatar_url} alt={user.name}/>
            </div>
            <div className='info'>
            <h3>Username: {user.login}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Location: {user.location}</h3>
            <h3>Repos: {user.public_repos}</h3>
            </div>
            </div>
        );
    }
}

export default User;