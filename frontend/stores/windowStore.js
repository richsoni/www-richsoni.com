const Dispatcher = require("../dispatcher/dispatcher")
const EventEmitter = require('events').EventEmitter
const assign = require('object-assign')

const CHANGE_EVENT = 'change'

class Window extends EventEmitter{
  constructor(){
    super()
    this.updateDimensions()
    window.addEventListener('resize', (event) => { this.updateDimensions() })
  }

  getWindowWidth(){
    return "innerWidth" in window
      ? window.innerWidth
      : document.documentElement.offsetWidth;
  }

  getWindowHeight(){
    return "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;
  }

  updateDimensions(){
    this.width    = this.getWindowWidth()
    this.height   = this.getWindowHeight()
    this.isSmall  = this.width < 960;
    this.emitChange()
  }

  emitChange(){
    this.emit(CHANGE_EVENT)
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
}

const _window = new Window()
module.exports = _window
