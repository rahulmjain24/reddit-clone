import React from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import NavBar from './components/NavBar/NavBar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <SignUp />
      </div>
    )
  }
}

export default App
