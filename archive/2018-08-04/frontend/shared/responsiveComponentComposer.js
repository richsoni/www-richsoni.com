const React       = require("react")
const WindowStore = require("../stores/windowStore")
const getWindowState = () => {
  return {
    isSmall: WindowStore.isSmall
  }
}

function composer(params){
  class ResponsiveComponent extends React.Component {
    constructor(attrs){
      super(attrs)
      this.state = getWindowState()
    }

    componentDidMount(){
      WindowStore.addChangeListener(this._onChange.bind(this))
    }

    _onChange(){
      this.setState(getWindowState())
    }

    render() {
      if(this.state.isSmall){
        return <params.small {...this.props} />
      }
      else {
        return <params.big  {...this.props} />
      }
    }
  }
  return ResponsiveComponent
}

module.exports = composer
