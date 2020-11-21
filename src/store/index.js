import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import firebaseConfig from '../config/firebaseConfig'



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebaseConfig, {attachAuthIsReady: true}), // redux binding for firebase
        reduxFirestore(firebaseConfig),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)



export default store