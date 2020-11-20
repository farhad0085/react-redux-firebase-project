import * as Types from './actionTypes'

export const createProject = project => (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore()
    firestore.collection('projects').add({
        ...project,
        authorFirstName: "Farhad",
        authorLastName: "Hossen",
        authorId: 3245,
        createdAt: new Date()
    })
    .then(() => {
        dispatch({ type: Types.CREATE_PROJECT, project })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: Types.CREATE_PROJECT_ERROR, err})
    })
}