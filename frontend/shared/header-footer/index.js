import React from 'react';
const Header = require("../../shared/header/component")
const Footer = require("../../shared/footer/component")

class Element extends React.Component {
  render(){
    const style = this.props.style || {}
    return <div style={{
    }}>
      <Header />
      <div style={{
        maxWidth: 960,
        margin: 'auto auto',
        marginTop: '1.5em',
        padding: '2em',
        backgroundColor: 'white',
        boxShadow: '0px 0px 1px #797878',
        ...style
      }}>
        {this.props.children}
      </div>
      <Footer />
    </div>
  }
}
module.exports = Element;
