import { connect } from 'react-redux'
import Snackbar from '../../../components/dialogs/Snackbar'
import {  onHandleSnackbarClose } from "../actions/dialogs";

const mapStateToProps = (state, props) => ({
    ...props,
    open: state.align4tableView.firstView === 1,
})

const mapDispatchToProps = dispatch => ({
    handleClose: ( appId) => dispatch(onHandleSnackbarClose( appId))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Snackbar)