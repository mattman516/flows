import { connect } from "react-redux";
import MobileHeader from "../../../../components/spaces/SpacesMobileHeader";
import { allspaces } from "../../data";
import {loadCurrentItem, deleteCurrItem, onOpenDeleteDialog} from "../../actions/spaces"

const getItem = (id, spacestate) => {
  return spacestate.currItem
};

const getBackPath = (id, location, spacestate) => {
  if(spacestate.currItem){

    if (location.includes("/img")) {
      return location.replace("/img", "");
      // }else if(location.includes("/room")){
      //   return location.replace("/room", "");
    } else if(location.includes("/resources")){
      return location.replace("/resources", "");
    }else if (location.includes("/new/room")) {
      return location.replace("/new/room", "");
    } else if (location.includes("/new/building")) {
      return location.replace("/new/building", "");
    } else if (location.includes("/new/campus")) {
      return location.replace("/new/campus", "");
    } else {
      let currItem = getItem(id, spacestate);
      if (currItem.parentid !== null) return "/spaces/" + spacestate.institutionId + "/" + currItem.parentid;
      else return "/spaces/" + spacestate.institutionId;
    }
  }else{
    return "";
  }
};

const getAddPath = (ownProps, spacestate) => {
  if(spacestate.currItem)
  {
    if (
      !isAddition(ownProps.location.pathname) &&
      getType(spacestate, ownProps) !== "partition"
    ) {
      let currItem = getItem(ownProps.match.params.id, spacestate);
      return "/spaces/" + spacestate.institutionId + "/" + currItem.id + "/new/" + getType(spacestate, ownProps);
    }
  }
  return "";
};

const isAddition = location => {
  return location.includes("/new");
};
const isView = location => {
  return location.includes("/view");
};

const getType = (spacestate, ownProps) => {
  if(spacestate.currItem)
    return (
      /**
      |--------------------------------------------------
      | state.spaces.newLayout ||
      | state.spaces.
      |--------------------------------------------------
      */
      spacestate.newItem.newType ||
      spacestate.allTypes[
        spacestate.allTypes.findIndex(
          item =>
            item === getItem(ownProps.match.params.id, spacestate).type
        ) + 1
      ]
    );
};

const getTitle = (ownProps, spacestate) => {
  if(spacestate.currItem){
    if (isAddition(ownProps.location.pathname)) return "Create New Space";
    else if (isView(ownProps.location.pathname)) return "";
    else return getItem(ownProps.match.params.id, spacestate).name;
  }
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.spaces.loading,
  title: getTitle(ownProps, state.spaces),
  parentid: state.spaces.currItem ? state.spaces.currItem.parentid : "",
  backPath: ownProps.match
    ? getBackPath(
        ownProps.match.params.id,
        ownProps.location.pathname,
        state.spaces
      )
    : "",
  addPath: ownProps.match
    ? getAddPath(ownProps, state.spaces)
    : getAddPath("", ""),
  count: 0,
  transparent: isView(ownProps.location.pathname),
  whiteHeader: isAddition(ownProps.location.pathname),
  currItem: getItem("", state.spaces),
  openDelete: state.spaces.openDelete
});

const mapDispatchToProps = dispatch => ({
  updateData: (id) => {
    dispatch(loadCurrentItem(id));
  }, 
  deleteCurrItem: (item) => {
    dispatch(deleteCurrItem(item));
    dispatch(onOpenDeleteDialog());
  },
  toggleOpenDelete: () => {
    dispatch(onOpenDeleteDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileHeader);
