import * as Types from '../actions/actionTypes'

const initialState = {
    authError: ''
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        
        case Types.LOGIN_ERROR: {
            return {
                ...state,
                authError: action.err.message
            }
        }

        case Types.LOGIN_SUCCESS: {
            return {
                ...state,
                authError: ''
            }
        }

        case Types.SIGNOUT_SUCCESS: {
            return state
        }

        default: return state
    }
}

export default authReducer