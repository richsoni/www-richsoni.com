import React from "react"
const styles = require('./styles.module.css')

const initialState = { activeTab: 0 }
type State = Readonly<typeof initialState>

type TabsType = {
  content: () => JSX.Element,
  title: string
}

type Props = {
  tabs: Array<TabsType>
}

export default class Tabs extends React.Component<Props, State> {
  readonly state: State = initialState

  render() {
    const activeTab = this.props.tabs[this.state.activeTab];
    return <div>
      <div className={styles.tabs}>
        {this.props.tabs.map((t: any, i: any) => {
          const className = this.state.activeTab === i ? styles.activeTab : styles.tab;
          return <div
            key={t.title}
            className={className}
            onClick={() => {this.setState({activeTab: i})}}
          >{t.title}</div>
        })}
      </div>
      <div>
        {activeTab ? activeTab.content() : ''}
      </div>
    </div>
  }
}
