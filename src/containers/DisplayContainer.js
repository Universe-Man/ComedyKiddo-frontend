import React from 'react';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Searcher from '../components/Searcher';

class DisplayContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      loggingIn: true,
      signingUp: false,
      viewingProfile: false,
      searching: false,
    }
  }

  renderLoginForm = () => {
    console.log("logging in");
    this.setState({
      loggingIn: true,
      signingUp: false,
      viewingProfile: false,
      searching: false,
    })
  }

  renderSignUpForm = () => {
    console.log("signing up");
    this.setState({
      loggingIn: false,
      signingUp: true,
      viewingProfile: false,
      searching: false,
    })
  }

  render(){
    return(
      <React.Fragment>
        <Login state={this.state} renderLoginForm={this.renderLoginForm} renderSignUpForm={this.renderSignUpForm} />
        <Profile state={this.state}/>
        <Searcher state={this.state}/>
      </React.Fragment>
    )
  }
}

export default DisplayContainer;
