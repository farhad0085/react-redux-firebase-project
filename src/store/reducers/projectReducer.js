import * as Types from '../actions/actionTypes'

const initialState = {
    projects: [
        {id: 1, title: 'Some title goes here', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit maiores."},
        {id: 2, title: 'Some title goes here', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit maiores."},
        {id: 3, title: 'Some title goes here', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit maiores."},
        {id: 4, title: 'Some title goes here', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit maiores."},
    ]
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