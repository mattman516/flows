import { connect } from 'react-redux'
import SearchBar from '../../../components/sidebars/SidebarComponents/Searchbar'
import {  onHandleSearchAction } from "../actions/sidebars";

const mapStateToProps = (state, props) => ({
    ...props,
    open: state.align4navExpanderReducer.isNavMenuOpen,
})

const mapDispatchToProps = dispatch => ({
    handleSearchAction: (event, appId) => dispatch(onHandleSearchAction(event, appId))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)