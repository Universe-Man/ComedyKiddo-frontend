const initialState = {
  currentUser: {},
  profileBeingViewed: {},
  allUsers: [],
  allTeams: [],
  allShows: [],
  loggedIn: false,
  signingUp: false,
  loginError: false,
  signUpError: false,
  viewingProfile: false,
  searching: false,
  activeHeaderItem: "profile",
  editingProfile: false,
  editingProfileError: false,
  editingTeams: false,
  editingShows: false,
  editingNotes: false,
  displayUsers: false,
  displayTeams: false,
  displayShows: false,
  displayNotes: false,
  addUserTo: false,
  createTeam: false,
  createShow: false,
  createNote: false,
}

// const renderState = {
//   loggedIn: false,
//   signingUp: false,
//   viewingProfile: false,
//   searching: false,
// }

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case "LOGGED_IN":
        if (state.signingUp === true) {
          return {
            ...state,
            addUserTo: false,
            displayUsers: false,
            loggedIn: true,
            signingUp: false,
            viewingProfile: true,
            signUpError: false,
            activeHeaderItem: "profile",
            currentUser: action.payload,
            profileBeingViewed: action.payload
          }
        } else {
          return {
            ...state,
            addUserTo: false,
            displayUsers: false,
            //...renderState,
            loggedIn: true,
            viewingProfile: true,
            loginError: false,
            activeHeaderItem: "profile",
            currentUser: action.payload,
            profileBeingViewed: action.payload
          }
        }
    case "LOGGED_OUT":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        //...renderState,
        loggedIn: false,
        viewingProfile: false,
        loginError: false,
        signUpError: false,
        searching: false,
        activeHeaderItem: "profile",
        profileBeingViewed: {},
        currentUser: {},
        editingProfile: false,
        editingProfileError: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "SIGNING_UP":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        //...renderState,
        signingUp: true,
      }
    case "LOGIN_ERROR":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        loginError: true,
      }
    case "SIGNUP_ERROR":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        signUpError: true,
      }
    case "VIEWING_PROFILE":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        //...renderState,
        viewingProfile: true,
        searching: false,
        activeHeaderItem: "profile",
        profileBeingViewed: state.currentUser,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        editingProfile: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "SEARCHING":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        //...renderState,
        searching: true,
        viewingProfile: false,
        activeHeaderItem: "search",
        editingProfile: false,
        editingProfileError: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "GET_ALL_USERS":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        allUsers: action.payload
      }
    case "GET_ALL_TEAMS":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        allTeams: action.payload
      }
    case "GET_ALL_SHOWS":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        allShows: action.payload
      }
    case "RENDER_THIS_PROFILE":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        profileBeingViewed: action.payload,
        viewingProfile: true,
        searching: false,
        activeHeaderItem: "profile",
      }
    case "EDIT_PROFILE":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        editingProfile: true,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "COMPLETE_EDIT_PROFILE":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        editingProfile: false,
        editingProfileError: false,
        currentUser: action.payload[0],
        profileBeingViewed: action.payload[0],
        allUsers: action.payload[1]
      }
    case "CANCEL_EDIT_PROFILE":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        editingProfile: false,
        editingProfileError: false,
      }
    case "EDIT_PROFILE_ERROR":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        editingProfileError: true,
      }
    case "LOGOUT_FROM_DELETE":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        //...renderState,
        loggedIn: false,
        viewingProfile: false,
        loginError: false,
        signUpError: false,
        searching: false,
        activeHeaderItem: "profile",
        profileBeingViewed: {},
        currentUser: {},
        editingProfile: false,
        editingProfileError: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
        allUsers: action.payload
      }
    case "EDIT_TEAMS":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        editingTeams: true,
        editingProfile: false,
        editingShows: false,
        editingNotes: false,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "EDIT_SHOWS":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        editingShows: true,
        editingProfile: false,
        editingTeams: false,
        editingNotes: false,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "EDIT_NOTES":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        editingNotes: true,
        editingProfile: false,
        editingTeams: false,
        editingShows: false,
        displayTeams: false,
        displayShows: false,
        displayNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "DISPLAY_OTHER_USERS":
      return {
        ...state,
        addUserTo: false,
        displayUsers: true,
        displayNotes: false,
        displayTeams: false,
        displayShows: false,
        editingProfile: false,
        editingProfileError: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }



    case "DISPLAY_TEAMS":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        displayNotes: false,
        displayTeams: true,
        displayShows: false,
        editingProfile: false,
        editingProfileError: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "DISPLAY_SHOWS":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        displayNotes: false,
        displayTeams: false,
        displayShows: true,
        editingProfile: false,  editingProfileError: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "DISPLAY_NOTES":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        displayNotes: true,
        displayTeams: false,
        displayShows: false,
        editingProfile: false,  editingProfileError: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        createTeam: false,
        createShow: false,
        createNote: false,
      }
    case "CREATE_USER":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        currentUser: action.payload.newUser,
        profileBeingViewed: action.payload.newUser,
        loggedIn: true,
        viewingProfile: true,
        signingUp: false,
        signUpError: false,
        allUsers: action.payload.allUsers
      }
    case "CANCEL_CREATE_USER":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        loggedIn: false,
        signingUp: false,
        loginError: false,
        signUpError: false,
        viewingProfile: false,
        searching: false,
      }
    case "DELETE_A_USER":
      return {
        ...state,
        viewingProfile: true,
        profileBeingViewed: action.payload[1],
        allUsers: action.payload[0],
        editingProfile: false,
        editingProfileError: false,
      }
    case "ADD_USER_TO":
      return {
        ...state,
        addUserTo: true,
      }
    case "CANCEL_ADD_USER_TO":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
      }
    case "CREATE_TEAM":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        displayTeams: false,
        createTeam: true,
        displayNotes: false,
        displayShows: false,
        editingProfile: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        createShow: false,
        createNote: false,
      }
    case "COMPLETE_CREATE_NEW_TEAM":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        createTeam: false,
        allTeams: action.payload[1]
      }
    case "CANCEL_CREATE_TEAM":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        createTeam: false,
      }
    case "CREATE_SHOW":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        displayShows: false,
        createTeam: false,
        displayNotes: false,
        displayTeams: false,
        editingProfile: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        createShow: true,
        createNote: false,
      }
    case "COMPLETE_CREATE_NEW_SHOW":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        createShow: false,
        allShows: action.payload[1]
        }
    case "CANCEL_CREATE_SHOW":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        createShow: false,
      }
    case "CREATE_NOTE":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        displayNotes: false,
        createNote: true,
        displayTeams: false,
        displayShows: false,
        editingProfile: false,
        editingTeams: false,
        editingShows: false,
        editingNotes: false,
        createTeam: false,
        createShow: false,
      }
    case "CANCEL_CREATE_NOTE":
      return {
        ...state,
        addUserTo: false,
        displayUsers: false,
        createNote: false,
      }
    default:
      return state;
  }
}


export default reducer;

// HOW I HAD THE ORIGINAL THING
// case "SEARCHING":
//   return { ...state,
//     loggedIn: false,
//     signingUp: false,
//     viewingProfile: false,
//     searching: true
//   }
