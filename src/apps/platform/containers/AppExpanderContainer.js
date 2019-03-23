import { connect } from "react-redux";
import { onAppExpandToggle } from "../actions/headers";
import { AppExpander } from "../../../components/dialogs/AppExpander";
import { appInfo } from "../../../data";

const mapStateToProps = (state, props) => ({
  ...props,
  open: state.platformHeader.appExpandOpen,
  appInfo: appInfo
});

const mapDispatchToProps = dispatch => ({
  toggleOpen: () => dispatch(onAppExpandToggle())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppExpander);
