import React from 'react';

const ListItem = (props) => {
  return (
    <li>
      {props.user.name}
    </li>
  )
}

export default ListItem;
