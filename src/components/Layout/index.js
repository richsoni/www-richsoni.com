import React from "react";
import ResponsiveMenu from '../ResponsiveMenu/';
import Footer from '../Footer/';
import BaseMeta from '../BaseMeta';
import styles from './index.module.css';

export default ({ children }) => (
  <div className={styles.site}>
    <BaseMeta />
    <ResponsiveMenu />
    <div className={styles.content}>
      { children }
    </div>
    <Footer />
  </div>
);
