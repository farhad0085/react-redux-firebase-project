import * as Types from '../actions/actionTypes'

const initialState = {
    authErrorSignIn: '',
    authErrorSignUp: ''
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        
        case Types.LOGIN_ERROR: {
            return {
                ...state,
                authErrorSignIn: action.err.message
            }
        }

        case Types.LOGIN_SUCCESS: {
            return {
                ...state,
                authErrorSignIn: ''
            }
        }
        case Types.SIGNUP_SUCCESS: {
            console.log("Signup success");
            return {
                ...state,
                authErrorSignUp: ''
            }
        }

        case Types.SIGNUP_ERROR: {
            console.log("Signup error", action.err);
            return {
                ...state,
                authErrorSignUp: action.err.message
            }
        }

        case Types.SIGNOUT_SUCCESS: {
            return state
        }

        default: return state
    }
}

export default authReducer