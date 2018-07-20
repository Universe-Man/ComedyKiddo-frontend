import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

import { combineReducers, createStore } from 'redux';

function usersReducer(state = [], action){
  return state;
}

function teamsReducer(state = '', action){
  switch (action.type) {
    case 'UPDATE_TEAM':
      return action.payload;
  }
  return state;
}

const allReducers = combineReducers({
  users: usersReducer,
  teams: teamsReducer
})
const store = createStore(
  allReducers,
  {
    users: [{name: "Ian"}],
    teams: "The Best Team"
  },
  window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

const updateTeamAction = {
  type: 'UPDATE_TEAM',
  payload: {
    teams: "The Worst Team"
  }
};

store.dispatch(updateTeamAction)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
