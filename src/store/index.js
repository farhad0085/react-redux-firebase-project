import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import firebaseConfig from '../config/firebaseConfig'


const rrfConfig = {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true
}


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, rrfConfig), // redux binding for firebase
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)



export default store