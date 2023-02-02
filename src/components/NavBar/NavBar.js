import React from 'react'
import "./NavBar.css"
import AuthButton from '../Button/AuthButton';
import SearcBar from './SearchBar';
import { connect } from 'react-redux';
import { setUserDataDispatch, setRedditDataDispatch } from '../../redux/actions';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query:''
        }
    }


    render() { 
        return (
            <header className="header position-fixed bg-white d-flex align-items-center">
                <div className="navbar d-flex flex-nowrap">
                    <div className="nav-section d-flex flex-grow-1 align-items-center">
                        <div className="logo d-flex align-items-baseline">
                            <div className="logo-icon"><img src="svg/icon.svg" alt="" /></div>
                            <div className="logo-name"><img src="svg/reddit.svg" alt="" /></div>
                        </div>
                        {/* <div className="home">
                            <div className="home-icon"><img src="svg/home.svg" alt="" /></div>
                        </div> */}
                        <SearcBar 
                            change={(query) => {
                                this.props.setQuery(query)
                            }}
                        />
                    </div>
                    <div className="auth-section d-flex align-items-center">
                        {/* <AuthButton>Get App</AuthButton> */}
                        {this.props.userData.data.isLoggedIn && <span className='user-name'>{this.props.userData.data.username}</span>}
                            {   
                                this.props.userData.data.isLoggedIn ? 
                                <AuthButton click={this.props.logout} className="red">Log Out</AuthButton>
                                : 
                                <AuthButton click={this.props.manageForm} className="blue">Log In</AuthButton>
                            }
                    </div>
                </div>

            </header>
        )
    }
}

const getUserData = (userProps) => {
    return {
        userData: userProps.userData
    }
}
 
export default connect(
    getUserData, 
    {
        ...setUserDataDispatch,
        ...setRedditDataDispatch
    }
)(NavBar)