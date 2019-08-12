import React, {Component} from 'react'
import './Post.css'
import axios from 'axios';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


class Post extends Component {
    state = {
        posts: []
    }
    getPost =() => {
        axios.get(`/api/posts?post_id=${this.props.location.pathname.toString().replace(/\D/g,'')}`).then(post =>
            // console.log(post)
            this.setState({
                posts: post.data
            })
            
            )
            .catch(err => (console.log(`can't find this post`)))
    }
    componentDidMount() {
        // console.log(this.state.post)
        this.getPost()
    }
    render() {
        
        return (
            <div className="Post">
                <div className="post-container">
                    {this.state.posts.map(el => (

                        (<><header>
                        <h4>
                        {el.title}
                        </h4>
                    <img className="post-profile-pic" src={el.profile_image} alt=''/>
                    </header>
                    <div className="content-container">
                    <img className="post-image" src={el.post_image} alt=''/>
                <span>{el.content}</span></div>
                    </> )))}
            </div>
            </div>
        )
    }
}

export default connect()(withRouter(Post))