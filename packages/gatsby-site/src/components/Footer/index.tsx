import React from 'react';
const style = require('./style.module.css');
import socialButtons from '../ResponsiveMenu/social-items';
import SocialButton from '../SocialButton/';
import Component from "@richsoni/storybook/dist/Component";

const SocialButtons = socialButtons.map((sb) =>
  <SocialButton
    service={sb.service}
    href={sb.href}
    key={sb.href}
    style={{marginBottom: 'none !important'}}
  >{sb.value || ''}</SocialButton>
);


export default () => {
  return (
    <div className={style.footer}>
      <div className={style.social}>{ SocialButtons }</div>
      <div className={style.copyright}> Copyright {new Date().getFullYear()} RichSoni, LLC</div>
      <Component />
    </div>
  )
}
