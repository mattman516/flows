//Search Sidebar
export const onToggleSearchPane = (item) => ({
    type: "ON_TOGGLE_SEARCH_PANE",
    item
});

export const onHandleMessageAction = (event, payload) => ({
    type: "ON_ADD_MESSAGE", appId:"align4",
    event, payload
});
export const onHandleSearchAction = (event, appId) => ({
    type: "ON_HANDLE_SEARCH_ACTION", appId,
    event
});
