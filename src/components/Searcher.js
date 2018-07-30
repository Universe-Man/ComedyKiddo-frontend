import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../containers/ResultsList';
import ListItem from '../components/ListItem';

import { connect } from 'react-redux';
// import { userSearches } from '../actions/index';

class Searcher extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      searchCategory: "",
      filteredUsers: [],
      filteredTeams: [],
      filteredShows: [],
      filteredData: [],
    }
  }

// MIKE IS REACT BATMAN!! (REVIEW COMPONENT LIFECYCLE CHART)
  componentWillReceiveProps(){
    this.filterStuff()
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
    let filteredTeams = this.props.allTeams.filter(team => team.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    let filteredShows = this.props.allShows.filter(show => show.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    this.setState({
      filteredUsers: filteredUsers,
      filteredTeams: filteredTeams,
      filteredShows: filteredShows,
    }, () => {this.filterByCategory()})

    // console.log("THIS IS WHERE WE'D DO CATEGORIES!");
  }
// NEED TO ADD WHETHER COACH OR LOOKING FOR CERTAIN THINGS, ETC. FILTER!!
  filterByCategory = () => {
    let currentData = [];
    let allData = [...this.state.filteredUsers, ...this.state.filteredTeams, ...this.state.filteredShows]
    // console.log("ALLDATA", allData);
    if (this.state.searchCategory === "just-browsing" || this.state.searchCategory === "") {
        // console.log("jb");
        currentData = allData
    } else if (this.state.searchCategory === "player-for-team") {
        // console.log("pft");
        currentData = this.state.filteredUsers
    } else if (this.state.searchCategory === "team-for-player") {
        // console.log("tfp");
        currentData = this.state.filteredTeams
    } else if (this.state.searchCategory === "team-for-show") {
        // console.log("tfs");
        currentData = this.state.filteredTeams
    } else if (this.state.searchCategory === "show-for-team") {
        // console.log("sft");
        currentData = this.state.filteredShows
    } else if (this.state.searchCategory === "coach") {
        // console.log('coach');
        currentData = this.state.filteredUsers
    }


    // let currentData = this.props.allData.map(user => {
    //   return ( <ListItem user={user} id={user.id} key={user.id}/> )
    // })

    // let currentData = this.props.filteredUsers.map(user => {
    //   return ( <ListItem user={user} id={user.id} key={user.id}/> )
    //  })
    // console.log("currentData", currentData);
    // console.log("this.state.filteredUsers", this.state.filteredUsers);
    // console.log("allData", allData);
    this.setState({ filteredData: currentData })
    // console.log("THIS IS WHERE WE'D DO CATEGORIES PART 2!");

  }




  render(){
    // console.log("STATE", this.state);
    return(
      <React.Fragment>
        {(this.props.searching === true) ? (
          <React.Fragment>
            <SearchBar getSearchTerm={this.getSearchTerm} getSearchCategory={this.getSearchCategory} />
            <ResultsList filteredData={this.state.filteredData} filteredUsers={this.state.filteredUsers} filteredTeams={this.state.filteredTeams} filteredShows={this.state.filteredShows}/>
          </React.Fragment>
        ) : (null)
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
