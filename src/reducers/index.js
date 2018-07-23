const initialState = {}

const renderState = {
  loggedIn: false,
  signingUp: false,
  viewingProfile: false,
  searching: false,
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case "LOGGED_IN":
      return {
        ...state,
        ...renderState,
        loggedIn: true,
      }
    case "SIGNING_UP":
      return { ...state,
        ...renderState,
        signingUp: true,
      }
    case "VIEWING_PROFILE":
      return { ...state,
        ...renderState,
        viewingProfile: true,
      }
    case "SEARCHING":
      return { ...state,
        ...renderState,
        searching: true
      }
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
