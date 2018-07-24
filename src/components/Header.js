import React from 'react';
import '../assets/App.css';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div id='Header'>
        Headers
      </div>
    )
  }
}

export default Header;
