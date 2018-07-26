import React from 'react';

const ListItem = (props) => {
  return (
    <li>
      {props.dataObj.name}
    </li>
  )
}

export default ListItem;
