import * as Types from './actionTypes'

export const createProject = project => (dispatch, { getFirebase, getFirestore }) => {

    dispatch({ type: Types.CREATE_PROJECT, project })
}