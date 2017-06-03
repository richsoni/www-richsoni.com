"use strict"
const React           = require("react")
const moment          = require("moment")

class PostGrid extends React.Component {
  render(){
    const date = new moment(this.props.attributes.date).format('MM/DD/YYYY')
    const link = `/blog/posts/${this.props.filePrefix}.html`
    return <a
      style={{
        borderBottom: '1px solid #bebebe',
        paddingBottom: '1em',
        width: 250,
        margin: 'auto auto',
        height: '23em',
        display: 'block',
      }}
      href={link}
    >
      <div
        style={{
          display: 'block',
          color: '#000',
          textDecoration: 'none',
          backgroundImage: `url(${this.props.attributes.hero})`,
          height: 280,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#bebebe',
        }} />
      <h1 style={{
        marginBottom: '.4em',
        fontSize: '1em',
      }}>{this.props.attributes.title}</h1>
    </a>
  }

  getPreview(){
    let tree       = document.createElement("div")
    let result     = ""
    let counter    = 0
    tree.innerHTML = this.props.body.replace(/href=["'][^'"]*/, 'href=""')
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

module.exports = PostGrid
