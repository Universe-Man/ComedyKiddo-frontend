import React from 'react';
import '../assets/App.css';

const ResultsList = (props) => {

  console.log('results list filtered users brah', props.filteredUsers);
  console.log('results list filtered teams brah', props.filteredTeams);
  console.log('results list filtered shows brah', props.filteredShows);

  return(
    <div id='ResultsList'>ResultsList</div>
  )
}

export default ResultsList;
