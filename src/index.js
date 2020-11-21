import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from "react-redux";
import store from './store';
import Loading from './components/others/Loading'


ReactDOM.render(
    <div className="container center m5">
        <br />
        <br />
        <br />
        <Loading color="#ff0000" />
    </div>,
    document.getElementById('root')
);


store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
})



