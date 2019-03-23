var startingState = {
    badges : 0,
    appExpandOpen: false
  }
  
const platformHeader = (state=startingState, action) => {
    switch (action.type) {
        case 'ON_ADD_BADGES':
        {
            return {
                ...state,
                badges: (state.badges === 10) ? 0 : state.badges+1
            }
        }

        case 'ON_APP_EXPAND_TOGGLE': 
        {
            return {
                ...state,
                appExpandOpen: !state.appExpandOpen
            }
        }
        
        default:
            return state
    }
}
  
  export default platformHeader