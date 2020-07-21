import { combineReducers } from 'redux'
import { GET_USERS_SUCCESS, SEND_MESSAGE, USER_EDIT_PROFILE, GET_MESSAGES_SUCCESS, GET_MESSAGES_BY_USER_ID } from './actions'

const initialState = {
    users: [],
    messages: []
}

export function users(state = initialState.users, action) {
    switch(action.type) {
        case GET_USERS_SUCCESS:
            return action.users
        case USER_EDIT_PROFILE:

            return state
        default:
            return state
    }
}

export function messages(state = initialState.messages, action) {
    switch(action.type) {
        case GET_MESSAGES_SUCCESS:
            return action.messages
        case SEND_MESSAGE:

            return state
        case GET_MESSAGES_BY_USER_ID:
            let messagesByUser = []

            return messagesByUser
        default:
            return state
    }
}


export const app = combineReducers({ users, messages })