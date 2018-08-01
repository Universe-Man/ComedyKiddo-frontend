import React from 'react';
import ListItem from '../components/ListItem';
import '../assets/App.css';
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { renderThisProfile } from '../actions/index';



const ResultsList = (props) => {

  // console.log('results list filtered users brah', props.filteredUsers);
  // console.log('results list filtered teams brah', props.filteredTeams);
  // console.log('results list filtered shows brah', props.filteredShows);

// let theGuy = props.filteredData

// let currentFilteredData = [];
// NEED TO ADD WHETHER COACH OR LOOKING FOR CERTAIN THINGS, ETC. FILTER!!

  let renderData = props.filteredData.map(dataObj => {
    if (dataObj.source === "user") {
      let coachResult
      if (dataObj.coach === true) {
        coachResult = "Yes"
      } else {
        coachResult = "No"
      }
      return (
        <Table.Row textAlign='center' onClick={() => {props.selectProfile(dataObj)}}>
          <Table.Cell>{dataObj.name}</Table.Cell>
          <Table.Cell>{dataObj.email}</Table.Cell>
          <Table.Cell>{coachResult}</Table.Cell>
        </Table.Row> )
    } else if (dataObj.source === "team") {
      return (
        <Table.Row textAlign='center' onClick={() => {props.selectProfile(dataObj)}}>
          <Table.Cell>{dataObj.name}</Table.Cell>
          <Table.Cell>-</Table.Cell>
          <Table.Cell>-</Table.Cell>
        </Table.Row> )
    } else if (dataObj.source === "show") {
      return (
        <Table.Row textAlign='center' onClick={() => {props.selectProfile(dataObj)}}>
          <Table.Cell>{dataObj.name}</Table.Cell>
          <Table.Cell>{dataObj.location}</Table.Cell>
          <Table.Cell>-</Table.Cell>
        </Table.Row> )
    }
  })


    // return ( <ListItem dataObj={dataObj} id={`${dataObj.source}-${dataObj.id}`} key={`${dataObj.source}-${dataObj.id}`}/> )
    //  })





  return(
    <Table size="large" celled selectable id='ResultsList'>
      <Table.Header>
        <Table.Row textAlign='center'>
          <Table.HeaderCell width={2}>Name</Table.HeaderCell>
          <Table.HeaderCell width={2}>Email/Location</Table.HeaderCell>
          <Table.HeaderCell width={2}>Coach?</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {renderData}
      </Table.Body>
    </Table>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    selectProfile: (profile) => {
      dispatch(renderThisProfile(profile))
    }
  }
}

export default connect(null, mapDispatchToProps)(ResultsList);
