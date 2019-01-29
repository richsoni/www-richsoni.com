import React from 'react';
import assign from 'object-assign';
const styles = require('./style.module.css');
const hoverDim =  require('../../styles/hoverDim.module.css');

type Props = {
  service: string,
  href: string,
  style?: any,
}

type State = {}

export default class SocialButton extends React.Component <Props, State>{
  public readonly state: State ={}

  render(){
    return <li
      className={`${styles.container} ${hoverDim.hoverDim}`}
      style={assign({listStyle: 'none'},this.props.style)}
    >
      <a
        title={this.props.service}
        href={this.props.href}
        className={styles.a}
      >
        <i className={`fa fa-${this.props.service}`}></i>
        <span>{this.props.children}</span>
      </a>
    </li>
  }
}
