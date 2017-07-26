import React from 'react';
const HF = require("../../shared/header-footer/")
class Shows extends React.Component {
  render(){
    console.log(this.props)
    return <HF>
        {this.props.shows.map((show) => {
          return <div>
            {show.locationKey}
          </div>
        })}
    </HF>
  }
}
module.exports = Shows;
