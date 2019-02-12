'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _propTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var server = _interopDefault(require('react-dom/server'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var direction = {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var font = {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var color = {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var background = {
	outlook: "Background images not supported",
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": "Background images not supported",
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var border = {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var height = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var margin = {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var padding = {
	outlook: "Padding for p, div and a tags is not supported",
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var width = {
	outlook: "Width for p and div tags is not supported",
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var bottom = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
};
var clear = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var clip = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
};
var cursor = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: false,
	"gmail-android": false
};
var display = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: false,
	"gmail-android": true
};
var float = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
};
var left = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
};
var opacity = {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
};
var outline = {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": "Inner and outer border are collapsed",
	"apple-mail": true,
	"yahoo-mail": "Inner and outer border are collapsed",
	gmail: "Inner and outer border are collapsed",
	"gmail-android": true
};
var overflow = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": "overflow: hidden; does not work",
	"apple-mail": true,
	"yahoo-mail": "overflow: hidden; does not work",
	gmail: "overflow: hidden; does not work",
	"gmail-android": "overflow: scroll; does not work"
};
var position = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": "position: fixed; does not result in elements being positioned relative to the reading pane",
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
};
var resize = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": "IE: Yes. Otherwise, inline text field with scrollbar displays, but no resize tab",
	"apple-mail": true,
	"yahoo-mail": "IE: Yes. Otherwise, inline text field with scrollbar displays, but no resize tab",
	gmail: false,
	"gmail-android": false
};
var right = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
};
var top = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
};
var visibility = {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: false,
	"gmail-android": true
};
var supportMatrix = {
	direction: direction,
	font: font,
	"font-family": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"font-style": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"font-variant": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"font-size": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"font-weight": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"letter-spacing": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"line-height": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": "line-height on td is ignored, use on p instead.",
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"text-align": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"text-decoration": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"text-indent": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"text-overflow": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": "text-overflow: ellipsis; does not work",
	"apple-mail": true,
	"yahoo-mail": "text-overflow: ellipsis; does not work",
	gmail: "text-overflow: ellipsis; does not work in Firefox",
	"gmail-android": true
},
	"text-shadow": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: false,
	"gmail-android": true
},
	"text-transform": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"white-space": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"word-spacing": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"word-wrap": {
	outlook: false,
	"outlook-legacy": "word-wrap: normal; not supported",
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: false,
	"gmail-android": false
},
	"vertical-align": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"text-fill-color": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
},
	"text-fill-stroke": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": true
},
	color: color,
	background: background,
	"background-color": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"background-image": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"background-position": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: false,
	"gmail-android": true
},
	"background-repeat": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"background-size": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": "Image not stretched",
	gmail: false,
	"gmail-android": "Image not stretched"
},
	"border-left": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"border-right": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"border-top": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"border-bottom": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	border: border,
	"border-color": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": false
},
	"border-image": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": false
},
	"border-radius": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: true,
	"gmail-android": false
},
	"box-shadow": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": false,
	gmail: false,
	"gmail-android": false
},
	height: height,
	"margin-left": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"margin-right": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"margin-top": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"margin-bottom": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	margin: margin,
	"padding-left": {
	outlook: "Padding for p, div and a tags is not supported",
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"padding-right": {
	outlook: "Padding for p, div and a tags is not supported",
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"padding-top": {
	outlook: "Padding for p, div and a tags is not supported",
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"padding-bottom": {
	outlook: "Padding for p, div and a tags is not supported",
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	padding: padding,
	width: width,
	"max-width": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"min-width": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	bottom: bottom,
	clear: clear,
	clip: clip,
	cursor: cursor,
	display: display,
	float: float,
	left: left,
	opacity: opacity,
	outline: outline,
	overflow: overflow,
	position: position,
	resize: resize,
	right: right,
	top: top,
	visibility: visibility,
	"z-index": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: false,
	"gmail-android": true
},
	"list-style-image": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: false,
	"gmail-android": true
},
	"list-style-position": {
	outlook: false,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": false,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"list-style-type": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"border-collapse": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"border-spacing": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"caption-side": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"empty-cells": {
	outlook: false,
	"outlook-legacy": false,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
},
	"table-layout": {
	outlook: true,
	"outlook-legacy": true,
	"apple-ios": true,
	"outlook-web": true,
	"apple-mail": true,
	"yahoo-mail": true,
	gmail: true,
	"gmail-android": true
}
};

var supportMatrix$1 = /*#__PURE__*/Object.freeze({
    direction: direction,
    font: font,
    color: color,
    background: background,
    border: border,
    height: height,
    margin: margin,
    padding: padding,
    width: width,
    bottom: bottom,
    clear: clear,
    clip: clip,
    cursor: cursor,
    display: display,
    float: float,
    left: left,
    opacity: opacity,
    outline: outline,
    overflow: overflow,
    position: position,
    resize: resize,
    right: right,
    top: top,
    visibility: visibility,
    default: supportMatrix
});

var _supportMatrix = getCjsExportFromNamespace(supportMatrix$1);

var StyleValidator_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _supportMatrix2 = _interopRequireDefault(_supportMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var capsRe = /[A-Z]/g;

var StyleValidator = function () {
  function StyleValidator(config) {
    _classCallCheck(this, StyleValidator);

    this.setConfig(config);
  }

  _createClass(StyleValidator, [{
    key: 'setConfig',
    value: function setConfig(config) {
      this.config = _extends({
        strict: true,
        warn: true,
        platforms: ['gmail', 'gmail-android', 'apple-mail', 'apple-ios', 'yahoo-mail', 'outlook', 'outlook-legacy', 'outlook-web']
      }, config);
    }
  }, {
    key: 'validate',
    value: function validate(style, componentName) {
      var _this = this;

      var _loop = function _loop(propNameCamelCase) {
        var propName = propNameCamelCase.replace(capsRe, function (match) {
          return `-${match[0].toLowerCase()}`;
        });

        var supportInfo = _supportMatrix2.default[propName];

        if (!supportInfo) {
          if (_this.config.strict) {
            return {
              v: new Error(`Unknown style property \`${propName}\` supplied to \`${componentName}\`.`)
            };
          }
        } else {
          var unsupported = [];
          var messages = new Map();
          _this.config.platforms.forEach(function (platform) {
            if (typeof supportInfo[platform] === 'string') {
              var msg = supportInfo[platform];
              if (!messages.has(msg)) {
                messages.set(msg, []);
              }
              messages.get(msg).push(platform);
            } else if (supportInfo[platform] === false) {
              unsupported.push(platform);
            }
          });

          if (_this.config.warn) {
            // eslint-disable-next-line no-restricted-syntax
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = messages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _ref = _step2.value;

                var _ref2 = _slicedToArray(_ref, 2);

                var msg = _ref2[0];
                var platforms = _ref2[1];

                console.warn(`Warning: Style property \`${propName}\` supplied to \`${componentName}\`, in ${platforms.join(', ')}: ${msg.toLowerCase()}`); // eslint-disable-line no-console
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          if (unsupported.length && _this.config.strict) {
            return {
              v: new Error(`Style property \`${propName}\` supplied to \`${componentName}\` unsupported in: ${unsupported.join(', ')}.`)
            };
          }
        }
      };

      // eslint-disable-next-line no-restricted-syntax
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(style)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var propNameCamelCase = _step.value;

          var _ret = _loop(propNameCamelCase);

          if (typeof _ret === "object") return _ret.v;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return undefined;
    }
  }]);

  return StyleValidator;
}();

exports.default = StyleValidator;
});

unwrapExports(StyleValidator_1);

var PropTypes = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleValidator = undefined;
exports.configStyleValidator = configStyleValidator;



var _propTypes2 = _interopRequireDefault(_propTypes);



var _StyleValidator2 = _interopRequireDefault(StyleValidator_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleValidator = exports.styleValidator = new _StyleValidator2.default();

function configStyleValidator(config) {
  styleValidator.setConfig(config);
}

exports.default = {
  style(props, propName, componentName) {
    if (props[propName] == null) {
      return undefined;
    }

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var objErr = _propTypes2.default.object.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
    if (objErr) {
      return objErr;
    }
    return styleValidator.validate(props[propName], componentName);
  }
};
});

