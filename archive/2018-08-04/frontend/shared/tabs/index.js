import React from "react";
import styles from './styles.module.css';

export default class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  render() {
    return <div>
      <div className={styles.tabs}>
        {this.props.tabs.map((t, i) => {
          const className = this.state.activeTab === i ? styles.activeTab : styles.tab;
          return <div
            key={t.title}
            className={className}
            onClick={() => {this.setState({activeTab: i})}}
          >{t.title}</div>
        })}
      </div>
      <div>
        {this.props.tabs[this.state.activeTab].content()}
      </div>
    </div>
  }
}
