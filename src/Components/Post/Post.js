import React, {Component} from 'react'
import './Post.css'

export default class Post extends Component {
    render() {
        return (
            <div className="Post">
                <div className="post-container">
                    <header>
                        <h4>
                        {this.props.title}
                        </h4>
                    <img className="post-profile-pic" src={this.props.profile_image} alt=''/>
                    </header>
                    <div className="content-container">
                    <img className="post-image" src={this.props.image} alt=''/>
                <span>{this.props.content}</span></div>
            </div>
            </div>
        )
    }
}