// export function addTodo(txt) {
//   return {
//     type: 'ADD_TODO',
//     payload: txt,
//   }
// }

export function userLogsIn(currentUser) {
  return {
    type: "LOGGED_IN",
    payload: currentUser
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

export function userLoginError() {
  return {
    type: "LOGIN_ERROR"
  }
}

export function userSignUpError() {
  return {
    type: "SIGNUP_ERROR"
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

export function completeEditAUserProfile(editedUserData) {
  return {
    type: "COMPLETE_EDIT_A_USER_PROFILE",
    payload: editedUserData
  }
}

export function completeEditATeamProfile(editedTeamData) {
  return {
    type: "COMPLETE_EDIT_A_TEAM_PROFILE",
    payload: editedTeamData
  }
}

export function completeEditAShowProfile(editedShowData) {
  console.log("editedShowData", editedShowData);
  return {
    type: "COMPLETE_EDIT_A_SHOW_PROFILE",
    payload: editedShowData
  }
}

export function cancelEditProfile() {
  return {
    type: "CANCEL_EDIT_PROFILE"
  }
}

export function editProfileError() {
  return {
    type: "EDIT_PROFILE_ERROR"
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

export function displayOtherUsers() {
  return {
    type: "DISPLAY_OTHER_USERS"
  }
}

export function deleteAUser(newSetOfUsers, currentUser) {
  return {
    type: "DELETE_A_USER",
    payload: [newSetOfUsers, currentUser]
  }
}

export function deleteATeam(newSetOfTeams, currentUser) {
  return {
    type: "DELETE_A_TEAM",
    payload: [newSetOfTeams, currentUser]
  }
}

export function deleteAShow(newSetOfShows, currentUser) {
  return {
    type: "DELETE_A_SHOW",
    payload: [newSetOfShows, currentUser]
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

export function createNewUser(newUserAndCo) {
  return {
    type: "CREATE_USER",
    payload: newUserAndCo
  }
}

export function addUserTo() {
  return {
    type: "ADD_USER_TO"
  }
}

export function cancelAddUserTo() {
  return {
    type: "CANCEL_ADD_USER_TO"
  }
}

export function cancelCreateNewUser() {
  return {
    type: "CANCEL_CREATE_USER",
  }
}

export function logOutFromDelete(newSetOfUsers) {
  return {
    type: "LOGOUT_FROM_DELETE",
    payload: newSetOfUsers
  }
}

export function createNewTeam() {
  return {
    type: "CREATE_TEAM"
  }
}

export function completeCreateNewTeam(newTeam, tempAllTeams) {
  return {
    type: "COMPLETE_CREATE_NEW_TEAM",
    payload: [newTeam, tempAllTeams]
  }
}

export function cancelCreateNewTeam() {
  return {
    type: "CANCEL_CREATE_TEAM"
  }
}

export function createNewShow() {
  return {
    type: "CREATE_SHOW"
  }
}

export function completeCreateNewShow(newShow, tempAllShows) {
  return {
    type: "COMPLETE_CREATE_NEW_SHOW",
    payload: [newShow, tempAllShows]
  }
}

export function cancelCreateNewShow() {
  return {
    type: "CANCEL_CREATE_SHOW"
  }
}

export function createNewNote() {
  return {
    type: "CREATE_NOTE"
  }
}

export function cancelCreateNewNote() {
  return {
    type: "CANCEL_CREATE_NOTE"
  }
}


//////////////CRUD STUFF????//////////////
// (NEED PAYLOADS BELOW!!)
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
