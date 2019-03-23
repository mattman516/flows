var startingState = {
  messageInfo: {
    123:{
      read: false,
      time: new Date(),
      title: "LastName, FirstName",
      app: "Align 4",
      path: "/align4/Course/2",
      icon: "face",
      message: "What is the deal with this",
      courseId: 2,
      courseCode: "CHEM 250",
      courseName: "Surface Chemistry"
    }
  },
  messagesOpen1: false,
  messagesOpen2: false,
  readMessagesOpen: false,
  readMessagesOpen2: false,
  item: null,
  count: 0
};

const platformHeader = (state = startingState, action) => {
  switch (action.type) {
    case "ON_MESSAGE_SIDEBAR_TOGGLE": {
      return {
        ...state,
        messagesOpen1: !state.messagesOpen1,
        item: action.item
      };
    }
    case "ON_MESSAGE_EXPAND_TOGGLE": {
      return {
        ...state,
        messagesOpen2: !state.messagesOpen2
      };
    }

    case "ON_ADD_MESSAGE": {
      // if(action.id){
      var newAddMessageInfo = {
        ...state.messageInfo
      };
      var newId = Math.random().toString()
      newAddMessageInfo[newId] = action.payload;
      newAddMessageInfo[newId].id = newId
      // }
      return {
        ...state,
        messageInfo: newAddMessageInfo,
        count: state.count + 1
      };
    }

    case "ON_TOGGLE_MESSAGE_READ": {
      var newToggleMessageInfo = {
        ...state.messageInfo
      };
      newToggleMessageInfo[action.key].read = !newToggleMessageInfo[
        action.key
      ].read;
      return {
        ...state,
        messageInfo: newToggleMessageInfo,
        count: state.count > 0 ? state.count - 1 : 0
      };
    }

    // case "ON_TOGGLE_READ_MESSAGES_OPEN":
    //   return {
    //     ...state,
    //     readNotificationsOpen: !state.readNotificationsOpen
    //   };

    case "ON_HANDLE_READ_ALL": {
      var newAllReadMessageInfo = Object.keys(state.messageInfo).map(
        index => {
          return {
            ...state.messageInfo[index],
            read: true
          };
        }
      );
      return {
        ...state,
        count: 0,
        messageInfo: newAllReadMessageInfo
      };
    }

    default:
      return state;
  }
};

export default platformHeader;
