import React from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import NavBar from './components/NavBar/NavBar'
import { connect } from 'react-redux'
import Posts from './components/Posts/Posts'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.userData.showForm && <SignUp />}
        <Posts />
      </div>
    )
  }
}
const getUserData = (userProps) => {
  return {
      userData: userProps.userData
  }
}

export default connect(getUserData)(App)
