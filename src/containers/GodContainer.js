import React from 'react';
import Header from '../components/Header';
import DisplayContainer from '../containers/DisplayContainer';

class GodContainer extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div>
        <Header />
        <DisplayContainer />
      </div>
    )
  }
}

export default GodContainer;
