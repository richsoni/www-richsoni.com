import React from "react";
const styles = require('./styles.module.css');

type Props = {
  style: any,
}

type State = {

}

export default class Half extends React.Component<Props, State>{
  render(){
    return <section className={styles.half} style={this.props.style}>
      {this.props.children}
    </section>
  }
}
