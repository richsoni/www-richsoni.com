import React from "react";
import styles from './styles.module.css';

export default class Half extends React.Component{
  render(){
    return <section className={styles.half} style={this.props.style}>
      {this.props.children}
    </section>
  }
}
