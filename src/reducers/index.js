const initialState = {
  currentUser: {},
  profileBeingViewed: {},
  allUsers: [],
  allTeams: [],
  allShows: [],
  loggedIn: false,
  signingUp: false,
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
            activeHeaderItem: "profile",
            profileBeingViewed: state.currentUser
          }
        } else {
          return {
            ...state,
            //...renderState,
            loggedIn: true,
            viewingProfile: true,
            activeHeaderItem: "profile",
            profileBeingViewed: state.currentUser
          }
        }
    case "LOGGED_OUT":
      return {
        ...state,
        //...renderState,
        loggedIn: false,
        viewingProfile: false,
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
      }
    case "SIGNING_UP":
      return {
        ...state,
        //...renderState,
        signingUp: true,
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
      }
    case "EDIT_TEAMS":
      return {
        ...state,
        editingTeams: true,
        editingProfile: false,
        editingShows: false,
        editingNotes: false,
      }
    case "EDIT_SHOWS":
      return {
        ...state,
        editingShows: true,
        editingProfile: false,
        editingTeams: false,
        editingNotes: false,
      }
    case "EDIT_NOTES":
      return {
        ...state,
        editingNotes: true,
        editingProfile: false,
        editingTeams: false,
        editingShows: false,
      }
    case "DISPLAY_TEAMS":
      return {
        ...state,
        displayNotes: false,
        displayTeams: true,
        displayShows: false,
        editingProfile: false,
      }
    case "DISPLAY_SHOWS":
      return {
        ...state,
        displayNotes: false,
        displayTeams: false,
        displayShows: true,
        editingProfile: false,
      }
    case "DISPLAY_NOTES":
      return {
        ...state,
        displayNotes: true,
        displayTeams: false,
        displayShows: false,
        editingProfile: false,
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
