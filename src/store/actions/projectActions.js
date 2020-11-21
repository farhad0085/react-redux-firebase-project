import * as Types from './actionTypes'

export const createProject = project => (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore()

    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    

    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
    })
    .then(() => {
        dispatch({ type: Types.CREATE_PROJECT, project })


        // create new notification object
        firestore.collection('notifications').add({
            content: 'Added a new project',
            user: `${profile.firstName} ${profile.lastName}`,
            time: new Date()
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))


    })
    .catch(err => {
        console.log(err);
        dispatch({ type: Types.CREATE_PROJECT_ERROR, err})
    })
}