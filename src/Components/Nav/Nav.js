import React, {Component} from 'react'
import {withRouter , Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
    componentDidMount(){

        console.log(this.props.location)
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
                </div>
                    </>) : null}
            </div>
        )
    }
}

export default connect()(withRouter(Nav))