export const onOpenSignIn = (event) => ({
    type: "ON_SIGN_IN_OPEN", event
});
export const onCloseSignIn = (event) => ({
    type: "ON_SIGN_IN_CLOSE", event
});
export const onPasswordChange = (value) => ({
    type: "ON_PASSWORD_CHANGE", value
});
export const onEmailChange = (value) => ({
    type: "ON_EMAIL_CHANGE", value
});
export const onSubmit = (value) => ({
    type: "ON_SUBMIT", value
});
export const onLogOut = () => ({
    type: "ON_LOG_OUT", 
});