unwrapExports(PropTypes);
var PropTypes_1 = PropTypes.styleValidator;
var PropTypes_2 = PropTypes.configStyleValidator;

var Box_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Box;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(_propTypes);



var _PropTypes2 = _interopRequireDefault(PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Box(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'table',
    props,
    _react2.default.createElement(
      'tbody',
      null,
      children
    )
  );
}

Box.propTypes = {
  cellPadding: _propTypes2.default.number,
  cellSpacing: _propTypes2.default.number,
  border: _propTypes2.default.string,
  bgcolor: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  valign: _propTypes2.default.oneOf(['top', 'middle', 'bottom']),
  style: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

Box.defaultProps = {
  cellPadding: 0,
  cellSpacing: 0,
  border: '0',
  align: 'left',
  valign: 'top',
  bgcolor: undefined,
  width: undefined,
  height: undefined,
  style: undefined,
  children: undefined
};
});

unwrapExports(Box_1);

var includeDataProps = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var dataProps = {};

  Object.keys(props).forEach(function (key) {
    if (/^data-/.test(key)) {
      dataProps[key] = props[key];
    }
  });

  return dataProps;
};
});

unwrapExports(includeDataProps);

var Item_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Item;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(_propTypes);



var _PropTypes2 = _interopRequireDefault(PropTypes);



