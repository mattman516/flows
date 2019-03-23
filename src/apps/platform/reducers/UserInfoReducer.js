var startingState = {
  signInOpen: false,
  userInfo: {
    avatarSrc: "http://kokefm.com/wp-content/uploads/2013/05/DOG-256x256.jpg",
    name: "Test User",
    loggedIn: false,
    email: null,
    password: null
  }
};

const userInformation = (state = startingState, action) => {
  switch (action.type) {
    case "ON_SIGN_IN_OPEN": {
      return {
        ...state,
        signInOpen: true
      };
    }
    case "ON_SIGN_IN_CLOSE": {
      return {
        ...state,
        signInOpen: false
      };
    }

    case "ON_EMAIL_CHANGE": {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          email: action.value.target.value
        }
      };
    }

    case "ON_PASSWORD_CHANGE": {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          password: action.value.target.value
        }
      };
    }

    case "ON_SUBMIT": {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          loggedIn: true
        },
        signInOpen: false
      };
    }

    case "ON_LOG_OUT": {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          loggedIn: false
        },
        signInOpen: false
      };
    }

    default:
      return state;
  }
};

export default userInformation;
