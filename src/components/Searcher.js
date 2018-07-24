import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../containers/ResultsList';
import { connect } from 'react-redux';
// import { userSearches } from '../actions/index';

class Searcher extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    console.log('LOOK AT ME', this.props.searching);
    return(
      <React.Fragment>
        {(this.props.searching === true) ? (
          <React.Fragment>
            <SearchBar />
            <ResultsList />
          </React.Fragment>
        ) : (<div></div>)
        }
      </React.Fragment>

    )
  }
}

function mapStateToProps(state) {
  return {
    searching: state.searching
  }
}

export default connect(mapStateToProps)(Searcher);
