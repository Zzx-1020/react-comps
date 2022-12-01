
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const GeneralImgMeta: ComponentMetadata = {
  "componentName": "GeneralImg",
  "title": "GeneralImg",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "zhangzhexin-comps",
    "version": "0.1.1",
    "exportName": "GeneralImg",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "src",
            "zh-CN": "src"
          }
        },
        "name": "src",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  },
  "group": '业务组件',
  'category': '通用'
};
const snippets: Snippet[] = [
  {
    "title": "GeneralImg",
    "screenshot": "",
    "schema": {
      "componentName": "GeneralImg",
      "props": {}
    }
  }
];

export default {
  ...GeneralImgMeta,
  snippets
};
