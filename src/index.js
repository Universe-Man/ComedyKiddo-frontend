import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import reducer from './reducers/index.js' /// DO I NEED THIS LAST PART???

import 'semantic-ui-css/semantic.min.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


// console.log('before createStore');

const store = createStore(reducer)

console.log("the store",store.getState());
// console.log(store);
// console.log('after createStore', store.getState());
//
// const action = {
//   type: "CLICK_EVENT", // ALL CAPS WITH _
// }
// store.dispatch(action);
// console.log('after CLICK_EVENT', store.getState());


ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));

// USE ROUTER???
// <Router><App /></Router>???







///////OLD REDUX SETUP/////////
//
// import { combineReducers, createStore } from 'redux';
//
// function usersReducer(state = [], action){
//   return state;
// }
// function teamsReducer(state = '', action){
//   switch (action.type) {
//     case 'UPDATE_TEAM':
//       return action.payload;
//   }
//   return state;
// }
// const allReducers = combineReducers({
//   users: usersReducer,
//   teams: teamsReducer
// })
// const store = createStore(
//   allReducers,
//   {
//     users: [{name: "Ian"}],
//     teams: "The Best Team"
//   },
//   window.devToolsExtension && window.devToolsExtension()
// );
// console.log(store.getState());
// const updateTeamAction = {
//   type: 'UPDATE_TEAM',
//   payload: {
//     teams: "The Worst Team"
//   }
// };
// store.dispatch(updateTeamAction)
