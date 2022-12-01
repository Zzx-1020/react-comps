import * as React from 'react';
import { createElement } from 'react';
import Img from '@icedesign/img'; 

export interface GeneralImgProps {
  src?: string;
  style?: object
}

const GeneralImg: React.FC<GeneralImgProps> = function GeneralImg({
  src = '',
  style = {},
  ...otherProps
}) {
  const _otherProps = otherProps || {};
  _otherProps.src = src;
  _otherProps.style = style;
  console.log("🚀 ~ file: general-img.tsx:18 ~ _otherProps", _otherProps)
  return (
    <Img {..._otherProps} />
  );
};

export default GeneralImg;
