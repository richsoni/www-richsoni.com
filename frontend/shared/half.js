const React = require("react")
const Radium          = require("radium")
const assign = require("object-assign")
let style = {
  width: '100%',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3px groove #232323',
  borderLeft: 0,
  borderRight: 0,
}

class Half extends React.Component{
  render(){
    return <section style={assign({}, style, this.props.style)}>
      {this.props.children}
    </section>
  }
}

Half.propTypes = {
  style: React.PropTypes.object,
}
Half.defaultProps = {
  style: {},
}

module.exports = Radium(Half)
