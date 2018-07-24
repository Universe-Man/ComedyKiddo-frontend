// export function addTodo(txt) {
//   return {
//     type: 'ADD_TODO',
//     payload: txt,
//   }
// }

export function userLogsIn() {
  console.log('logging in');
  return {
    type: "LOGGED_IN",
    // payload: {
    //   loggedIn: true
    // } BECAUSE THE CHANGE IS IN THE REDUCER ALREADY, ONLY NEED PAYLOAD WHEN INTRODUCING NEW INFO
  }
}

export function userSigningUp() {
  return {
    type: "SIGNING_UP"//,
    // payload: ?
  }
}

export function userViewProfile() {
  return {
    type: "VIEWING_PROFILE"
  }
}

export function userSearches() {
  return {
    type: "SEARCHING"
  }
}

//////////////CRUD STUFF????//////////////
// (NEED PAYLOADS BELOW!!)
// export function createUser() {
//   return {
//     type: "CREATE_USER",
//     //payload: {}
//   }
// }
//
// export function editUser() {
//   return {
//     type: "EDIT_USER",
//     //payload: {}
//   }
// }
//
// export function deleteUser() {
//   return {
//     type: "DELETE_USER",
//     //payload: {}
//   }
// }
//
// export function createTeam() {
//   return {
//     type: "CREATE_TEAM",
//     //payload: {}
//   }
// }
//
// export function createTeam() {
//   return {
//     type: "EDIT_TEAM",
//     //payload: {}
//   }
// }
//
// export function createTeam() {
//   return {
//     type: "DELETE_TEAM",
//     //payload: {}
//   }
// }
//
// export function createShow() {
//   return {
//     type: "CREATE_SHOW",
//     //payload: {}
//   }
// }
//
// export function editShow() {
//   return {
//     type: "EDIT_SHOW",
//     //payload: {}
//   }
// }
//
// export function deleteShow() {
//   return {
//     type: "DELETE_SHOW",
//     //payload: {}
//   }
// }
//
// export function createNote() {
//   return {
//     type: "CREATE_NOTE",
//     //payload: {}
//   }
// }
//
// export function createNote() {
//   return {
//     type: "EDIT_NOTE",
//     //payload: {}
//   }
// }
//
// export function createNote() {
//   return {
//     type: "DELETE_NOTE",
//     //payload: {}
//   }
// }
