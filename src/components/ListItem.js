import React from 'react';
import { connect } from 'react-redux';
import { renderThisProfile } from '../actions/index';


const ListItem = (props) => {
  console.log("what is props? ListItem", props);

  let allDataMix = [...props.allUsers, ...props.allTeams, ...props.allShows]

  let item
  if (props.show) {
    item = props.show
  } else if (props.team) {
    item = props.team
  } else if (props.note) {
    item = props.note
  } else if (props.dataObj) {
    item = props.dataObj
  } else if (props.user) {
    item = props.user
  }

  let clickedObject =
    allDataMix.find(obj => {
      return obj.id === item.id && obj.source === item.source
    })

  if (item === undefined || clickedObject === undefined) {
    return (
      <li></li>
    )
  } else {
    return (
      <li onClick={() => {props.selectProfile(clickedObject)}}>
        {clickedObject.name}
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers,
    allTeams: state.allTeams,
    allShows: state.allShows,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectProfile: (profile) => {
      dispatch(renderThisProfile(profile))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
