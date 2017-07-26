"use strict"
const React           = require("react")
const HF              = require("../../shared/header-footer/")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")
const PostPreview     = require("./post-preview")
const PostGrid        = require("./post-grid")
const PostList        = require("./post-list")
const Radium          = require("radium")

let postComponents = {
  preview: PostPreview,
  grid: PostGrid,
  list: PostList,
}

const postsWrap = {
  preview: {},
  grid: {
    display: 'flex',
    flexFlow: 'row wrap',
    maxWidth: 600,
    margin: 'auto auto',
    paddingTop: '2em',
  },
  list: {
  
  }
}

class _RootComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      collection: [],
      currentView: 'preview',
    }
    ajax.get('/blog/posts.json', (payload) => {
      this.setState(parseCollection(JSON.parse(payload)))
    })
  }

  render() {
    return <HF>
      <div style={{
        width: '100%',
        borderBottom: '1px solid #bebebe',
        paddingBottom: '.5em',
        maxWidth: 650,
        margin: 'auto auto',
        minHeight: '1em',
        overflow: 'hidden',
      }}>
        <div style={{float: 'left', lineHeight: '2em', width: '3em'}}>Latest</div>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'flex-end',
        }}
          className='hoverFade'
        >
          {this.renderControl('preview', 'fa-align-justify')}
          {this.renderControl('grid', 'fa-th')}
          {this.renderControl('list', 'fa-list-ul')}
        </div>
      </div>
      {this._renderPosts()}
    </HF>
  }

  renderControl(type, icon){
    if( type === this.state.currentView ){
      return <span className="fa-stack">
        <i
          style={{color: '#7b7b7b'}}
          className="fa fa-circle fa-stack-2x"></i>
        <i className={`fa ${icon} fa-stack-1x fa-inverse`}></i>
      </span>
    }
    return <span style={{
      fontWeight: 'normal',
      cursor: 'pointer',
      }}
      className="fa-stack pulse inactive"
      onClick={() => {this.setState({currentView: type})}}
    >
      <i
        style={{color: '#fff'}}
        className="fa fa-circle fa-stack-2x"></i>
      <i
        style={{color: '#7b7b7b'}}
        className={`fa ${icon} fa-stack-1x fa-inverse`}></i>
    </span>
  }

  _renderPosts() {
    const Component = postComponents[this.state.currentView]
    if (this.state.collection.length === 0){
      return <div>
        loading
      </div>
    }
    return <div style={postsWrap[this.state.currentView]}>
      { this.state.collection.map((post) => <Component key={post[0]} filePrefix={post[0]} {...post[1]} /> )}
    </div>
  }
}
module.exports = Radium(_RootComponent)
