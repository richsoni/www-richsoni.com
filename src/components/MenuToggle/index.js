import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import theme from '../../utils/themeVars';
import {pulse} from '../../utils/pulse.module.css';

export default class MenuToggle extends React.Component {
  static propTypes = {
    onToggle: PropTypes.func
  }

  static deafultProps = {
    onToggle: (() => {}),
  }

  render(){
    const {
      onToggle,
      toggleState,
    } = this.props;

    return <a
      className={styles.container}
      onClick={onToggle}
    >
      <span
        className={"fa-stack fa-lg "+pulse}
      >
        <i style={{color: 'black'}} className="fa fa-circle fa-stack-2x"></i>
        <i
          className='fa fa-reorder fa-stack-1x'
          style={{
            color: theme.bgColor,
            transitionProperty: 'font-size',
            transitionDuration: '.5s',
            fontSize: toggleState ? 0 : '1em',
          }}
        ></i>
        <i
          className='fa fa-close fa-stack-1x'
          style={{
            color: theme.bgColor,
            transitionProperty: 'font-size',
            transitionDuration: '.5s',
            fontSize: toggleState ? '1em' : 0,
          }}
        ></i>
      </span>
    </a>
  }
}
