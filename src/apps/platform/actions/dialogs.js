
export const onNotificationExpandToggle = (event) => ({
    type: "ON_NOTIFICATION_EXPAND_TOGGLE"
});
export const onNotificationExpandToggle2 = (event) => ({
    type: "ON_NOTIFICATION_EXPAND_TOGGLE2"
});
export const handleAddNotification = (payload) => ({
    type: "ON_ADD_NOTIFICATION", payload
});
export const onToggleNotificationRead = (key) => ({
    type: "ON_TOGGLE_NOTIFICATION_READ", key
})
export const onToggleReadNotifications = () => ({
    type: "ON_TOGGLE_READ_NOTIFICATIONS_OPEN"
})
export const onHandleReadAll = () => ({
    type: "ON_HANDLE_READ_ALL"
})
export const onHandleSnackbarClose = ( appId) => ({
    type: "ON_HANDLE_CLOSE_SNACKBAR", appId
});
export const onMessageSidebarToggle = (item) => ({
    type: "ON_MESSAGE_SIDEBAR_TOGGLE", item
});
export const onMessageExpandToggle = (event) => ({
    type: "ON_MESSAGE_EXPAND_TOGGLE", event
});
export const handleAddMessage = (event, payload, appId) => ({
    type: "ON_ADD_MESSAGE", event, payload, appId
});
export const onToggleMessageRead = (key) => ({
    type: "ON_TOGGLE_MESSAGE_READ", key
})
export const onHandleReadAllMessages = () => ({
    type: "ON_HANDLE_READ_ALL_MESSAGES"
})
export const onNotificationExpandTabChange = (event, value) => ({
    type: "ON_NOTIFICATION_EXPAND_TAB_CHANGE", event, value
})