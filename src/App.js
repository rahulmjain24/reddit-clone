import React from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import NavBar from './components/NavBar/NavBar'
import { connect } from 'react-redux'
import Posts from './components/Posts/Posts'
import { setRedditDataDispatch } from './redux/actions'
import { API_STATES } from './redux/actionTypes'
import Loader from './components/Loader/Loader'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)

    this.URL = 'https://reddit-gyae.onrender.com/redditdata/'
    // this.URL = 'http://localhost:8080/redditdata/'
  }


  componentDidMount() {
    axios.get(this.URL).then((response) => {
      this.props.setData([], API_STATES.LOADING)
      return response.data
    })
    .then((data) => {
      console.log(data)
      this.props.setData(data, API_STATES.LOADED)
    })
    .catch((err) => {
      this.props.setData([], API_STATES.ERROR)
      console.error(err)
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.redditData.API_STATE === API_STATES.LOADING && <Loader /> }
        {this.props.redditData.API_STATE === API_STATES.ERROR && <h1>Something went wrong!!!</h1>}
        {(this.props.redditData.API_STATE === API_STATES.LOADED && this.props.redditData.posts.length === 0) && <h1>No Products found!!</h1>}
        {
          (this.props.redditData.API_STATE === API_STATES.LOADED && this.props.redditData.posts.length > 0) 
          &&
          <>
            <NavBar />
            {this.props.userData.showForm && <SignUp />}
            <Posts />
          </>
        }
      </div>
    )
  }
}
const getUserData = (userProps) => {
  return {
      userData: userProps.userData,
      redditData: userProps.redditData
  }
}

export default connect(getUserData, setRedditDataDispatch)(App)
