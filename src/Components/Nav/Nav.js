import React, {Component} from 'react'
import {withRouter , Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { setUser, logoutUser } from '../../ducks/reducer'

class Nav extends Component {
    componentDidMount(){
        axios.get('/api/auth/me').then(res => {
            const {username, profile_image, user_id} = res.data.user
            this.props.setUser({username, profile_image, user_id})
        })
    }
    logout = () => {
        axios.post('/api/auth/logout').then(() => {
            this.props.logoutUser()
        })
    }
    render() {
        return (
            
            <div>
                {this.props.location.pathname !== '/' ? (<>
                <div className='Nav'>
                    <Link to="/dashboard">
                        <button>Home</button>
                    </Link>
                    <Link to='/new'>
                        <button>New Post</button>
                    </Link>
                    <Link to='/'>
                        <button onClick={this.logout}>Logout</button>
                    </Link>
                    <h4>Welcome, {this.props.username}</h4>
                    <img src={this.props.profile_image} alt="" />
                </div>
                    </>) : null}
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {username, profile_image, user_id} = reduxState
    return {username, profile_image, user_id}
}

export default connect(mapStateToProps, {setUser, logoutUser})(withRouter(Nav))