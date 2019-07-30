import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import statsReducer from './store/reducers/statsReducer'
import liveMatchesReducer from './store/reducers/liveMatches';
import generalModalReducer from './store/reducers/generalModalControl';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import  thunk  from "redux-thunk";
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  generalModalControl: generalModalReducer,
  liveMatches: liveMatchesReducer,
  statsReducer: statsReducer
})

const store = createStore(rootReducer,  applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
