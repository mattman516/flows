import { connect } from "react-redux";
import {
  onNotificationExpandToggle,
  onToggleNotificationRead,
  onToggleReadNotifications,
  onHandleReadAll,
  onNotificationExpandTabChange
} from "../actions/dialogs";
import { NotificationExpander } from "../../../components/dialogs/NotificationExpander";
// import { appInfo } from '../../../data'

const sorted = (info) => {
  var sortedKeys = Object.keys(info).sort(function(a,b) {
    a = info[a].time;
    b = info[b].time;
    return a>b ? -1: a<b ? 1: 0;
  })
  return sortedKeys.map((item) => {return info[item]})
}

const mapStateToProps = (state, props) => ({
  ...props,
  notificationInfo: sorted(state.platformNotifications.notificationInfo),
  messageInfo: sorted(state.platformMessages.messageInfo),
  tabValue: state.platformNotifications.tabValue,
  open: state.platformNotifications.notificationsOpen,
  count: state.platformNotifications.count,
  readNotificationsOpen: state.platformNotifications.readNotificationsOpen
});

const mapDispatchToProps = dispatch => ({
  toggleOpen: () => dispatch(onNotificationExpandToggle()),
  toggleRead: key => dispatch(onToggleNotificationRead(key)),
  toggleReadNotifications: () => dispatch(onToggleReadNotifications()),
  handleReadAll: () => dispatch(onHandleReadAll()),
  onTabChange: (event, value) => dispatch(onNotificationExpandTabChange(event, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationExpander);
