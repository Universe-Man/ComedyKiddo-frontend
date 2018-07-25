import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../containers/ResultsList';
import { connect } from 'react-redux';
// import { userSearches } from '../actions/index';

class Searcher extends React.Component {
  constructor(){
    super();
    this.state = {
      searchTerm: "",
      searchCategory: "",
      filteredUsers: [],
      filteredTeams: [],
      filteredShows: [],
    }
  }

  getSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  getSearchCategory = (event) => {
    this.setState({
      searchCategory: event.target.value
    })
  }

  render(){
    console.log('LOOK AT ME', this.props.searching);
    return(
      <React.Fragment>
        {(this.props.searching === true) ? (
          <React.Fragment>
            <SearchBar getSearchTerm={this.getSearchTerm} getSearchCategory={this.getSearchCategory} />
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


//////// I HAVE TO PASS ALL THE USERS, TEAMS, AND SHOWS VIA REDUX AND CAN FILTER THEM HERE!! ///////////////////////////
