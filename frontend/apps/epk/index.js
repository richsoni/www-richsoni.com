"use strict"
const React           = require("react")
const HF          = require("../../shared/header-footer/")
import style from './styles.module.css';
import SocialButton from "../../shared/socialButton/component";

export default class RootComponent extends React.Component {

  render(){
    return <HF className={style.background}>
      <div className={style.logoWrap}>
        <div className={style.logo}></div>
      </div>
      <div className={style.right}>
        <div className={style.social}>
          <SocialButton service='spotify' href='https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O'> 500+ Followers, 30+ Monthly Listens</SocialButton>
          <SocialButton service='youtube' href='https://youtube.com/richsoni'> 200+ Views </SocialButton>
          <SocialButton service='facebook' href='https://www.facebook.com/richsonimusic/'> 160+ Likes</SocialButton>
        </div>
        <div className={style.embed}>
          <iframe src="https://open.spotify.com/embed/artist/2ZmsHRFwH3sGTrarxwgK9O" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>

        </div>
      </div>
      <div className={style.bio}>
        <p>Rich Soni is a Singer/Songwriter from Montville, NJ.  He is passionate about local music, and hosts and attends Open Mic Nights and Writers in the Rounds as well as performs solo shows at coffee houses, breweries, and concert venues.</p>
        <p>His upcoming release: Safety Tapes Vol. 6 marks the completion of his 68th-78th original songs he wrote, recorded and produced himself.</p>
        <p>He is passions for local music extend to his new Podcast which explores recipes for fostering Organic Music within communities.</p>
        <ol>
          <li><a href='http://www.richsoni.com'>richsoni.com</a></li>
          <li><a href='http://www.instagram.com/richsoni'>instagram.com/richsoni</a></li>
          <li><a href='http://www.facebook.com/richsonimusic'>facebook.com/richsonimusic</a></li>
          <li><a href='http://www.twitter.com/richsoni'>twitter.com/richsoni</a></li>
          <li><a href='http://richsoni.bandcamp.com'>richsoni.bandcamp.com</a></li>
          <li><a href='http://youtube.com/richsoni'>youtube.com/richsoni</a></li>
        </ol>
      </div>

    </HF>
  }
}
