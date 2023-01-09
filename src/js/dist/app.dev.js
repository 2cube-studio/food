"use strict";

var _gsap = _interopRequireDefault(require("gsap"));

var _ScrollTrigger = _interopRequireDefault(require("gsap/ScrollTrigger"));

var _locomotiveScroll = _interopRequireDefault(require("locomotive-scroll"));

var _magneticButton = _interopRequireDefault(require("./functions/magnetic-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _magneticButton["default"])();

_gsap["default"].registerPlugin(_ScrollTrigger["default"]);

var scroller = new _locomotiveScroll["default"]({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
scroller.on('scroll', _ScrollTrigger["default"].update);

_ScrollTrigger["default"].scrollerProxy("body", {
  scrollTop: function scrollTop(value) {
    return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect: function getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

_gsap["default"].from(".pizza_heading", {
  scrollTrigger: {
    trigger: ".pizza_section",
    scroller: "body",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

_ScrollTrigger["default"].addEventListener("refresh", function () {
  return scroller.update();
});

_ScrollTrigger["default"].refresh();