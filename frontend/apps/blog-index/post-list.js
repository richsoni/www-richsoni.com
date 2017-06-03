"use strict"
const React           = require("react")
const moment          = require("moment")
const Radium          = require("radium")

class Post extends React.Component {
  render(){
    const date = new moment(this.props.attributes.date).format('MM/DD/YYYY')
    const link = `/blog/posts/${this.props.filePrefix}.html`
    return <a href={link}
      style={{
        borderBottom: '1px solid #bebebe',
        paddingBottom: '1em',
        paddingTop: '1em',
        maxWidth: 650,
        margin: 'auto auto',
        color: '#000',
        overflow: 'hidden',
        display: 'flex',
        flexFlow: 'row wrap',
      }}
    >
      <div>{date}</div> 
      <div style={{
        marginLeft: '2em',
        maxWidth: 500,
      }}>
        <div>{this.props.attributes.title}</div>
        <blockquote style={{
          fontStyle: 'italic',
          margin: 0,
          color: '#797979',
        }}>{this.props.attributes.blurb}</blockquote>
      </div>
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

module.exports = Radium(Post)
