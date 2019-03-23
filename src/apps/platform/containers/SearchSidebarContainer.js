import { connect } from 'react-redux'
import { onToggleSearchPane, onHandleMessageAction } from '../actions/sidebars'
// import SearchSidebar from '../../components/sidebars/SearchSidebar'
import MessageSidebar from '../../../components/sidebars/MessageSidebar'
import { handleAddNotification } from '../actions/dialogs';



const sorted = (info) => {
  var sortedKeys = Object.keys(info).sort(function(a,b) {
    a = info[a].time;
    b = info[b].time;
    return a<b ? -1: a>b ? 1: 0;
  })
  return sortedKeys.map((item) => {return info[item]})
}

const createMessage = (message, item) => {
  return {
    type: "message",
    read: false,
    time: new Date(),
    title: "LastName, FirstName",
    app: "Align 4",
    path: "/align4/Course/" + item.id,
    icon: "subject",
    message: message,
    courseId: item.id,
    courseCode: item.code,
    courseName: item.name
  };
};

const mapStateToProps = (state) => ({
  isSearchOpen: false,
  searchedItems: sorted(state.platformMessages.messageInfo).map(item => {return item["message"] || item}),
  item: state.searchSidebar.item
})

const mapDispatchToProps = dispatch => ({
  handleSidebarClose: () => dispatch(onToggleSearchPane()),
  handleSearchAction: (event, item) => {
    if(event.keyCode === 13){
      dispatch(onHandleMessageAction(event,createMessage(event.target.value, item)));
    }
  }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageSidebar)