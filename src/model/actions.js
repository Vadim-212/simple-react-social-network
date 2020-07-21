// export const ADD_USER = "ADD_USER"
// export const FIND_USER = "FIND_USER"
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS"
export const SEND_MESSAGE = "SEND_MESSAGE"
export const USER_EDIT_PROFILE = "USER_EDIT_PROFILE"
export const GET_MESSAGES_BY_USER_ID = "GET_MESSAGES_BY_USER_ID"

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

export function getMessagesByUserId(userId) {
    return {
        type: GET_MESSAGES_BY_USER_ID,
        userId
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