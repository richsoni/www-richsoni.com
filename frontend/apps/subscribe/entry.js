"use strict"
const React           = require("react")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const Radium          = require("radium")
const Style = Radium.Style;

const input = {
  width: '100%',
  margin: '.5em 0',
  fontSize: '1.2em',
}

const p = {
  margin: '1em 0',
}

class _RootComponent extends React.Component {
  render(){
    return <div>
      <Header />
      <div
        style={{
          textAlign: 'center',
          padding: '1em',
          backgroundColor: '#fff',
          boxShadow: '0px 0px 1px #797878',
          margin: '1em',
        }}
      >
        <form
          action="//richsoni.us8.list-manage.com/subscribe/post?u=bc85e50b336a97670d097c9d0&amp;id=cd363f3412"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          style={{ textAlign: "left", margin: 'auto auto' }}
        >
          <h2>Subscribe To The Rich Soni Mailing List</h2>
          <p style={p} >
            <label >Email Address</label>
            <input style={input} type="email" name="EMAIL" />
          </p><p style={p} >
            <label >First Name </label>
            <input style={input} type="text" name="FNAME" />
          </p><p style={p} >
            <label >Last Name </label>
            <input style={input} type="text" name="LNAME" />
          </p>
          <div
            style={{position: 'absolute', left: '-5000px'}}
            ariaHidden="true"
          >
            <input type="text" name="b_bc85e50b336a97670d097c9d0_cd363f3412" tabIndex="-1" value="" />
          </div>
          <div><input style={{background: '#5d5d5d', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.3em', padding: '.2em',}} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" /></div>
        </form>
      </div>
      <Footer />
    </div>
  }
}

module.exports = Radium(_RootComponent)
