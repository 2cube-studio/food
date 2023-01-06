"use strict";

var _gsap = _interopRequireDefault(require("gsap"));

var _ScrollTrigger = _interopRequireDefault(require("gsap/ScrollTrigger"));

var _locomotiveScroll = _interopRequireDefault(require("locomotive-scroll"));

var _magneticButton = _interopRequireDefault(require("./functions/magnetic-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _magneticButton["default"])();
var scroller = new _locomotiveScroll["default"]({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 1
});

_gsap["default"].registerPlugin(_ScrollTrigger["default"]);

scroller.on('scroll', _ScrollTrigger["default"].update);

_ScrollTrigger["default"].addEventListener('refresh', function () {
  return scroller.update();
});

_ScrollTrigger["default"].refresh();