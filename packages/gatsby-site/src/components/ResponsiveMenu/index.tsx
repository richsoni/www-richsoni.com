import React from 'react';
import Media from 'react-media';
import {RESPONSIVE_THRESHOLD} from './constants';
import OverlayMenu from '../OverlayMenu/';
import FixedMenu from '../FixedMenu/';
import MenuToggle from '../MenuToggle/';
import Logo from '../Logo/';

type Props = {}

type State = {
  toggleState: boolean
}


export default class ResponsiveMenu extends React.Component<Props, State> {
  public readonly state: State = {
    toggleState: false
  }

  render() {
    const {
      toggleState,
    } = this.state;

    return (
      <div>
        <Media query={{ maxWidth: RESPONSIVE_THRESHOLD }}>
          <OverlayMenu display={toggleState} />
        </Media>
        <Media query={{ minWidth: RESPONSIVE_THRESHOLD }}>
          <FixedMenu showNavMenu={toggleState} />
        </Media>
        <Logo style={{position: 'fixed'}} />
        <MenuToggle toggleState={toggleState} onToggle={this.onToggle.bind(this)} />
      </div>
    );
  }

  onToggle(){
    this.setState({
      toggleState: !this.state.toggleState,
    })
  }
}
