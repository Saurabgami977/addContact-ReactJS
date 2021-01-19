import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import favouriteReducer from './store/reducers/favouriteReducer';
import submitReducer from './store/reducers/submitReducer';
import contactReducer from './store/reducers/contactReducer';

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  submit: submitReducer,
  contacts: contactReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <BrowserRouter basename={'addContact-ReactJS'}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
