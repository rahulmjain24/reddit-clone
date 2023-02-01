import React from 'react'
import "./NavBar.css"

class NavBar extends React.Component {
    render() { 
        return (
            <header className="header position-fixed bg-white d-flex">
                <div className="navbar">
                    <div className="nav-section d-flex">
                        <div className="logo d-flex">
                            <div className="logo-icon"><img src="svg/icon.svg" alt="" /></div>
                            <div className="logo-name"><img src="svg/reddit.svg" alt="" /></div>
                        </div>
                        <div className="home">
                            <div className="home-icon"><img src="svg/home.svg" alt="" /></div>
                        </div>
                    </div>
                    <div className="auth-section">

                    </div>
                </div>

            </header>
        );
    }
}
 
export default NavBar;