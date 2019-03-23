var startingState = {
  isSearchOpen : false,
  searchedItems: [],
  item: null
}

const searchSidebar = (state=startingState, action) => {
  switch (action.type) {
    case 'ON_TOGGLE_SEARCH_PANE':
    {
      if (state.isSearchOpen)
        return {
          ...state,
          isSearchOpen: false,
          searchedItems: state.searchedItems,
          item: null
        }
      else 
        return {
          ...state,
          isSearchOpen: true,
          searchedItems: action.item ? action.item.messages : state.searchedItems,
          item: action.item
        }
    }

    case 'ON_ADD_MESSAGE':
    {
      // if(action.event.keyCode === 13){
      //   return {
      //     ...state,
      //     searchedItems: [
      //       ...state.searchedItems,
      //       action.event.target.value
      //     ]
      //   }
      // }
      // return state;
    }
      
    default:
      return state
  }
}

export default searchSidebar