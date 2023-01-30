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
            email: {value: '', isValid: false, isModified: false}
        }
    }

    handleValue = (value) => {
        if(validator.isEmail(value)) {
            this.setState({email : {value: value, isValid: true, isModified: true}})
        } else {
            this.setState({email : {value: value, isValid: false, isModified: true}})
        }
    }

    render() {
        return (
            <BackContainer>
                <div className="form-container bg-white position-fixed d-flex justify-content-center align-items-center">
                    <div className="close position-absolute">
                        <img src="cross.svg" alt="" />
                    </div>
                    <form className="main-container d-flex flex-column ">
                        <h3 className="h3">Sign up</h3>
                        <p className="agree">By continuing, you are setting up a Reddit account and agree to our <span className="blue">User Agreement</span> and <span className="blue">Privacy Policy</span>.</p>
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
                            label="Email" 
                            value={this.handleValue}
                            className={!this.state.email.isValid && this.state.email.isModified ? 'orange-border' : 'label-up'}
                            labelClass={this.state.email.value !== '' ? 'label-up' : ''}
                        />
                        {!this.state.email.isValid && this.state.email.isModified && <span className='orange-text'>Please enter a valid email</span>}
                        <Button disabled={!this.state.email.isValid} className="orange">Continue</Button>
                        <span>Already a redditor? <a href="/">Log In</a></span>
                    </form>
                </div>
            </BackContainer>
        )
    }
}

export default SignUp