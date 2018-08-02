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
          <input id='search-input' type='text' placeholder='Search' autoFocus='autofocus' onChange={this.props.getSearchTerm}/>
          <label id='search-label'>I'm Looking For...</label>
          <select id='search-dropdown' size='large' className="ui dropdown"
             onChange={this.props.getSearchCategory}>
            <option value="just-browsing">Just Browsing</option>
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
