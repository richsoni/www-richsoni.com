import React from "react";
import ResponsiveMenu from '../ResponsiveMenu/';
import ResponsiveMargin from '../ResponsiveMenu/Margin';
import Footer from '../Footer/';
import BaseMeta from '../BaseMeta';
const styles = require('./index.module.css');

type Props = {
  children: JSX.Element
}

const Layout: React.SFC<Props> = (props) => (
  <div className={styles.site}>
    <BaseMeta />
    <ResponsiveMenu />
    <ResponsiveMargin />
    <div className={styles.content}>
      { props.children }
    </div>
    <Footer />
  </div>
);

export default Layout;
