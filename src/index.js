import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from "react-redux";
import {store, rrfProps } from './store';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebaseConfig from './config/firebaseConfig'




ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps} firebase={firebaseConfig}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

