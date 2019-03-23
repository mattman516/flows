import { connect } from "react-redux";
import { onAddBadges, onAppExpandToggle } from "../actions/headers";
import { onToggleSearchPane } from "../actions/sidebars";
import { onOpenSignIn } from "../actions/userinfo";
import PlatformHeader from "../../../components/headers/PlatformHeader";

// import PlatformHeader from "@bit/mnestler516.prototype-comps.platform-header";
import {
  onNotificationExpandToggle2,
  onNotificationExpandToggle
} from "../actions/dialogs";
import NotificationExpanderContainer from "./NotificationExpanderContainer";
import NotificationExpanderContainer2 from "./NotificationExpanderContainer2";
import AppExpanderContainer from "./AppExpanderContainer";
import MessageSidebarContainer from "./MessageSidebarContainer";
import SignInExpander from "../../signin/SignInExpanderContainer";

const mapStateToProps = (state, props) => ({
  appOpen: state.platformHeader.appExpandOpen,
  countNoti: state.platformNotifications.count,
  noti1Open: state.platformNotifications.notificationsOpen,
  noti2Open: state.platformNotifications.notificationsOpen2,
  signInOpen: state.platformUserInformation.signInOpen,
  NotificationExpander: NotificationExpanderContainer,
  NotificationExpander2: NotificationExpanderContainer2,
  SearchBarContainer: MessageSidebarContainer,
  AppExpander: AppExpanderContainer,
  SignInExpander: SignInExpander,
  userInfo: state.platformUserInformation.userInfo
});

const mapDispatchToProps = dispatch => ({
  handleSidebarClose: () => dispatch(onToggleSearchPane()),
  toggleAppOpen: () => dispatch(onAppExpandToggle()),
  toggleNoti1Open: () => dispatch(onNotificationExpandToggle()),
  toggleNoti2Open: () => dispatch(onNotificationExpandToggle2()),
  toggleSignIn: event => dispatch(onOpenSignIn(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlatformHeader);
