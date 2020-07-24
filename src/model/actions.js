export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS"
export const SEND_MESSAGE = "SEND_MESSAGE"
export const USER_EDIT_PROFILE = "USER_EDIT_PROFILE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export function fetchUsers() {
    return (dispatch) => {
        fetch('/users.json').then(response => response.json()).then(json => dispatch(getUsersSuccess(json)))
    }
}

export function getUsersSuccess(users) {
    return {
        type: GET_USERS_SUCCESS,
        users
    }
}

export function loginSuccess(userId) {
    return {
        type: LOGIN_SUCCESS,
        userId
    }
}

export function fetchMessages() {
    return (dispatch) => {
        fetch('/messages.json').then(response => response.json()).then(json => dispatch(getMessagesSuccess(json)))
    }
}

export function getMessagesSuccess(messages) {
    return {
        type: GET_MESSAGES_SUCCESS,
        messages
    }
}

export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        message
    }
}

export function userEditProfile(user) {
    return {
        type: USER_EDIT_PROFILE,
        user
    }
}