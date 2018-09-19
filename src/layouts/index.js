import React from "react";
import ResponsiveMenu from '../components/ResponsiveMenu/';
import Footer from '../components/Footer/';
import styles from './index.module.css';
import BaseMeta from '../components/BaseMeta';

export default ({ children }) => (
  <div className={styles.site}>
    <BaseMeta />
    <ResponsiveMenu />
    <div className={styles.content}>
      { children() }
    </div>
    <Footer />
  </div>
);
