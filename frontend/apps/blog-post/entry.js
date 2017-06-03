"use strict"
const React           = require("react")
const moment          = require("moment")
const style           = require("./style.js")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const Disqus          = require("../../shared/disqus/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")
const Radium          = require("radium")
const Style = Radium.Style

class RootComponent extends React.Component{
  constructor(attrs){
    const KEY = attrs.pathname.replace('/blog/posts/','').replace('.html','')
    super()
    this.state = {
      collection: [],
    }

    ajax.get('/blog/posts.json', (payload) => {
      const posts = JSON.parse(payload)
      this.setState(parseCollection(posts, 'ASC'))
      this.setState({post: posts[KEY]})
    })
  }

  render() {
    return <div style={{marginTop: '5em'}}>
      <Style rules={style}></Style>
      <Header />
      {this.renderPost()}
      <Footer />
    </div>
  }

  renderPost() {
    if( this.state.post ){
      const date = new moment(this.state.post.attributes.date).format('MM/DD/YYYY')
      return <div
      style={{
        padding: '2em',
      }}
      className='post'>
        <div className='post-heading'>
          <h1 className='title'>{this.state.post.attributes.title}</h1>
          <div style={{fontStyle: 'italic', marginBottom: '1em'}}>Posted {date}</div>
        </div>
        <div
          style={{
            backgroundImage: `url(${this.state.post.attributes.hero})`,
            width: '100%',
            height: this.state.post.attributes.hero ? '280px' : 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottom: '1px solid #bebebe',
        }} />
        <div className='blog-post-body' dangerouslySetInnerHTML={{__html: this.state.post.body}} />
        <hr />
        <h1>Comments</h1>
        <Disqus />
      </div>
    }
    return <div />
  }
}

module.exports = RootComponent
