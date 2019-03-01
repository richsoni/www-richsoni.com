const { createFilePath } = require('gatsby-source-filesystem');

class MarkdownFields {
  constructor(props){
    this.node = props.node;
    this.getNode = props.getNode;
  }

  basename() {
    return createFilePath({
      node: this.node,
      getNode: this.getNode,
      basePath: this.basePath(),
      trailingSlash: false,
    }).replace('/','');
  }

  url() {
    return '/'+this.relativeDirectory()+createFilePath({ node: this.node, getNode: this.getNode, basePath: this.basePath()});
  }

  basePath(){
    switch(this.relativeDirectory()) {
      default: return this.relativeDirectory();
    }
  }

  relativeDirectory() {
    if(this.parent().sourceInstanceName === 'events'){
      return 'events'
    }
    return this.parent().relativeDirectory;
  }

  parent() {
    return this.getNode(this.node.parent)
  }
}

module.exports = (props) => {
  mf = new MarkdownFields(props)
  return {
    url: mf.url(),
    basename: mf.basename(),
    relativeDirectory: mf.relativeDirectory(),
  }
}
