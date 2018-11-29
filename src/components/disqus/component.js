import React from "react"
export default class Disqus extends React.Component{
  render() {
    return <div className='content comments'>
      <div id="disqus_thread"></div>
    </div>
  }

  componentDidMount() {
    const dsq = document.createElement('script')
    dsq.type = 'text/javascript'
    dsq.async = true
    dsq.src = '//richsoni.disqus.com/embed.js'
    setTimeout(() =>{
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq)
    }, 0)
  }
}
