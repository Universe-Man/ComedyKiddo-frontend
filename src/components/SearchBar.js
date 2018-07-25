import React from 'react';
import '../assets/App.css';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state = {}
  }



  render(){
    return(
      <div id='SearchBar'>
        <form>
          <input type='text' placeholder='Search' onChange={this.props.getSearchTerm}/>
          <select className="ui dropdown" onChange={this.props.getSearchCategory}>
            <option value="">I'm Looking For...</option>
            <option value="player-for-team">Players to Join Team</option>
            <option value="team-for-player">Team to Join</option>
            <option value="show-for-team">Show for Team</option>
            <option value="team-for-show">Team for Show</option>
            <option value="coach">Coach</option>
          </select>
        </form>
      </div>
    )
  }
}

export default SearchBar;
