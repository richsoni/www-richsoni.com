import React from 'react';
import {Provider, connect} from 'react-redux';
import store from '../../data/store';

export const Provide = (attributes) => {
  return (props) => {
    const {
      Component,
      mapStateToProps,
      mapDispatchToProps,
    } = attributes;
    const Connected = connect(mapStateToProps, mapDispatchToProps)(Component)
    return <Provider store={store}>
      <Connected {...props} />
    </Provider>
  }
}
