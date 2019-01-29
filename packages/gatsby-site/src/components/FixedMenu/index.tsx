const styles   = require('./index.module.css');
const hoverDim = require('../../styles/hoverDim.module.css');
import React from 'react';
import SocialButton from '../SocialButton/';
import navItems from '../ResponsiveMenu/nav-items';
import socialButtons from '../ResponsiveMenu/social-items';

const SocialButtons = socialButtons.map((sb) =>
  <SocialButton key={sb.href} service={sb.service} href={sb.href}>{sb.value || ''}</SocialButton>
);

const NavItems = navItems.map((ni) =>
  <div key={ni.url} className={hoverDim.hoverDim}>
    <a  className={styles.navItem} href={ni.url}>{ni.title}</a>
  </div>
);

type Props = {
  showNavMenu: boolean,
}
type State = {}

export default class FixedMenu extends React.Component<Props, State> {
  public readonly state: State = {}

  render() {
    const { showNavMenu } = this.props
    return (
      <header className={styles.header}>
        <div style={{ }}>
          <nav
            style={{
              right: showNavMenu ? 80 : -10000,
            }}
            className={`${styles.navItemsContainer}`}
          >
            { NavItems }
          </nav>
          <nav
            style={{
              right: !showNavMenu ? 64 : -10000,
            }}
            className={`${styles.socialButtonsContainer}`}
          >
            { SocialButtons }
          </nav>
        </div>
      </header>
    )
  }
}
