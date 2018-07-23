import React from 'react';
import '../App.css';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  getSearchTerm = (event) => {
    console.log(event.target.value);
  }

  render(){
    return(
      <div id='SearchBar'>
        <form>
          <input type='text' placeholder='Search' onChange={this.getSearchTerm}/>
          <select className="ui dropdown">
            <option value="">I'm Looking For...</option>
            <option value="0">Players to Join Team</option>
            <option value="1">Team to Join</option>
            <option value="2">Show for Team</option>
            <option value="3">Team for Show</option>
            <option value="4">Coach</option>
          </select>
        </form>
      </div>
    )
  }
}

export default SearchBar;
