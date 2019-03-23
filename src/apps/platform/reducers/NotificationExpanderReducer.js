var startingState = {
  notificationInfo: {},
  notificationsOpen: false,
  notificationsOpen2: false,
  readNotificationsOpen: false,
  readNotificationsOpen2: false,
  count: 0,
  tabValue: 0
};

const platformHeader = (state = startingState, action) => {
  switch (action.type) {
    case "ON_NOTIFICATION_EXPAND_TOGGLE": {
      return {
        ...state,
        notificationsOpen: !state.notificationsOpen
      };
    }
    case "ON_NOTIFICATION_EXPAND_TOGGLE2": {
      return {
        ...state,
        notificationsOpen2: !state.notificationsOpen2
      };
    }

    case "ON_ADD_NOTIFICATION": {
      // if(action.id){
      var newAddNotificationInfo = {
        ...state.notificationInfo
      };
      var newId = Math.random().toString()
      newAddNotificationInfo[newId] = action.payload;
      newAddNotificationInfo[newId].id = newId
      // }
      return {
        ...state,
        notificationInfo: newAddNotificationInfo,
        count: state.count + 1
      };
    }

    case "ON_TOGGLE_NOTIFICATION_READ": {
      var newToggleNotificationInfo = {
        ...state.notificationInfo
      };
      newToggleNotificationInfo[action.key].read = !newToggleNotificationInfo[
        action.key
      ].read;
      return {
        ...state,
        notificationInfo: newToggleNotificationInfo,
        count: state.count > 0 ? state.count - 1 : 0
      };
    }

    case "ON_TOGGLE_READ_NOTIFICATIONS_OPEN":
      return {
        ...state,
        readNotificationsOpen: !state.readNotificationsOpen
      };

    case "ON_HANDLE_READ_ALL": {
      var newAllReadNotificationInfo = Object.keys(state.notificationInfo).map(
        index => {
          return {
            ...state.notificationInfo[index],
            read: true
          };
        }
      );
      return {
        ...state,
        count: 0,
        notificationInfo: newAllReadNotificationInfo
      };
    }
    case "ON_NOTIFICATION_EXPAND_TAB_CHANGE": {
      return {
        ...state,
        tabValue: action.value
      }
    }

    default:
      return state;
  }
};

export default platformHeader;
