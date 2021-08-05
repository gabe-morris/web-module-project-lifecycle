import axios from 'axios';
import React, { Component } from 'react';

class Followers extends Component {
    state = {
        followers: null,
    }
    componentDidMount(){
        axios.get(`https://api.github.com/users/gabe-morris/followers`)
        .then(res => {
            console.log(res.data)
            this.setState({
                followers: res.data,
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        const {followers} = this.state
        if (!followers) return <p>loading followers...</p>
        else if (followers.length === 0) return <h3>This user currently has no followers</h3>
        return (
            <div>
             <h2>Followers</h2>
            </div>
        );
    }
}

export default Followers;