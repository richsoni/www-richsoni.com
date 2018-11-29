import React from 'react';
import assign from 'object-assign';
import styles from './style.module.css';
import hoverDim from '../../styles/hoverDim.module.css';

export default class SocialButton extends React.Component{
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

SocialButton.propTypes = {
  service: React.PropTypes.string,
  href:  React.PropTypes.string,
  style: React.PropTypes.object,
}
SocialButton.defaultProps = {
  style: {},
}

