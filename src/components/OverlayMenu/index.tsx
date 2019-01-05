import React from 'react';
const style = require('./style.module.css');
import navItems from '../ResponsiveMenu/nav-items';
import socialButtons from '../ResponsiveMenu/social-items';
import SocialButton from '../SocialButton/';

const SocialButtons = socialButtons.map((sb) =>
  <SocialButton key={sb.service} service={sb.service} href={sb.href}>{sb.value || ''}</SocialButton>
);

const NavItems = navItems.map((ni) =>
  <a key={ni.url} className={style.navItem} href={ni.url}>{ni.title}</a>,
);


export default (props: any) => {
  const {display} = props;
  if(!display) { return(<div></div>);}
  return (
    <div className={style.overlay}>
      {NavItems}
      <div className={style.social}>{ SocialButtons }</div>
      <div className={style.copyright}> Copyright {new Date().getFullYear()} RichSoni, LLC</div>
    </div>
  )
}
