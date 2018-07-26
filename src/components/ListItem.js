import React from 'react';
import { connect } from 'react-redux';
import { renderThisProfile } from '../actions/index';


const ListItem = (props) => {
  return (
    <li onClick={() => {props.selectProfile(props.dataObj)}}>
      {props.dataObj.name}
    </li>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    selectProfile: (profile) => {
      dispatch(renderThisProfile(profile))
    }
  }
}

export default connect(null, mapDispatchToProps)(ListItem);
