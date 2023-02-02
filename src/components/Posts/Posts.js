import React from 'react'
import "./Posts.css"
import Post from './Post/Post'
import { connect } from 'react-redux'
import { setRedditDataDispatch, setUserDataDispatch } from '../../redux/actions'

class Posts extends React.Component {

    filterPosts = (posts, query) => {
        posts.filter((post) => {
            return post.subReddit.toLowerCase().includes(query.toLowerCase())
        })
    }


    render() { 
        const { query ,posts, userData, manageForm, upVote, downVote } = this.props
        return (
            <div className="posts d-flex flex-column align-items-center">
                {
                    query === '' ?
                    posts.map((post) => {
                        return (
                            <Post 
                                voteValue={userData.data.voteValue}
                                upVote={userData.data.isLoggedIn ? upVote : manageForm}
                                downVote={userData.data.isLoggedIn ? downVote : manageForm}
                                onEdit={
                                    {logged: userData.data.isLoggedIn,
                                    manageForm}
                                }
                                setData={(id, data) => {
                                    this.props.updateData(id,data)
                                }}
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
                                voteValue={userData.data.voteValue}
                                upVote={userData.data.isLoggedIn ? upVote : manageForm}
                                downVote={userData.data.isLoggedIn ? downVote : manageForm}
                                onEdit={
                                    {logged: userData.data.isLoggedIn,
                                    manageForm}
                                }
                                setData={(id, data) => {
                                    this.props.updateData(id,data)
                                }}
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
        ...postProps.redditData,
        userData: postProps.userData
    }
}
 
export default connect(
    getPosts, 
    {
        ...setRedditDataDispatch,
        ...setUserDataDispatch
    }
)(Posts)