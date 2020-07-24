import { combineReducers } from 'redux'
import { GET_USERS_SUCCESS, SEND_MESSAGE, USER_EDIT_PROFILE, GET_MESSAGES_SUCCESS, LOGIN_SUCCESS } from './actions'

const initialState = {
    users: [],
    messages: [],
    logged: 0
}

export function users(state = initialState.users, action) {
    switch(action.type) {
        case GET_USERS_SUCCESS:
            return action.users
        case USER_EDIT_PROFILE:
            state[action.user.id] = action.user
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
            if(action.message.text.length > 0) {
                state.push(action.message)
            }
            return state
        default:
            return state
    }
}

export function logged(state = initialState.logged, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return action.userId
        default:
            return state
    }
}

export const app = combineReducers({ users, messages, logged })