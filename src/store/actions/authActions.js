import * as Types from './actionTypes'

export const signUp = ({ email, password, firstName, lastName }) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                return firestore.collection('users').doc(res.user.uid).set({
                    firstName: firstName,
                    lastName: lastName,
                    initials: firstName[0] + lastName[0]
                })
            })
            .then(() => {
                dispatch({type: Types.SIGNUP_SUCCESS})
            })
            .catch(err => {
                dispatch({type: Types.SIGNUP_ERROR, err})
            })
    }
}

export const signIn = ({ email, password }) => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("Login success");
            dispatch({ type: Types.LOGIN_SUCCESS })
        })
        .catch(err => {
            console.log("Login failed", err);

            dispatch({ type: Types.LOGIN_ERROR, err })
        })

}

export const signOut = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    console.log("Signout called");

    firebase.auth().signOut()
        .then(() => {
            console.log("Signout success");
            dispatch({ type: Types.SIGNOUT_SUCCESS })
        })
}