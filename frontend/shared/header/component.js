"use strict"
const React       = require('react')
const SocialButton = require("../../shared/socialButton/component")
const responsiveComponentComposer = require("../../shared/responsiveComponentComposer")
const assign = require("object-assign")
const Radium = require("radium")

class _SocialButtons extends React.Component {
  render(){
    return <nav className={this.props.className || ''} style={this.props.style || {}}>
      <SocialButton service='spotify' href='https://open.spotify.com/artist/2ZmsHRFwH3sGTrarxwgK9O' />
      <SocialButton service='soundcloud' href='https://soundcloud.com/richsoni' />
      <SocialButton service='play' href='https://play.google.com/store/music/artist/i.json?id=Ap23zu5ishxv26bjhwt3z5kwx4q' />
      <SocialButton service='twitter' href='https://twitter.com/richsoni'/>
      <SocialButton service='facebook' href='https://www.facebook.com/richsonimusic/'/>
      <SocialButton service='github' href='https://github.com/richsoni'/>
      <SocialButton
        href='http://richsoni.com/subscribe'
        service='envelope'
      >
      &nbsp;Sign Up
      </SocialButton>
    </nav>
  }
}
const SocialButtons = Radium(_SocialButtons)

class _MenuToggle extends React.Component {
  render(){
    return <a
      style={{
        position: 'fixed',
        display: 'block',
        top: 0,
        right: 0,
        zIndex: 5,
        height: '2.5em',
        cursor: 'pointer',
        color: 'white',
      }}
      onClick={this.props.onToggle.bind(this)}
    >
      <span
        className="fa-stack fa-lg pulse"
      >
        <i className="fa fa-circle fa-stack-2x"></i>
        <i
          className='fa fa-reorder fa-stack-1x'
          style={{
            color: 'black',
            transitionProperty: 'font-size',
            transitionDuration: '.5s',
            fontSize: this.props.showMenu ? 0 : '1em',
          }}
        ></i>
        <i
          className='fa fa-close fa-stack-1x'
          style={{
            color: 'black',
            transitionProperty: 'font-size',
            transitionDuration: '.5s',
            fontSize: this.props.showMenu ? '1em' : 0,
          }}
        ></i>
      </span>
    </a>
  }
}
const MenuToggle = Radium(_MenuToggle)

class Small extends React.Component {
  constructor(attrs){
    super()
    this.state = {
      showMenu: false
    }
  }
  render(){
    return <header style={{ fontSize: '1.5em', height: 70 }} >
        <Logo />
        <MenuToggle showMenu={this.state.showMenu} onToggle={this.toggleMenu.bind(this)} />
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            position: 'fixed',
            top: !this.state.showMenu ? '-10000' : 0,
            height: '100%',
            overflow: 'hidden',
            zIndex: 3,
            paddingTop: '4em',
            transitionProperty: 'top',
            transitionDuration: '.5s',
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection:  'column',
          }}
        >
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}>
            <a style={{padding: '.3em'}} href='/blog'>Blog</a>
            <a style={{padding: '.3em'}} href='/music'>Music</a>
            <a style={{padding: '.3em'}} href='/shows'>Live</a>
          </nav>
          <SocialButtons style={{
            marginTop: '3em',
            width: '100%',
            fontSize: '.8em',
            display: 'flex',
            justifyContent: 'center',
          }} />
          <div style={{fontSize: '.4em'}}>Copyright {new Date().getFullYear()} RichSoni, LLC</div>
        </div>
    </header>
  }

  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }
}

class _Logo extends React.Component {
  render(){
    return <div style={assign({
      display: 'flex',
      position: 'absolute',
      width: '100%',
      backgroundColor: 'black',
      zIndex: 1,
      top: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      height: '2.9em',
    }, this.props.style || {})}>
      <a
        style={{
          textDecoration: 'none',
          color: 'white',
        }}
        className='pulse'
        href='/'>{"{ RichSoni }"}</a>
    </div>
  }
}
const Logo = Radium(_Logo)

class Big extends React.Component {
  constructor(attrs){
    super()
    this.state = {
      showMenu: false
    }
  }
  render(){
    return <header style={{fontSize: '1.5em', height: 70}}>
        <Logo style={{position: 'fixed'}} />
        <MenuToggle showMenu={this.state.showMenu} onToggle={this.toggleMenu.bind(this)} />
        <div style={{ }}>
          <nav
            style={{
              position: 'fixed',
              zIndex: 3,
              display: 'flex',
              justifyContent: 'flex-end',
              top: 0,
              height: '2.8em',
              right: this.state.showMenu ? 80 : -10000,
              alignItems: 'center',
              transitionProperty: 'right',
              transitionDuration: '.5s',
              width: 400,
              overflow: 'hidden'
            }}
            className='hoverDim'
          >
            <a style={{textDecoration: 'none', marginLeft: '1em'}}href='/blog'>Blog</a>
            <a style={{textDecoration: 'none', marginLeft: '1em'}}href='/music'>Music</a>
            <a style={{textDecoration: 'none', marginLeft: '1em'}} href='/shows'>Live</a>
          </nav>
          <SocialButtons
            style={{
              position: 'fixed',
              zIndex: 3,
              justifyContent: 'center',
              top: 0,
              height: '3.3em',
              right: !this.state.showMenu ? 30 : -10000,
              whitespace: 'nowrap',
              alignItems: 'center',
              width:  400,
              transitionProperty: 'right',
              transitionDuration: '.5s',
              overflow: 'hidden',
              fontSize: '.8em',
              display: 'flex',
            }}
            className='hoverDim'
          />
        </div>
    </header>
  }

  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }
}

module.exports = responsiveComponentComposer({
  big: Radium(Big),
  small: Radium(Small),
})

