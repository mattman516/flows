import { connect } from "react-redux";
import {
  onNotificationExpandToggle,
  onNotificationExpandToggle2
} from "../actions/dialogs";
import { onAppExpandToggle } from "../actions/headers";
import { onOpenSignIn } from "../actions/userinfo";
import MobileNavSidebar from "../../../components/sidebars/MobileNavSidebar";
import { toolInfo } from "../../../data";

const getAction = clickeditem => {
  if (clickeditem.id === "not1") return onNotificationExpandToggle();
  else if (clickeditem.id === "not2") return onNotificationExpandToggle2();
  else if (clickeditem.id === "apps") return onAppExpandToggle();
  else if (clickeditem.id === "user") return onOpenSignIn();
  else return onOpenSignIn();
};

const mapStateToProps = (state, props) => ({
  ...props,
  open:
    props.open &&
    !state.platformNotifications.notificationsOpen &&
    !state.platformNotifications.notificationsOpen2 &&
    !state.platformHeader.appExpandOpen &&
    !state.platformUserInformation.signInOpen,
  toolInfo: toolInfo,
  username: state.platformUserInformation.userInfo.loggedIn ? state.platformUserInformation.userInfo.name : 'User',
  avatarSrc: state.platformUserInformation.userInfo.loggedIn ? state.platformUserInformation.userInfo.avatarSrc : null,
  count: state.platformNotifications.count,
});

const mapDispatchToProps = dispatch => ({
  handlePlatformNavChange: clickeditem => dispatch(getAction(clickeditem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNavSidebar);
