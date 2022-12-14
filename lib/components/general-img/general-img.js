"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var React = _interopRequireWildcard(require("react"));
var _img = _interopRequireDefault(require("@icedesign/img"));
var _excluded = ["src", "style"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var GeneralImg = function GeneralImg(_ref) {
  var _ref$src = _ref.src,
    src = _ref$src === void 0 ? '' : _ref$src,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    otherProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var _otherProps = otherProps || {};
  _otherProps.src = src;
  _otherProps.style = style;
  console.log("🚀 ~ file: general-img.tsx:18 ~ _otherProps", _otherProps);
  return /*#__PURE__*/React.createElement(_img["default"], _otherProps);
};
var _default = GeneralImg;
exports["default"] = _default;