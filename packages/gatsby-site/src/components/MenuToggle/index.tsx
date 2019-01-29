import React from 'react';
const styles = require('./index.module.css');
import theme from '../../utils/themeVars';
const {pulse} = require('../../utils/pulse.module.css');

type Props = {
  onToggle: any,
  toggleState: any,
}

type State = {

}

export default class MenuToggle extends React.Component<Props, State> {
  public readonly state: State = {
  
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
