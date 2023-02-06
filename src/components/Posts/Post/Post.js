import React from "react"
import "./Post.css"
import moment from "moment"
import Edit from "./Edit"
import validator from "validator"
import { connect } from "react-redux"
import { setRedditDataDispatch, setUserDataDispatch } from "../../../redux/actions"
import axios from "axios"

class Post extends React.Component {
    constructor(props) {
        super(props)

        this.URL = 'https://reddit-gyae.onrender.com/redditdata/'
        // this.URL = 'http://localhost:8080/redditdata/'
        this.API_STATES = {
            LOADING:'loading',
            LOADED:'loaded',
            ERROR:'error',
            NONE:'none'
        }


        this.state = {
            title: {value: '', isValid: true},
            post: {value: '', isValid: true},
            image: {value: '', isValid: true},
            isBeingEdited: false,
            upvote: false, 
            downvote: false,
            update: this.API_STATES.NONE
        }
    }

    isValid = () => {
        return (
            this.state.title.isValid && 
            this.state.post.isValid && 
            this.state.image.isValid
        )
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
        const time = moment.duration(moment().diff(this.props.postData.time))
        // console.log(this.props)
        return (
            <div className="post d-flex flex-start">
                <div className="vote d-flex flex-column align-items-center">
                    <div
                        onClick={() => {
                            if(this.props.userData.data.isLoggedIn) {
                                if(this.props.userData.data.upVoted.includes(this.props.postData.id)) {
                                    this.setState({
                                        update: this.API_STATES.LOADING
                                    }, 
                                    () => {
                                        axios.patch(this.URL + this.props.postData.id,
                                            {
                                                votes: this.props.postData.votes - 1
                                            }
                                        )
                                        .then((res) => {
                                            this.props.upVote(this.props.postData.id, -1)                                    
                                            console.log(res.data)
                                            this.setState({
                                                update: this.API_STATES.LOADED
                                            })
                                        })
                                        .catch((err) => {
                                            console.error(err)
                                            this.setState({
                                                update: this.API_STATES.ERROR
                                            })
                                        })
                                    })
                                } else {
                                    if(this.props.userData.data.downVoted.includes(this.props.postData.id)) {
                                        this.setState({
                                            update: this.API_STATES.LOADING
                                        }, 
                                        () => {
                                            axios.patch(this.URL + this.props.postData.id,
                                                {
                                                    votes: this.props.postData.votes + 2
                                                }
                                            )
                                            .then((res) => {
                                                this.props.upVote(this.props.postData.id, 2)                                    
                                                console.log(res.data)
                                                this.setState({
                                                    update: this.API_STATES.LOADED
                                                })
                                            })
                                            .catch((err) => {
                                                console.error(err)
                                                this.setState({
                                                    update: this.API_STATES.ERROR
                                                })
                                            })
                                        })
                                    } else {
                                        this.setState({
                                            update: this.API_STATES.LOADING
                                        }, 
                                        () => {
                                            axios.patch(this.URL + this.props.postData.id,
                                                {
                                                    votes: this.props.postData.votes + 1
                                                }
                                            )
                                            .then((res) => {
                                                this.props.upVote(this.props.postData.id, 1)                                    
                                                console.log(res.data)
                                                this.setState({
                                                    update: this.API_STATES.LOADED
                                                })
                                            })
                                            .catch((err) => {
                                                console.error(err)
                                                this.setState({
                                                    update: this.API_STATES.ERROR
                                                })
                                            })
                                        })
                                    }
                                }
                            } else {
                                this.props.manageForm()
                            }
                        }}
                        className="arrow"
                    >
                        <i className={`fa-solid fa-chevron-up fa-xl ${(this.props.userData.data.upVoted.includes(this.props.postData.id) && this.props.userData.data.isLoggedIn) && 'orange-text'}`}></i>
                    </div>
                    <span className="vote-count">{this.props.postData.votes}</span>
                    <div
                        onClick={() => {
                            if(this.props.userData.data.isLoggedIn) {
                                if(this.props.userData.data.downVoted.includes(this.props.postData.id)) {
                                    this.setState({
                                        update: this.API_STATES.LOADING
                                    }, 
                                    () => {
                                        axios.patch(this.URL + this.props.postData.id,
                                            {
                                                votes: this.props.postData.votes + 1
                                            }
                                        )
                                        .then((res) => {
                                            this.props.downVote(this.props.postData.id, 1)                                    
                                            console.log(res.data)
                                            this.setState({
                                                update: this.API_STATES.LOADED
                                            })
                                        })
                                        .catch((err) => {
                                            console.error(err)
                                            this.setState({
                                                update: this.API_STATES.ERROR
                                            })
                                        })
                                    })
                                                       
                                } else {
                                    if(this.props.userData.data.upVoted.includes(this.props.postData.id)) {
                                        this.setState({
                                            update: this.API_STATES.LOADING
                                        }, 
                                        () => {
                                            axios.patch(this.URL + this.props.postData.id,
                                                {
                                                    votes: this.props.postData.votes - 2
                                                }
                                            )
                                            .then((res) => {
                                                this.props.downVote(this.props.postData.id, -2)                                    
                                                console.log(res.data)
                                                this.setState({
                                                    update: this.API_STATES.LOADED
                                                })
                                            })
                                            .catch((err) => {
                                                console.error(err)
                                                this.setState({
                                                    update: this.API_STATES.ERROR
                                                })
                                            })
                                        })
                                    } else {
                                        this.setState({
                                            update: this.API_STATES.LOADING
                                        }, 
                                        () => {
                                            axios.patch(this.URL + this.props.postData.id,
                                                {
                                                    votes: this.props.postData.votes - 1
                                                }
                                            )
                                            .then((res) => {
                                                this.props.downVote(this.props.postData.id, -1)                                    
                                                console.log(res.data)
                                                this.setState({
                                                    update: this.API_STATES.LOADED
                                                })
                                            })
                                            .catch((err) => {
                                                console.error(err)
                                                this.setState({
                                                    update: this.API_STATES.ERROR
                                                })
                                            })
                                        })
                                    }
                                }
                            } else {
                                this.props.manageForm()
                            }
                        }}
                        className="arrow"
                    >
                        <i className={`fa-solid fa-chevron-down fa-xl ${(this.props.userData.data.downVoted.includes(this.props.postData.id) && this.props.userData.data.isLoggedIn) && 'orange-text'}`}></i>
                    </div>
                </div>
                <div className="post-data flex-grow-1 d-flex flex-column">
                    <div className="meta-data d-flex">
                        <div className="r-image">
                            <img src={this.props.postData.r_image} alt="" />
                        </div>
                        <div className="r-reddit"><b>r/{this.props.postData.sub_reddit}</b></div>
                        <div className="r-user">Posted by u/{this.props.postData.user_name}</div>
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
                                    htmlFor={this.props.postData.id + 'title'}
                                    rows='3'
                                    defaultValue={this.props.postData.title}
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
                                this.props.postData.image ?
                                <>
                                <Edit 
                                    label='Image Url :'
                                    htmlFor={this.props.postData.id + 'image'}
                                    rows='2'
                                    defaultValue={this.props.postData.image}
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
                                        htmlFor={this.props.postData.id + 'post'}
                                        rows='7'
                                        defaultValue={this.props.postData.post}
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
                            <h4 className="title">{this.props.postData.title}</h4>
                            {
                                this.props.postData.image ?
                                <img className="post-image align-self-center" src={this.props.postData.image} alt="Post" />
                                :
                                <div className="extra-data">{this.props.postData.post}</div>
                            }
                        </>
                    }
                    
                    <div className="post-footer d-flex align-items-center">
                        <div className="comments on-edit">
                            <i className="fa-regular fa-message fa-xl footer-icon"></i>
                            {this.props.postData.comments} Comments
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
                                    }, 
                                    () => {
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
                                        if(!this.state.isBeingEdited) {
                                            this.setState({
                                                update: this.API_STATES.LOADING
                                            }, 
                                            () => {
                                                axios.patch(this.URL + this.props.postData.id,
                                                    {
                                                        ...editedObj
                                                    }
                                                )
                                                .then((res) => {
                                                    this.props.updateData(this.props.postData.id, editedObj)
                                                    console.log(res.data)
                                                    this.setState({update: this.API_STATES.LOADED})
                                                })
                                                .catch((err) => {
                                                    console.error(err)
                                                    this.setState({update: this.API_STATES.ERROR})
                                                })
                                            }
                                            )
                                        }
                                    })
                                } else {
                                    this.props.manageForm()
                                }
                            }}
                        >
                            <i className="fa-solid fa-ellipsis fa-xl footer-icon"></i>
                            {this.state.isBeingEdited && this.props.userData.data.isLoggedIn ? 'Save' : 'Edit'}
                        </button>
                        
                        {
                            this.state.update === this.API_STATES.LOADING &&  
                            <div className="spinner-border spinner-border-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        {this.state.update === this.API_STATES.LOADED &&  <span className="text-success">Updated Successfully</span>}
                        {this.state.update === this.API_STATES.ERROR &&  <span className="text-danger">Updates were unsuccessful, please try again!!</span>}
                    </div>
                </div>
            </div>
        )
    }
}

const getUserData = (userProps) => {
    return {
        userData: userProps.userData,

    }
}

export default connect(getUserData, {
    ...setRedditDataDispatch,
    ...setUserDataDispatch
})(Post)