module.exports = {
  body: {
    backgroundColor: '#232323',
  },

  '.blog-post-body, .post': {
    color: '#333333',
    backgroundColor: '#fff',
    lineHeight: '1.42857',
    maxWidth: '100%',
    overflow: 'hidden',
    margin: 'auto !important',
  },

  '.blog-post-body em, .blog-post-body strong': {
    color: '#6391FF',
  },

  '.blog-post-body blockquote': {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    opacity: '.87',
    clear: 'both',
    borderLeft: '.25em solid #80AAFF',
    padding: '10px 20px',
    margin: '0 0 20px',
    fontStyle: 'italic',
  },

  '.blog-post-body table td:first-child, .blog-post-body table th:first-child':{
    borderRight: '1px solid',
  },

  '.blog-post-body table th':{
    borderBottom: '1px solid',
  },

  '.blog-post-body th, .blog-post-body td':{
    padding:'1em',
  },

  '.blog-post-body ul:not(.default)':{
    listStyle: 'none',
    borderLeft: '.25em solid #6391FF',
    paddingLeft: '1em',
  },

  '.blog-post-body pre':{
    color: '#4B0CBF',
    backgroundColor: '#E7ECFB',
    borderBottomColor: 'rgb(204, 204, 204)',
    borderBottomLeftRadius: '2px',
    borderBottomRightRadius: '2px',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderImageOutset: '0px',
    borderImageRepeat: 'stretch',
    borderImageSlice: '100%',
    borderImageSource: 'none',
    borderImageWidth: '1',
    borderLeftColor: 'rgb(204, 204, 204)',
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
    borderRightColor: 'rgb(204, 204, 204)',
    borderRightStyle: 'solid',
    borderRightWidth: '1px',
    borderTopColor: 'rgb(204, 204, 204)',
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    boxShadow: 'rgba(0, 0, 0, 0.239216) 0px 1.29999995231628px 1.29999995231628px 0px',
    boxSizing: 'border-box',
    display: 'block',
    fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
    fontSize: '13px',
    fontWeight: '300',
    lineHeight: '18.5714092254639px',
    marginBottom: '8px',
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '8px',
    paddingBottom: '30px',
    overflow: 'hidden',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '30px',
    position: 'relative',
    verticalAlign: 'top',
    whiteSpace: 'pre',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
  },

  '.blog-post-body code': {
    zIndex: '0',
    color: '#4B0CBF',
    backgroundColor: '#E7ECFB',
  },
  '.blog-post-body pre code': {
    padding: '0',
    fontSize: 'inherit',
    color: 'inherit',
    whiteSpace: 'pre-wrap',
    backgroundColor: 'transparent',
    borderRadius: '0',
  },

  '.blog-post-body table':{
    borderBottomLeftRadius: '2px',
    borderBottomRightRadius: '2px',
    borderCollapse: 'collapse',
    borderLeftColor: 'rgb(128, 128, 128)',
    borderRightColor: 'rgb(128, 128, 128)',
    borderTopColor: 'rgb(128, 128, 128)',
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
    boxShadow: 'rgba(0, 0, 0, 0.239216) 0px 1.60000002384186px 1.60000002384186px 0px',
    boxSizing: 'border-box',
    color: 'rgb(51, 51, 51)',
    display: 'table',
    fontFamily: "RobotoDraft, 'Helvetica Neue', Helvetica, Arial",
    fontSize: '16px',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    marginBottom: '8px',
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '8px',
    paddingBottom: '30px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '30px',
    position: 'relative',
    textAlign: 'start',
    verticalAlign: 'top',
    whiteSpace: 'normal',
  },

  '.blog-post-body aside':{
    width: '250px',
    float: 'right',
    margin: '2em',
    padding: '1em',
    backgroundColor: '#F7F7F7',
  },

  '.blog-post-body *': {
    maxWidth: '100%',
    overflow: 'auto',
  },

  '.blog-post-body ol, .blog-post-body li': {
    overflow: 'initial',
  },

  mediaQueries: {
    '(max-width: 650px)':{
      '.blog-post-body aside:not(.nohide)': {
        display: 'none',
      },
      '.blog-post-body aside.nohide': {
        float:'none',
      },
    },
  },

  '.blog-post-body .caption':{
    padding: '1em',
  },

  '.blog-post-body .image.block': {
    width: '100%',
    overflow: 'hidden',
  },

  '.blog-post-body .image': {
    backgroundColor: '#F7F7F7',
    padding: '1em',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
