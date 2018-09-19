import React from "react";
import SocialButton from '../SocialButton/';
import styles from './styles.module.css';
export default class MailingListHalf extends React.Component {
  render(){
    return <div className={styles.container}>
        <div
          className={styles.list}
        >
          <h1 style={{color: '#000'}}>Join My Mailing List,</h1>
          <h3 style={{color: '#000'}}>Because I would like you to join my mailing list</h3>
          <SocialButton
            href='http://richsoni.com/subscribe'
            service='envelope'
          >
            <span style={{marginLeft: 10}}>Sign Up</span>
          </SocialButton>
      </div>
    </div>
  }
}
