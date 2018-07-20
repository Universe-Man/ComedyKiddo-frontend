import React from 'react';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Searcher from '../components/Searcher';


class DisplayContainer extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <React.Fragment>
        <Login />
        <Profile />
        <Searcher />
      </React.Fragment>
    )
  }
}

export default DisplayContainer;
