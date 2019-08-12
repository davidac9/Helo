import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import {Link} from 'react-router-dom'


class Form extends Component {
    state = {
        content: '',
        post_image: '',
        title: '',
    }
    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }
    addPost = ()=> {
        const {content, post_image, title} = this.state
        const {user_id} = this.props
        console.log(user_id)
        if (user_id === 0) {
            alert('you need to log in to post!')
        }
        else {
        axios.post('/api/new/posts', {user_id, content, post_image, title}).then(res => {

        })
        .catch(err => {alert('something went wrong try again')})}
    }
    render() {
        return (
            <div className="From">
                <h3>
                    Create Post
                </h3>
                <div className="post-input-container">
                    <input type="text" onChange={e => this.handleChange(e, 'title')} placeholder="title"/>
                    <input type="text" onChange={e => this.handleChange(e, 'post_image')} placeholder="image URL"/>
                    <input type="text" onChange={e => this.handleChange(e, 'content')} placeholder="your post here!"/>
                </div>
                <h3>Preview</h3>
                <img src={this.state.post_image} alt=""/>
                <Link to="/dashboard">
                    <button onClick={this.addPost}>Post</button>
                </Link>

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user_id} = reduxState
    return {user_id}
}

export default connect(mapStateToProps)(Form)