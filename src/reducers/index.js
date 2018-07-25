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
          }
        } else {
          return {
            ...state,
            //...renderState,
            loggedIn: true,
            viewingProfile: true,
          }
        }
    case "LOGGED_OUT":
      return {
        ...state,
        //...renderState,
        loggedIn: false,
        viewingProfile: false,
        searching: false,
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
      }
    case "SEARCHING":
      return {
        ...state,
        //...renderState,
        searching: true,
        viewingProfile: false,
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
