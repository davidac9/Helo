import React, {Component} from 'react'
import Post from '../Post/Post'

export default class Dashboard extends Component {
    state = {
        searchInput: '',
        myPosts: true,
        posts: ['waw', 'caw']
    }
    render() {
        return (
            <div className="Dashboard">
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <button>Search</button>
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