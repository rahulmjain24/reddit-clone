import React from 'react'
import "./Posts.css"
import Post from './Post/Post'
import { connect } from 'react-redux'
import { setRedditDataDispatch } from '../../redux/actions'

class Posts extends React.Component {

    filterPosts = (posts, query) => {
        posts.filter((post) => {
            return post.subReddit.toLowerCase().includes(query.toLowerCase())
        })
    }


    render() { 
        console.log(this.props)
        const { query ,posts } = this.props
        return (
            <div className="posts d-flex flex-column align-items-center">
                {
                    query === '' ?
                    posts.map((post) => {
                        return (
                            <Post 
                                upVote={this.props.upVote}
                                downVote={this.props.downVote}
                                key={post.id} 
                                {...post}
                            />
                        )
                    })
                    :
                    posts.filter((post) => {
                        return post.subReddit.toLowerCase().includes(query.toLowerCase())
                    }).length === 0 
                    ? 
                    <h3>No results found!!!</h3>
                    :
                    posts.filter((post) => {
                        return post.subReddit.toLowerCase().includes(query.toLowerCase())
                    })
                    .map((post) => {
                        return (
                            <Post 
                                upVote={this.props.upVote}
                                downVote={this.props.downVote}
                                key={post.id} 
                                {...post}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const getPosts = (postProps) => {
    return {
        ...postProps.redditData  
    }
}
 
export default connect(getPosts, setRedditDataDispatch)(Posts)