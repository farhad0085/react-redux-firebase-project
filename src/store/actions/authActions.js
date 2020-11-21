import * as Types from './actionTypes'

export const signIn = ({email, password}) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log("Login success");
        dispatch({type: Types.LOGIN_SUCCESS})
    })
    .catch(err => {
        console.log("Login failed", err);

        dispatch({type: Types.LOGIN_ERROR, err})
    })

}

export const signOut = () => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    console.log("Signout called");

    firebase.auth().signOut()
    .then(() => {
        console.log("Signout success");
        dispatch({type: Types.SIGNOUT_SUCCESS})
    })
}