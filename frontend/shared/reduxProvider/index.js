import React from 'react';
import {Provider, connect} from 'react-redux';
import store from '../../data/store';

export default (props) => {
  return <Provider store={store}>
    {props.children}
  </Provider>
};
