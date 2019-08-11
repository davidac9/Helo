import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import { setUser } from '../../ducks/reducer'
import {withRouter} from 'react-router-dom'

class Auth extends Component {
    state = {
        usernameInput: '',
        passwordInput: ''
    }
    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    register = () => {
        const {
            usernameInput: username,
            passwordInput: password,
        } = this.state
        axios.post('/auth/register', {username, password }).then(res => {
            const {username, password} = res.data.user
            this.props.setUser({username, password})
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('Username is already in use.')
        })
    }

    login = () => {
        const {
            usernameInput: username,
            passwordInput: password,
        } = this.state
        axios.post('/auth/login', {username, password}).then(res => {
            const {username, profile_image, user_id} = res.data.user
            console.log(res.data.user)
            this.props.setUser({username, profile_image, user_id})
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('Try again.')
        })
    }

    render() {
        return (
            <div className="Auth">
                Auth
                <div className='login-box'>
                    <h3>Login</h3>
                    <input type='text' placeholder="username" onChange={e => this.handleChange(e, 'usernameInput')} />
                    <input type='password' placeholder="password" onChange={e => this.handleChange(e, 'passwordInput')} />
                    <button onClick={this.login} >Login</button>
                    <button onClick={this.register} >Register</button>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { setUser }
)(withRouter(Auth))