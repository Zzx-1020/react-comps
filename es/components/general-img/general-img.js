import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["src", "style"];
import * as React from 'react';
import Img from '@icedesign/img';
var GeneralImg = function GeneralImg(_ref) {
  var _ref$src = _ref.src,
    src = _ref$src === void 0 ? '' : _ref$src,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _otherProps = otherProps || {};
  _otherProps.src = src;
  _otherProps.style = style;
  console.log("🚀 ~ file: general-img.tsx:18 ~ _otherProps", _otherProps);
  return /*#__PURE__*/React.createElement(Img, _otherProps);
};
export default GeneralImg;