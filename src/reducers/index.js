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
        //...renderState,
        signingUp: true,
      }
    case "LOGIN_ERROR":
      return {
        ...state,
        loginError: true,
      }
    case "SIGNUP_ERROR":
      return {
        ...state,
        signUpError: true,
      }
    case "VIEWING_PROFILE":
      return {
        ...state,
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
        //...renderState,
        searching: true,
        viewingProfile: false,
        activeHeaderItem: "search",
        editingProfile: false,
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
        allUsers: action.payload
      }
    case "GET_ALL_TEAMS":
      return {
        ...state,
        allTeams: action.payload
      }
    case "GET_ALL_SHOWS":
      return {
        ...state,
        allShows: action.payload
      }
    case "RENDER_THIS_PROFILE":
      return {
        ...state,
        profileBeingViewed: action.payload,
        viewingProfile: true,
        searching: false,
        activeHeaderItem: "profile",
      }
    case "EDIT_PROFILE":
      return {
        ...state,
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
    case "CANCEL_EDIT_PROFILE":
      return {
        ...state,
        editingProfile: false,
      }
    case "EDIT_TEAMS":
      return {
        ...state,
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
    case "DISPLAY_TEAMS":
      return {
        ...state,
        displayNotes: false,
        displayTeams: true,
        displayShows: false,
        editingProfile: false,
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
        displayNotes: false,
        displayTeams: false,
        displayShows: true,
        editingProfile: false,
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
        displayNotes: true,
        displayTeams: false,
        displayShows: false,
        editingProfile: false,
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
        currentUser: action.payload,
        profileBeingViewed: action.payload,
        loggedIn: true,
        viewingProfile: true,
      }
    case "CANCEL_CREATE_USER":
      return {
        ...state,
        loggedIn: false,
        signingUp: false,
        loginError: false,
        signUpError: false,
        viewingProfile: false,
        searching: false,
      }
    case "CREATE_TEAM":
      return {
        ...state,
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
    case "CANCEL_CREATE_TEAM":
      return {
        ...state,
        createTeam: false,
      }
    case "CREATE_SHOW":
      return {
        ...state,
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
    case "CANCEL_CREATE_SHOW":
      return {
        ...state,
        createShow: false,
      }
    case "CREATE_NOTE":
      return {
        ...state,
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
