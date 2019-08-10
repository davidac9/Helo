import React, {Component} from 'react'
import Post from '../Post/Post'
import axios from 'axios'
// import {Connect} from 'react-redux'
// import { connect } from 'http2';

export default class Dashboard extends Component {
    state = {
        searchInput: '',
        myPosts: true,
        posts: []
    }
    handleChange(e) {
        this.setState({
            searchInput: e.target.value
        })
        console.log(this.state.searchInput)
    }
    getPosts = () => {
        // const body = {title: this.state.searchInput}
        axios.get(`/api/posts?title=${this.state.searchInput}`).then(posts => 
            this.setState({
                posts: posts.data
            })
            )
    }
    componentDidMount() {
        this.getPosts()
    }

    render() {
        return (
            <div className="Dashboard">
                <div className="search">
                    <input type="text" placeholder="Search" onChange={e=> this.handleChange(e)} />
                    <button onClick={this.getPosts} >Search</button>
                    <button>Reset</button>
                    <h5>My posts</h5>
                    <input type="checkbox" />
                </div>
                <div className="posts">
                    {this.state.posts.map(el => (
                        <div>
                        <Post
                        
                        />    
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

// function mapStateToProps(reduxState)

// export default connect(mapStateToProps)(withRouter(Nav))