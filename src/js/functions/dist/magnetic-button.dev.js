"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gsap = _interopRequireWildcard(require("gsap"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MagneticButton = function MagneticButton() {
  // Magnetic Buttons
  var magnets = document.querySelectorAll('.magnetic');
  var strength = 100; // START : If screen is bigger as 540 px do magnetic
  // Mouse Reset

  magnets.forEach(function (magnet) {
    magnet.addEventListener('mousemove', moveMagnet);
    magnet.addEventListener('mouseleave', function (event) {
      _gsap["default"].to(event.currentTarget, 1.5, {
        x: 0,
        y: 0,
        ease: _gsap.Elastic.easeOut
      });

      _gsap["default"].to((0, _jquery["default"])(this).find("div"), 1.5, {
        x: 0,
        y: 0,
        ease: _gsap.Elastic.easeOut
      });
    });
  }); // // // Mouse Enter

  (0, _jquery["default"])('.magnetic').on('mouseenter', function () {
    _gsap["default"].to((0, _jquery["default"])(this).find("div"), .3, {
      y: "0%",
      ease: _gsap.Power2.easeInOut
    });
  }); // Mouse move

  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var magnetsStrength = magnetButton.getAttribute("data-strength") || 50;
    var magnetsStrengthText = magnetButton.getAttribute("data-strength-text") || 10;

    _gsap["default"].to(magnetButton, 1.5, {
      x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * magnetsStrength,
      y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * magnetsStrength,
      rotate: "0.001deg",
      ease: _gsap.Power4.easeOut
    });

    _gsap["default"].to((0, _jquery["default"])(this).find("div"), 1.5, {
      x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.15) * magnetsStrengthText,
      y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.15) * magnetsStrengthText,
      rotate: "0.001deg",
      ease: _gsap.Power4.easeOut
    });
  }
};

var _default = MagneticButton;
exports["default"] = _default;