const React = require("react")
const Radium = require("radium")
const SocialButton    = require("../../shared/socialButton/component")
class _MailingListHalf extends React.Component{
  render(){
    return <div style={{
        overflow: 'hidden',
        padding: '1em',
        display:'flex',
        justifyContent: 'flex-end',
        flexFlow: 'row wrap',
      }}>
        <div
          style={{
            listStyle: 'none',
          }}
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
module.exports = Radium(_MailingListHalf)
