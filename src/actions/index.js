// export function addTodo(txt) {
//   return {
//     type: 'ADD_TODO',
//     payload: txt,
//   }
// }

export function userLogsIn() {
  return {
    type: "LOGGED_IN",
    // payload: {
    //   loggedIn: true
    // } BECAUSE THE CHANGE IS IN THE REDUCER ALREADY, ONLY NEED PAYLOAD WHEN INTRODUCING NEW INFO
  }
}

export function userLogsOut() {
  return {
    type: "LOGGED_OUT",
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

export function getAllUsers(users) {
  return {
    type: "GET_ALL_USERS",
    payload: users
  }
}

export function getAllTeams(teams) {
  return {
    type: "GET_ALL_TEAMS",
    payload: teams
  }
}

export function getAllShows(shows) {
  return {
    type: "GET_ALL_SHOWS",
    payload: shows
  }
}

export function renderThisProfile(profile) {
  return {
    type: "RENDER_THIS_PROFILE",
    payload: profile
  }
}

export function editProfile() {
  return {
    type: "EDIT_PROFILE"
  }
}

export function editTeams() {
  return {
    type: "EDIT_TEAMS"
  }
}

export function editShows() {
  return {
    type: "EDIT_SHOWS"
  }
}

export function editNotes() {
  return {
    type: "EDIT_NOTES"
  }
}

export function displayTeams() {
  return {
    type: "DISPLAY_TEAMS"
  }
}

export function displayShows() {
  return {
    type: "DISPLAY_SHOWS"
  }
}

export function displayNotes() {
  return {
    type: "DISPLAY_NOTES"
  }
}

export function createNewTeam() {
  return {
    type: "CREATE_TEAM"
  }
}

export function createNewShow() {
  return {
    type: "CREATE_SHOW"
  }
}

export function createNewNote() {
  return {
    type: "CREATE_NOTE"
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