var _includeDataProps2 = _interopRequireDefault(includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Item(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      _extends({}, (0, _includeDataProps2.default)(props), {
        className: props.className,
        align: props.align,
        valign: props.valign,
        bgcolor: props.bgcolor,
        style: props.style
      }),
      props.children
    )
  );
}

Item.propTypes = {
  className: _propTypes2.default.string,
  bgcolor: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  valign: _propTypes2.default.oneOf(['top', 'middle', 'bottom']),
  style: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

Item.defaultProps = {
  className: undefined,
  bgcolor: undefined,
  align: undefined,
  valign: undefined,
  style: undefined,
  children: undefined
};
});

unwrapExports(Item_1);

var Email_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Email;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(_propTypes);



var _PropTypes2 = _interopRequireDefault(PropTypes);



var _Box2 = _interopRequireDefault(Box_1);



var _Item2 = _interopRequireDefault(Item_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// inspired by http://htmlemailboilerplate.com
function Email(props) {
  // default nested 600px wide outer table container (see http://templates.mailchimp.com/development/html/)
  return _react2.default.createElement(
    'html',
    { lang: props.lang, xmlns: 'http://www.w3.org/1999/xhtml' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement(
        'title',
        null,
        props.title
      ),
      props.headCSS && _react2.default.createElement(
        'style',
        { type: 'text/css' },
        props.headCSS
      )
    ),
    _react2.default.createElement(
      'body',
      {
        style: _extends({
          width: '100%',
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%'
        }, props.bodyStyle)
      },
      _react2.default.createElement(
        _Box2.default,
        { width: '100%', height: '100%', bgcolor: props.bgcolor },
        _react2.default.createElement(
          _Item2.default,
          { align: props.align, valign: props.valign },
          _react2.default.createElement(
            _Box2.default,
            { width: props.width, align: 'center', cellPadding: props.cellPadding, cellSpacing: props.cellSpacing, style: props.style },
            props.children
          )
        )
      )
    )
  );
}

Email.propTypes = {
  lang: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  bgcolor: _propTypes2.default.string,
  cellPadding: _propTypes2.default.number,
  cellSpacing: _propTypes2.default.number,
  style: _PropTypes2.default.style,
  headCSS: _propTypes2.default.string,
  width: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  valign: _propTypes2.default.oneOf(['top', 'middle', 'bottom']),
  bodyStyle: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

Email.defaultProps = {
  lang: 'en',
  width: '600',
  align: 'center',
  valign: 'top',
  bgcolor: undefined,
  cellPadding: undefined,
  cellSpacing: undefined,
  style: undefined,
  headCSS: undefined,
  bodyStyle: undefined,
  children: undefined
};
});

unwrapExports(Email_1);

var Image_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Image;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(_propTypes);



var _PropTypes2 = _interopRequireDefault(PropTypes);



var _includeDataProps2 = _interopRequireDefault(includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Image(props) {
  return _react2.default.createElement('img', _extends({}, (0, _includeDataProps2.default)(props), {
    alt: props.alt,
    src: props.src,
    width: props.width,
    height: props.height,
    style: _extends({
      display: 'block',
      outline: 'none',
      border: 'none',
      textDecoration: 'none'
    }, props.style)
  }));
}

Image.propTypes = {
  alt: _propTypes2.default.string.isRequired,
  src: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  style: _PropTypes2.default.style
};

Image.defaultProps = {
  style: undefined
};
});

unwrapExports(Image_1);

var Span_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Span;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(_propTypes);



var _PropTypes2 = _interopRequireDefault(PropTypes);



