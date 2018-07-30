import React from 'react';
import Header from '../components/Header';
import DisplayContainer from '../containers/DisplayContainer';
import '../assets/App.css';
import { connect } from 'react-redux';
import { getAllUsers, getAllTeams, getAllShows } from '../actions/index';
// can string interpolate the url!!
export const userURL = "http://localhost:3001/api/v1/users"
export const teamURL = "http://localhost:3001/api/v1/teams"
export const showURL = "http://localhost:3001/api/v1/shows"

class GodContainer extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount() {
    console.log('reloading');
    fetch(userURL)
      .then(res => res.json())
      .then(json => this.props.gettingAllTheUsers(json))
    fetch(teamURL)
      .then(res => res.json())
      .then(json => this.props.gettingAllTheTeams(json))
    fetch(showURL)
      .then(res => res.json())
      .then(json => this.props.gettingAllTheShows(json))
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

function mapDispatchToProps(dispatch) {
  return {
    gettingAllTheUsers: (users) => {
      dispatch(getAllUsers(users))
    },
    gettingAllTheTeams: (teams) => {
      dispatch(getAllTeams(teams))
    },
    gettingAllTheShows: (shows) => {
      dispatch(getAllShows(shows))
    }
  }
}

export default connect(null, mapDispatchToProps)(GodContainer);
