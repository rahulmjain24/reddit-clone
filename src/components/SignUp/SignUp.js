import React from 'react'
import { connect } from 'react-redux'
import "./SignUp.css"
import BackContainer from '../BackContainer/BackContainer'
import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import validator from 'validator'
import { setUserDataDispatch } from '../../redux/actions'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: {value: '', isValid: false, isModified: false},
            username: {value: '', isValid: false, isModified: false},
            password: {value: '', isValid: false, isModified: false},
            isClicked: false,
            showSuceess: false
        }
    }

    handleIsClicked = () => {
        this.setState((prevState) => {
            return {
                isClicked: !prevState.isClicked
            }
        })
    }

    handleEmail = (value) => {
        if(validator.isEmail(value)) {
            this.setState({email : {value: value, isValid: true, isModified: true}})
        } else {
            this.setState({email : {value: value, isValid: false, isModified: true}})
        }
    }

    handleUserName = (value) => {
        if(!validator.isEmpty(value, {
            ignore_whitespace: true
        }) && value.length >= 3 && value.length <= 20) {
            this.setState({username : {value: value, isValid: true, isModified: true}})
        } else {
            this.setState({username : {value: value, isValid: false, isModified: true}})
        }
    }

    handlePassword = (value) => {
        if(validator.isStrongPassword(value, {
            minLength: 8, 
            minLowercase: 0, 
            minUppercase: 0, 
            minNumbers: 0, 
            minSymbols: 0
        })) {
            this.setState({password : {value: value, isValid: true, isModified: true}})
        } else {
            this.setState({password : {value: value, isValid: false, isModified: true}})
        }
    }

    render() {
        return (
            <BackContainer>
                <div className="form-container bg-white position-fixed d-flex justify-content-center align-items-center">
                    {
                        this.state.isClicked && 
                        <div onClick={this.handleIsClicked} className="go-back position-absolute">
                            <img src="svg/back.svg" alt="" />
                        </div>
                    }
                    <div onClick={this.props.manageForm} className="close position-absolute">
                        <img src="svg/cross.svg" alt="" />
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }} className="main-container d-flex flex-column ">
                        <h3 className="h3">{this.state.isClicked? 'Create your username and password' : 'Sign up'}</h3>
                        <p className="agree">
                            {
                                this.state.isClicked ? 
                                <>Reddit is anonymous, so your username is what you’ll go by here. Choose wisely—because once you get a name, you can’t change it.</>
                                :
                                <>By continuing, you are setting up a Reddit account and agree to our <span className="blue-text">User Agreement</span> and <span className="blue-text">Privacy Policy</span>.</>
                            }
                        </p>
                        {
                            this.state.isClicked ?
                            <>
                                <InputField 
                                    type='text'
                                    label="Username"
                                    value={this.handleUserName}
                                    className={!this.state.username.isValid && this.state.username.isModified ? 'orange-border' : ''}
                                    labelClass={this.state.username.value !== '' ? 'label-up' : ''}
                                    defaultValue={this.state.username.value}
                                />
                                {!this.state.username.isValid && this.state.username.isModified && <span className='orange-text'>Username must be between 3 and 20 characters</span>}
                                <InputField 
                                    type='password'
                                    label="Password"
                                    value={this.handlePassword}
                                    className={!this.state.password.isValid && this.state.password.isModified ? 'orange-border' : ''}
                                    labelClass={this.state.password.value !== '' ? 'label-up' : ''}
                                    defaultValue={this.state.password.value}
                                />
                                {!this.state.password.isValid && this.state.password.isModified && <span className='orange-text'>The password must be atleast 8 characters long</span>}
                            </>
                            :
                            <>
                                {/* <Button>
                                    <span className="icon d-block"><img src="svg/google.svg" alt="" /></span>
                                    <span className="text">Continue with Google</span>
                                </Button>
                                <Button>
                                    <span className="icon d-block"><img src="svg/apple.svg" alt="" /></span>
                                    <span className="text">Continue with Apple</span>
                                </Button>
                                <div className="divider d-flex align-items-center justify-content-between">
                                    <span className="divider-line"></span>
                                    <span className="divider-text">OR</span>
                                    <span className="divider-line"></span>
                                </div> */}
                                <InputField 
                                    type="email"
                                    label="Email" 
                                    value={this.handleEmail}
                                    className={!this.state.email.isValid && this.state.email.isModified ? 'orange-border' : ''}
                                    labelClass={this.state.email.value !== '' ? 'label-up' : ''}
                                    defaultValue={this.state.email.value}
                                />
                                {!this.state.email.isValid && this.state.email.isModified && <span className='orange-text'>Please enter a valid email</span>}
                            </>
                        }
                        {
                            this.state.isClicked ? 
                            <Button click={() => {
                                this.props.setData({
                                    email: this.state.email.value,
                                    username: this.state.username.value,
                                    password: this.state.password.value
                                })
                                this.setState({showSuceess : true}, () => {
                                    setTimeout(() => {
                                        this.props.manageForm()
                                    }, 1 * 1000)
                                })
                            }} disabled={(!this.state.username.isValid || !this.state.password.isValid)} className="orange">Continue</Button>
                            :
                            <>
                                <Button click={this.handleIsClicked} disabled={!this.state.email.isValid} className="orange">Continue</Button>
                                <span>Already a redditor? <a href="/">Log In</a></span>
                            </>
                        }
                        {this.state.showSuceess && <span className="blue-text">The account has been created successfully</span>}
                    </form>
                </div>
            </BackContainer>
        )
    }
}

const getUserData = (userProps) => {
    return {
        userData: userProps.userData
    }
}

export default connect(getUserData, setUserDataDispatch)(SignUp)