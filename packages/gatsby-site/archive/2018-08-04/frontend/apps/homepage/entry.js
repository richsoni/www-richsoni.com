"use strict"
const React           = require("react")
const Half            = require("../../shared/half")
import LatestRelease from "./LatestRelease";
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const Radium          = require("radium")
const Style = Radium.Style;
const MailingListHalf = require("./mailinglist")
const EventsHalf = require("./EventsHalf")


class _RootComponent extends React.Component{
  render() {
    // <Half style={{backgroundColor: 'black'}}>Latest Youtube Videos</Half>
    return <div>
      <Style rules={{
        body: {
          maxWidth: 'none',
        },

        nav: {
          listStyle: 'none',
        },

      }}>
      </Style>
      <Header />
      <Half style={{
        backgroundImage: 'url(/images/stv1bgt.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        padding: '1em 0',
        backgroundPosition: 'center'}}>
        <MailingListHalf />
      </Half>
      <LatestRelease />
      <Footer />
    </div>
  }
}
const RootComponent = Radium(_RootComponent)

module.exports = RootComponent
