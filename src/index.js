import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container.jsx';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import configureStore from './store/index.jsx'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Container/>
</Provider>, document.getElementById('root'));