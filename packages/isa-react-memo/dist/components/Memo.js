"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _MemoBox=_interopRequireDefault(require("./MemoBox"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}var Memo=function Memo(_ref){var value=_ref.value,onChange=_ref.onChange,containerProps=_ref.containerProps,textAreaProps=_ref.textAreaProps;return/*#__PURE__*/_react["default"].createElement(_MemoBox["default"],null,/*#__PURE__*/_react["default"].createElement("textarea",_extends({},textAreaProps,{className:"textarea ".concat(textAreaProps===null||textAreaProps===void 0?void 0:textAreaProps.className),value:value,onChange:onChange})))};var _default=Memo;exports["default"]=_default;