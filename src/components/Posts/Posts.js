import React from 'react'
import "./Posts.css"
import Post from './Post/Post'
import { connect } from 'react-redux'
import { setRedditDataDispatch } from '../../redux/actions'

class Posts extends React.Component {
    render() { 
        return (
            <div className="posts d-flex flex-column align-items-center">
                {this.props.posts.map((post) => {
                    return (
                        <Post 
                            upVote={this.props.upVote}
                            downVote={this.props.downVote}
                            key={post.id} 
                            {...post}
                        />
                    )
                })}
            </div>
        )
    }
}

const getPosts = (postProps) => {
    return {
        posts: postProps.redditData.posts
    }
}
 
export default connect(getPosts, setRedditDataDispatch)(Posts)