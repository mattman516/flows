import { connect } from "react-redux";
import { onToggleSearchPane, onHandleMessageAction } from "../actions/sidebars";
// import SearchSidebar from '../../components/sidebars/SearchSidebar'
import MobileMessageSidebar from "../../../components/sidebars/MobileMessageSidebar";
import { handleAddMessage, onMessageSidebarToggle } from "../actions/dialogs";

const sorted = info => {
  var sortedKeys = Object.keys(info).sort(function(a, b) {
    a = info[a].time;
    b = info[b].time;
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return sortedKeys.map(item => {
    return info[item];
  });
};

const filtered = (info, course) => {
  if (course) {
    var filteredKeys = Object.keys(info).filter(
      item => info[item].courseId === course.id
    );
    return filteredKeys.map(item => {
      return info[item];
    });
  }
  return [];
};

const createMessage = (message, item) => {
  return {
    type: "message",
    read: false,
    time: new Date(),
    title: "LastName, FirstName",
    app: "Align 4",
    path: "/align4/Course/" + item.id,
    icon: "face",
    message: message,
    courseId: item.id,
    courseCode: item.code,
    courseName: item.name
  };
};

const mapStateToProps = state => ({
  open: state.platformMessages.messagesOpen1,
  items: sorted(
    filtered({...state.platformMessages.messageInfo, ...state.platformNotifications.notificationInfo}, state.platformMessages.item)
  ),
  count: state,
  item: state.platformMessages.item
});

const mapDispatchToProps = dispatch => ({
  handleSidebarClose: () => dispatch(onMessageSidebarToggle()),
  handleMessageAction: (event, item) => {
    if (event.keyCode === 13) {
      dispatch(
        handleAddMessage(event, createMessage(event.target.value, item), "align4")
      );
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMessageSidebar);
