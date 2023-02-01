import React from 'react'
import "./NavBar.css"
import AuthButton from '../Button/AuthButton';
import SearcBar from './SearchBar';
import { connect } from 'react-redux';
import { setUserDataDispatch } from '../../redux/actions';

class NavBar extends React.Component {
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
                        <SearcBar />
                    </div>
                    <div className="auth-section d-flex align-items-center">
                        {/* <AuthButton>Get App</AuthButton> */}
                        <AuthButton click={this.props.manageForm} className="blue">Log In</AuthButton>
                    </div>
                </div>

            </header>
        )
    }
}
 
export default connect(null, setUserDataDispatch)(NavBar)