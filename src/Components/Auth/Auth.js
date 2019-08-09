import React, {Component} from 'react'

export default class Auth extends Component {
    state = {
        usernameInput: '',
        passwordInput: ''
    }
    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
        console.log(this.state)
    }
    render() {
        return (
            <div className="Auth">
                Auth
                <div className='login-box'>
                    <h3>Login</h3>
                    <input type='text' placeholder="username" onChange={e => this.handleChange(e, 'usernameInput')} />
                    <input type='password' placeholder="password" onChange={e => this.handleChange(e, 'passwordInput')} />
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}