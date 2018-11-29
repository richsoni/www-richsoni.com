"use strict"
const React        = require('react')
const SocialButton = require("../../shared/socialButton/component")

class Footer extends React.Component {
  render() {
    return <footer
      style={{
        display: 'block',
        position: 'fixed',
        backgroundColor: 'white',
        overflow: 'hidden',
        color: 'black',
        width: '100%',
        bottom: 0,
        left: 0,
        boxShadow: '0 -3px 14px rgba(0, 0, 0, 0.35)',
      }}
    >
      <nav className='social-buttons'
        style={{
          display: 'block',
          width: '100%',
          clear: 'both',
          textAlign: 'center',
          fontSize: '.75em',
        }}
      >
      <SocialButton style={{display: 'inline-block'}} service='spotify' href='https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O' />
      <SocialButton style={{display: 'inline-block'}} service='soundcloud' href='https://soundcloud.com/richsoni' />
      <SocialButton style={{display: 'inline-block'}} service='play' href='https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q' />
      <SocialButton style={{display: 'inline-block'}} service='twitter' href='https://twitter.com/richsoni'/>
      <SocialButton style={{display: 'inline-block'}} service='facebook' href='https://www.facebook.com/richsonimusic/'/>
      <SocialButton style={{display: 'inline-block'}} service='github' href='https://github.com/richsoni'/>
        <SocialButton
          href='http://richsoni.com/subscribe'
          service='envelope'
        >
          &nbsp;Sign Up
        </SocialButton>
      </nav>
      <div style={{
        display: 'block',
        width: '100%',
        clear: 'both',
        textAlign: 'center',
        fontSize: '.75em',
        marginTop: '.5em',
      }}>Copyright {new Date().getFullYear()} RichSoni, LLC</div>
    </footer>
  }
}

module.exports = Footer
