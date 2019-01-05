import React from 'react';
const styles = require('./index.module.css');
const assign = require("object-assign")
const {pulse} = require('../../utils/pulse.module.css');

export default (props: any) => {
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
