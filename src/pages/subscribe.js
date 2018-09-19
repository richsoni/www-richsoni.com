import React from "react";
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import styles from './subscribeStyles.module.css';

export default class SubscribeIndex extends React.Component {
  render(){
    return <Content>
      <Breadcrumbs>
        <Breadcrumb>RichSoni Mailing List</Breadcrumb>
      </Breadcrumbs>
      <form
        action="//richsoni.us8.list-manage.com/subscribe/post?u=bc85e50b336a97670d097c9d0&amp;id=cd363f3412"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
        className={styles.form}
      >
        <p className={styles.p}>
          <label >Email Address</label>
          <input className={styles.input} type="email" name="EMAIL" />
        </p><p className={styles.p}>
          <label >First Name </label>
          <input className={styles.input} type="text" name="FNAME" />
        </p><p className={styles.p}>
          <label >Last Name </label>
          <input className={styles.input} type="text" name="LNAME" />
        </p>
        <div
          className={styles.hidden}
          ariaHidden="true"
        >
          <input type="text" name="b_bc85e50b336a97670d097c9d0_cd363f3412" tabIndex="-1" value="" />
        </div>
        <div><input className={styles.submit} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" /></div>
      </form>
    </Content>
  }
}

