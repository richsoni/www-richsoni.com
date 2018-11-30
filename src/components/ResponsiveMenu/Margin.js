import React from 'react';
import Media from 'react-media';
import {RESPONSIVE_THRESHOLD} from './constants';

const small = {
  display: 'block',
  width: '100%',
  height: 70,
};

const normal = {
  display: 'block',
  width: '100%',
  height: 0,
};

export default class Margin extends React.Component {
  render(){
    return (
      <div>
        <Media query={{ maxWidth: RESPONSIVE_THRESHOLD }}>
          <div style={small} />
        </Media>
        <Media query={{ minWidth: RESPONSIVE_THRESHOLD }}>
          <div style={normal} />
        </Media>
      </div>
    )
  }
}
