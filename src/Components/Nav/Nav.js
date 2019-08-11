import React, {Component} from 'react'
import {withRouter , Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
    componentDidMount(){

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
                        <button>Logout</button>
                    </Link>
                    <h4>Welcome,{this.props.username}</h4>
                    <img src={this.props.profile_image} alt="" />
                </div>
                    </>) : null}
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {username, profile_image} = reduxState
    return {username, profile_image}
}

export default connect(mapStateToProps)(withRouter(Nav))