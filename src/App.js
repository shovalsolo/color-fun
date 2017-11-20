import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './component/box';
import BoxCon from './container/box-container';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import reducers from "./reducers/index"

let store = createStore(reducers,applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BoxCon></BoxCon>
        </Provider>
      </div>
    );
  }
}

export default App;
