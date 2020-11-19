import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { createFirestoreInstance, reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import firebaseConfig from '../config/firebaseConfig'



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig)
    )
)


const rrfProps = {
    firebaseConfig,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance
}


export { store, rrfProps }