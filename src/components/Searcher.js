import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../containers/ResultsList';

class Searcher extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <React.Fragment>
        <SearchBar />
        <ResultsList />

      </React.Fragment>
    )
  }
}

export default Searcher;
