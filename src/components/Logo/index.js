import React from 'react';
import styles from './index.module.css';
const assign = require("object-assign")
import {pulse} from '../../utils/pulse.module.css';

export default (props) => {
  return <div className={styles.container} style={assign({
  }, props.style || {})}>
    <a
      style={{
        textDecoration: 'none',
      }}
      className={pulse}
      href='/'><div className={styles.logo200} /></a>
  </div>
}
