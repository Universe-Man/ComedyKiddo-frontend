import React from 'react';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Searcher from '../components/Searcher';

class DisplayContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      signingUp: false,
      viewingProfile: false,
      searching: false,
    }
  }

  renderLoginForm = () => {
    console.log("logging in");
    this.setState({
      loggedIn: false,
      signingUp: false,
      viewingProfile: true,
      searching: false,
    })
  }

  renderSignUpForm = () => {
    console.log("signing up");
    this.setState({
      loggedIn: false,
      signingUp: true,
      viewingProfile: false,
      searching: false,
    })
  }

  renderProfilePage = () => {
    console.log("here's the profile page");
    this.setState({
      loggedIn: false,
      signingUp: false,
      viewingProfile: true,
      searching: false,
    })
  }

  render(){
    return(
      <React.Fragment>
        <Login state={this.state} renderLoginForm={this.renderLoginForm} renderSignUpForm={this.renderSignUpForm} />
        <Profile state={this.state} renderProfilePage={this.renderProfilePage} />
        <Searcher state={this.state}/>
      </React.Fragment>
    )
  }
}

export default DisplayContainer;
