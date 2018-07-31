import React from 'react';
import { connect } from 'react-redux';
import { renderThisProfile } from '../actions/index';


const ListItem = (props) => {
  console.log("what is props? ListItem", props);

  let item
  if (props.show) {
    item = props.show
  } else if (props.team) {
    item = props.team
  } else if (props.note) {
    item = props.note
  } else if (props.dataObj) {
    item = props.dataObj
  }

  if (item === undefined) {
    return (
      <li></li>
    )
  } else {
    return (
      <li onClick={() => {props.selectProfile(item)}}>
        {item.name}
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectProfile: (profile) => {
      dispatch(renderThisProfile(profile))
    }
  }
}

export default connect(null, mapDispatchToProps)(ListItem);
