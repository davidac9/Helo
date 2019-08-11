import React, {Component} from 'react'
import Post from '../Post/Post'
import axios from 'axios'
import {connect} from 'react-redux'
// import { connect } from 'http2';

class Dashboard extends Component {
    state = {
        searchInput: '',
        myPosts: true,
        posts: []
    }
    handleChange(e) {
        this.setState({
            searchInput: e.target.value
        })
        
    }
    getPosts = () => {
        // const body = {title: this.state.searchInput}
        axios.get(`/api/posts?title=${this.state.searchInput}`).then(posts => 
            
            this.setState({
                posts: posts.data
            })
            )
            .catch(err => (console.log(`can't find posts`)))
    }
    componentDidMount() {
        this.getPosts()
    }
    handleChangeUserPosts() {
        this.setState({
            myPosts: !this.state.myPosts
        })
    }

    render() {
        return (
            <div className="Dashboard">
                <div className="search">
                    <input type="text" placeholder="Search" onChange={e=> this.handleChange(e)} />
                    <button onClick={this.getPosts} >Search</button>
                    <button>Reset</button>
                    <h5>Hide my posts</h5>
                    <input type="checkbox" onChange={() => this.handleChangeUserPosts()} />
                </div>
                <div className="posts">
                    {this.state.myPosts === true ? (this.state.posts.map((el, i) => (
                        <div>
                        <Post
                        key={el.title}
                        title={el.title}
                        image={el.post_image}
                        content={el.content}
                        profile_image={el.profile_image}
                        />    
                        </div>
                    ))): (this.state.posts.filter(el => ( el.user_id !== this.props.user_id)).map((el, i) => (
                        <div>
                        <Post
                        key={el.title}
                        title={el.title}
                        image={el.post_image}
                        content={el.content}
                        profile_image={el.profile_image}
                        />    
                        </div>
                    ))) }
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user_id} = reduxState
    return {user_id}
}

export default connect(mapStateToProps)(Dashboard)