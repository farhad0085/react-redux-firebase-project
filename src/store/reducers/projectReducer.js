import * as Types from '../actions/actionTypes'

const initialState = {
    projects: []
}

function projectReducer(state = initialState, action) {

    switch (action.type) {
        case Types.CREATE_PROJECT: {
            return state
        }
        case Types.CREATE_PROJECT_ERROR: {
            console.log(action.err);
            return state
        }
        default: return state
    }

}

export default projectReducer