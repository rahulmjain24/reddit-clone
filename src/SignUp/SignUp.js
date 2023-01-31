import React from 'react'
import "./SignUp.css"
import BackContainer from '../BackContainer/BackContainer'
import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import validator from 'validator'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: {value: '', isValid: false, isModified: false},
            username: {value: '', isValid: false, isModified: false},
            passoword: {value: '', isValid: false, isModified: false},
            isClicked: false
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
            this.setState({passoword : {value: value, isValid: true, isModified: true}})
        } else {
            this.setState({passoword : {value: value, isValid: false, isModified: true}})
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
                    <div className="close position-absolute">
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
                                <>By continuing, you are setting up a Reddit account and agree to our <span className="blue">User Agreement</span> and <span className="blue">Privacy Policy</span>.</>
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
                                    className={!this.state.passoword.isValid && this.state.passoword.isModified ? 'orange-border' : ''}
                                    labelClass={this.state.passoword.value !== '' ? 'label-up' : ''}
                                    defaultValue={this.state.passoword.value}
                                />
                                {!this.state.passoword.isValid && this.state.passoword.isModified && <span className='orange-text'>The password must be atleast 8 characters long</span>}
                            </>
                            :
                            <>
                                <Button>
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
                                </div>
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
                            <Button click={() => {}} disabled={(!this.state.username.isValid || !this.state.passoword.isValid)} className="orange">Continue</Button>
                            :
                            <>
                                <Button click={this.handleIsClicked} disabled={!this.state.email.isValid} className="orange">Continue</Button>
                                <span>Already a redditor? <a href="/">Log In</a></span>
                            </>
                        }
                    </form>
                </div>
            </BackContainer>
        )
    }
}

export default SignUp