var _includeDataProps2 = _interopRequireDefault(includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Span(props) {
  var lineHeight = props.lineHeight !== undefined ? props.lineHeight : props.fontSize;
  return _react2.default.createElement(
    'span',
    _extends({}, (0, _includeDataProps2.default)(props), {
      style: _extends({
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: `${lineHeight}px`,
        color: props.color
      }, props.style)
    }),
    props.children
  );
}

Span.propTypes = {
  fontFamily: _propTypes2.default.string,
  fontSize: _propTypes2.default.number,
  fontWeight: _propTypes2.default.string,
  lineHeight: _propTypes2.default.number,
  color: _propTypes2.default.string,
  style: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

Span.defaultProps = {
  fontFamily: 'sans-serif',
  fontSize: 14,
  fontWeight: undefined,
  lineHeight: undefined,
  color: '#000',
  style: undefined,
  children: undefined
};
});

unwrapExports(Span_1);

var A_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = A;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(_propTypes);



var _PropTypes2 = _interopRequireDefault(PropTypes);



var _includeDataProps2 = _interopRequireDefault(includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function A(props) {
  return _react2.default.createElement(
    'a',
    _extends({}, (0, _includeDataProps2.default)(props), {
      download: props.download,
      href: props.href,
      target: '_blank',
      style: _extends({
        color: props.color,
        textDecoration: props.textDecoration
      }, props.style)
    }),
    props.children
  );
}

A.propTypes = {
  href: _propTypes2.default.string.isRequired,
  download: _propTypes2.default.string,
  color: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string,
  style: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

A.defaultProps = {
  textDecoration: 'underline',
  href: undefined,
  download: undefined,
  color: undefined,
  style: undefined,
  children: undefined
};
});

unwrapExports(A_1);

var renderEmail_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderEmail;



var _server2 = _interopRequireDefault(server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderEmail(emailComponent) {
  var doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
  return doctype + _server2.default.renderToStaticMarkup(emailComponent);
}
});

unwrapExports(renderEmail_1);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderEmail = exports.configStyleValidator = exports.A = exports.Span = exports.Item = exports.Image = exports.Email = exports.Box = exports.PropTypes = undefined;



var _PropTypes2 = _interopRequireDefault(PropTypes);



var _Box2 = _interopRequireDefault(Box_1);



var _Email2 = _interopRequireDefault(Email_1);



var _Image2 = _interopRequireDefault(Image_1);



var _Item2 = _interopRequireDefault(Item_1);



var _Span2 = _interopRequireDefault(Span_1);



var _A2 = _interopRequireDefault(A_1);



var _renderEmail2 = _interopRequireDefault(renderEmail_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEV = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production';

(0, PropTypes.configStyleValidator)({
  warn: DEV
});

exports.PropTypes = _PropTypes2.default;
exports.Box = _Box2.default;
exports.Email = _Email2.default;
exports.Image = _Image2.default;
exports.Item = _Item2.default;
exports.Span = _Span2.default;
exports.A = _A2.default;
exports.configStyleValidator = PropTypes.configStyleValidator;
exports.renderEmail = _renderEmail2.default;
exports.default = {
  PropTypes: _PropTypes2.default,
  configStyleValidator: PropTypes.configStyleValidator,
  renderEmail: _renderEmail2.default,
  styleValidator: PropTypes.styleValidator
};
});

unwrapExports(lib);
var lib_1 = lib.renderEmail;
var lib_2 = lib.configStyleValidator;
var lib_3 = lib.A;
var lib_4 = lib.Span;
var lib_5 = lib.Item;
var lib_6 = lib.Image;
var lib_7 = lib.Email;
var lib_8 = lib.Box;
var lib_9 = lib.PropTypes;

/**
 * @class TellAStory1
 */
var TellAStory1 = /** @class */ (function (_super) {
    __extends(TellAStory1, _super);
    function TellAStory1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TellAStory1.prototype.render = function () {
        return (React.createElement(lib_7, { title: "Hello World!" },
            React.createElement(lib_5, { align: "center" },
                React.createElement(lib_4, { fontSize: 20 },
                    "This is an example email made with:",
                    React.createElement(lib_3, { href: "https://github.com/chromakode/react-html-email" }, "react-html-email"),
                    "."))));
    };
    return TellAStory1;
}(React.Component));

/**
 * @class Emails
 */

exports.TellAStory1 = TellAStory1;
//# sourceMappingURL=index.js.map
