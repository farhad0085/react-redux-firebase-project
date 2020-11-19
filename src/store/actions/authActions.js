import * as Types from './actionTypes'

export const signIn = credentials => (dispatch, getFirebase) => {
    const firebase = getFirebase();

    firebase.auth.signInWithEmailAndPassword(
        ...credentials
    )
    .then(() => {
        console.log("Login success");
        dispatch({type: Types.LOGIN_SUCCESS})
    })
    .catch(err => {
        console.log("Login failed", err);

        dispatch({type: Types.LOGIN_ERROR, err})
    })

}