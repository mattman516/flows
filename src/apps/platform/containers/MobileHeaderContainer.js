import { connect } from 'react-redux'
// import { onNotificationExpandToggle } from '../actions/dialogs'
import MobileHeader from '../../../components/headers/MobileHeader'
// import MobileHeader from '@bit/mnestler516.prototype-comps.mobile-header'
import { appInfo } from '../../../data'

const mapStateToProps = (state, props) => ({
    ...props,
    count: state.platformNotifications.count,
    appExpandOpen: state.platformHeader.appExpandOpen,
    appInfo: appInfo
  })

const mapDispatchToProps = dispatch => ({
    // toggleOpen: () => dispatch(onNotificationExpandToggle()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileHeader)