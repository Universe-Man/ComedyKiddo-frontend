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
    }, () => {this.filterStuff()})
  }

  getSearchCategory = (event) => {
    this.setState({
      searchCategory: event.target.value
    }, () => {this.filterStuff()})
  }

  filterStuff = () => {
    let filteredUsers = this.props.allUsers.filter(user => user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    this.setState({ filteredUsers: filteredUsers})
    let filteredTeams = this.props.allTeams.filter(team => team.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    this.setState({ filteredTeams: filteredTeams})
    let filteredShows = this.props.allShows.filter(show => show.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    this.setState({ filteredShows: filteredShows})
  }



  render(){
    console.log("state's allUsers", this.props.allUsers);
    console.log("state's allTeams", this.props.allTeams);
    console.log("state's allShows", this.props.allShows);
    return(
      <React.Fragment>
        {(this.props.searching === true) ? (
          <React.Fragment>
            <SearchBar getSearchTerm={this.getSearchTerm} getSearchCategory={this.getSearchCategory} />
            <ResultsList filteredUsers={this.state.filteredUsers} filteredTeams={this.state.filteredTeams} filteredShows={this.state.filteredShows}/>
          </React.Fragment>
        ) : (<div></div>)
        }
      </React.Fragment>

    )
  }
}

function mapStateToProps(state) {
  return {
    searching: state.searching,
    allUsers: state.allUsers,
    allTeams: state.allTeams,
    allShows: state.allShows,
  }
}

export default connect(mapStateToProps)(Searcher);


//////// I HAVE TO PASS ALL THE USERS, TEAMS, AND SHOWS VIA REDUX AND CAN FILTER THEM HERE!! ///////////////////////////
