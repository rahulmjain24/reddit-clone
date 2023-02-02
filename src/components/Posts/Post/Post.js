import React from "react"
import "./Post.css"
import moment from "moment"
import Edit from "./Edit"
import validator from "validator"
import { connect } from "react-redux"
import { setRedditDataDispatch, setUserDataDispatch } from "../../../redux/actions"

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: {value: '', isValid: true},
            post: {value: '', isValid: true},
            image: {value: '', isValid: true},
            isBeingEdited: false,
            upvote: false, 
            downvote: false 
        }
    }

    isValid = () => {
        return (
            this.state.title.isValid && 
            this.state.post.isValid && 
            this.state.image.isValid
        )
    }

    handleUpvote = () => {
        let vote = 0
        if(this.state.downvote) {
            vote++
        }
        if(this.state.upvote) {
            this.setState({ upvote: false})
            vote--
        } else {
            this.setState( {upvote : true, downvote: false} )
            vote++
        }
        this.props.upVote(this.props.id, vote)
    }

    handleDownvote = () => {
        let vote = 0
        if(this.state.upvote) {
            vote--
        }
        if(this.state.downvote) {
            this.setState({ downvote: false})
            vote++
        } else {
            this.setState( {upvote : false, downvote: true} )
            vote--
        }
        this.props.downVote(this.props.id, vote)
    }

    componentDidUpdate() {
        if(!this.props.userData.data.isLoggedIn && this.state.isBeingEdited) {
            this.setState({ 
                title: {value: '', isValid: true},
                post: {value: '', isValid: true},
                image: {value: '', isValid: true},
                isBeingEdited: false 
            })
        }
    }
 
    render() {
        // console.log(this.props)
        const time = moment.duration(moment().diff(this.props.time))
        return (
            <div className="post d-flex flex-start">
                <div className="vote d-flex flex-column align-items-center">
                    <div
                        onClick={() => {
                            if(this.props.userData.data.isLoggedIn) {
                                this.handleUpvote()
                            } else {
                                this.props.manageForm()
                            }
                        }}
                        className="arrow"
                    >
                        <i className={`fa-solid fa-chevron-up fa-xl ${(this.state.upvote && this.props.userData.data.isLoggedIn) && 'orange-text'}`}></i>
                    </div>
                    <span className="vote-count">{this.props.votes}</span>
                    <div
                        onClick={() => {
                            if(this.props.userData.data.isLoggedIn) {
                                this.handleDownvote()
                            } else {
                                this.props.manageForm()
                            }
                        }}
                        className="arrow"
                    >
                        <i className={`fa-solid fa-chevron-down fa-xl ${(this.state.downvote && this.props.userData.data.isLoggedIn) && 'orange-text'}`}></i>
                    </div>
                </div>
                <div className="post-data flex-grow-1 d-flex flex-column">
                    <div className="meta-data d-flex">
                        <div className="r-image">
                            <img src={this.props.rImage} alt="" />
                        </div>
                        <div className="r-reddit"><b>r/{this.props.subReddit}</b></div>
                        <div className="r-user">Posted by u/{this.props.user}</div>
                        <div className="r-time">
                            {
                                Math.floor(time.asHours()) <= 24 ?
                                    Math.floor(time.asHours()) + ' hours '
                                    :
                                    Math.floor(time.asDays()) <= 30 ?
                                        Math.floor(time.asDays()) + ' days '
                                        :
                                        Math.floor(time.asMonths()) <= 12 ?
                                            Math.floor(time.asMonths()) + ' months '
                                            :
                                            Math.floor(time.asYears()) + ' years '
                            }
                            ago
                        </div>
                    </div>
                    {
                        this.state.isBeingEdited && this.props.userData.data.isLoggedIn ? 
                        <>
                            <h4 className="title">
                                <Edit 
                                    label='Title :'
                                    htmlFor={this.props.id + 'title'}
                                    rows='3'
                                    defaultValue={this.props.title}
                                    change={(e) => {
                                        if(validator.isEmpty(e.target.value, {
                                            ignore_whitespace: true
                                        })) {
                                            this.setState({ title: {value: '', isValid: false}})
                                        } else {
                                            this.setState({ title: {value: e.target.value.trim(), isValid: true}})
                                        }
                                    }} 
                                />
                                {!this.state.title.isValid && <span className='red-text'>Title can't be empty</span>}
                            </h4>
                            {
                                this.props.image ?
                                <>
                                <Edit 
                                    label='Image Url :'
                                    htmlFor={this.props.id + 'image'}
                                    rows='2'
                                    defaultValue={this.props.image}
                                    change={(e) => {
                                        if(validator.isEmpty(e.target.value, {
                                            ignore_whitespace: true
                                        })) {
                                            this.setState({ image: {value: '', isValid: false}})
                                        } else {
                                            this.setState({ image: {value: e.target.value.trim(), isValid: true}})
                                        }
                                    }}
                                />
                                {!this.state.image.isValid && <span className='red-text'>Image URL can't be empty</span>}
                                </>
                                :
                                <div className="extra-data">
                                    <Edit 
                                        label='Info :'
                                        htmlFor={this.props.id + 'post'}
                                        rows='7'
                                        defaultValue={this.props.post}
                                        change={(e) => {
                                            if(validator.isEmpty(e.target.value, {
                                                ignore_whitespace: true
                                            })) {
                                                this.setState({ post: {value: '', isValid: false}})
                                            } else {
                                                this.setState({ post: {value: e.target.value.trim(), isValid: true}})
                                            }
                                        }}
                                    />
                                    {!this.state.post.isValid && <span className='red-text'>Info can't be empty</span>}
                                </div>
                            }
                        </>
                        :
                        <>
                            <h4 className="title">{this.props.title}</h4>
                            {
                                this.props.image ?
                                <img className="post-image align-self-center" src={this.props.image} alt="Post" />
                                :
                                <div className="extra-data">{this.props.post}</div>
                            }
                        </>
                    }
                    
                    <div className="post-footer d-flex align-items-center">
                        <div className="comments on-edit">
                            <i className="fa-regular fa-message fa-xl footer-icon"></i>
                            {this.props.comments} Comments
                        </div>
                        <div className="share on-edit">
                            <i className="fa-solid fa-share fa-xl footer-icon"></i>
                            Share
                        </div>
                        <button 
                            disabled={
                                this.state.isBeingEdited && this.props.userData.data.isLoggedIn ?
                                !this.isValid()
                                :
                                false
                            }
                            className="on-edit" 
                            onClick={() => {
                                if(this.props.userData.data.isLoggedIn) {
                                    let editedObj = {}
                                    this.setState((prevState) => {
                                        return {
                                            isBeingEdited: !prevState.isBeingEdited
                                        }
                                    })
                                    const {title, post, image} = this.state
                                    if(title.value !== '' && title.isValid) {
                                        editedObj['title'] = title.value
                                    }
                                    if(post.value !== '' && post.isValid) {
                                        editedObj['post'] = post.value
                                    }
                                    if(image.value !== '' && image.isValid) {
                                        editedObj['image'] = image.value
                                    }
                                    this.props.updateData(this.props.id, editedObj)
                                } else {
                                    this.props.manageForm()
                                }
                            }}
                        >
                            <i className="fa-solid fa-ellipsis fa-xl footer-icon"></i>
                            {this.state.isBeingEdited && this.props.userData.data.isLoggedIn ? 'Save' : 'Edit'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const getUserData = (userProps) => {
    return {
        userData: userProps.userData
    }
}

export default connect(getUserData, {
    ...setRedditDataDispatch,
    ...setUserDataDispatch
})(Post)