"use strict"
const React           = require("react")
const moment          = require("moment")

class Post extends React.Component {
  render(){
    const date = new moment(this.props.date).format('MM/DD/YYYY')
    const link = this.props.url
    return <div
      style={{
        borderBottom: '1px solid #bebebe',
        paddingBottom: '1em',
        maxWidth: 650,
        margin: 'auto auto',
      }}
    >
      <h1 style={{
        marginBottom: '.4em'
      }}><a href={link}> {this.props.title}</a></h1>
      <div style={{
        fontStyle: 'italic',
        marginBottom: '1em'
      }}>Posted {date}</div>
      {this.hero()}
      {this.blurb()}
      <div style={{
        fontSize: '.8em',
        color: '#444',
      }} dangerouslySetInnerHTML={{__html: this.getPreview()}} />
      <a style={{
      }} href={link}>Read More...</a>
    </div>
  }

  blurb(){
    if(this.props.blurb){
      return <blockquote style={{
        fontStyle: 'italic',
        margin: 0,
        padding: '1em 0',
      }}>{this.props.blurb}</blockquote>
    } else {
      return <div />
    }
  }
  hero(){
    if(this.props.hero){
      return <div
        style={{
          display: 'block',
          color: '#000',
          textDecoration: 'none',
          backgroundImage: `url(${this.props.hero})`,
          height: 280,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#bebebe',
        }} />
    } else {
      <div />
    }
  }
  getPreview(){
    let tree       = document.createElement("div")
    let result     = ""
    let counter    = 0
    tree.innerHTML = this.props.content.replace(/href=["'][^'"]*/, 'href=""')
    while(result.length < 200){
      const el = tree.children[counter]
      if(el){
        result = result + el.outerHTML
      } else {
        break
      }
      counter++
    }
    return result
  }
}

module.exports = Post
