import React from 'react';
import ListItem from '../components/ListItem';
import '../assets/App.css';

const ResultsList = (props) => {

  // console.log('results list filtered users brah', props.filteredUsers);
  // console.log('results list filtered teams brah', props.filteredTeams);
  // console.log('results list filtered shows brah', props.filteredShows);


// let currentFilteredData = [];
// console.log('OH SHIT!', this.currentFilteredData);
// NEED TO ADD WHETHER COACH OR LOOKING FOR CERTAIN THINGS, ETC. FILTER!!

  let renderData = props.filteredData.map(dataObj => {
    return ( <ListItem dataObj={dataObj} id={`${dataObj.source}-${dataObj.id}`} key={`${dataObj.source}-${dataObj.id}`}/> )
     })


console.log("THIS IS IN THE RESULTS LIST", props.filteredData);



  return(
    <div id='ResultsList'>
      {renderData}
    </div>
  )
}

export default ResultsList;
