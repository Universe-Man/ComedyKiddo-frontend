import React from 'react';
import ListItem from '../components/ListItem';
import '../assets/App.css';

const ResultsList = (props) => {

  console.log('results list filtered users brah', props.filteredUsers);
  console.log('results list filtered teams brah', props.filteredTeams);
  console.log('results list filtered shows brah', props.filteredShows);

  let currentFilteredData = props.filteredUsers.map(user => {
    return ( <ListItem user={user} id={user.id} key={user.id}/> )
  })


  return(
    <div id='ResultsList'>
      {currentFilteredData}
    </div>
  )
}

export default ResultsList;
