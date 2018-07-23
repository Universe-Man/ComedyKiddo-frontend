import React from 'react';
import Header from '../components/Header';
import DisplayContainer from '../containers/DisplayContainer';
import '../assets/App.css';

class GodContainer extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div className='GodContainer'>
        <Header />
        <DisplayContainer />
      </div>
    )
  }
}

export default GodContainer;
