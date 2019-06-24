//loading class from the node modules folder -> "react" class
import React from 'react';
//loading class from the node modules folder -> "react-dom" class
import ReactDOM from 'react-dom';
//loading index.css from the the root folder "src"
import './index.css';
//loading App class out of the App.js file from the the root folder "src" 
import App from './App';
import * as serviceWorker from './serviceWorker';
//targetting the Main class "App.js" with the Id "root" (see index.html)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
