"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _MemoBox=_interopRequireDefault(require("./MemoBox"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}var Todo=function Todo(props){var todoItem=props.todoItem,addItemHandler=props.addItemHandler,checkItemHandler=props.checkItemHandler,deleteItemHandler=props.deleteItemHandler,containerProps=props.containerProps,inputProps=props.inputProps,listProps=props.listProps;var handleInsert=function handleInsert(event){if(event.key==="Enter"){var input=event.target;handleAddTodo(input)}};var handleAddTodo=function handleAddTodo(input){if(input.value.trim().length>0){addItemHandler(input.value);input.value=""}};return/*#__PURE__*/_react["default"].createElement(_MemoBox["default"],containerProps,/*#__PURE__*/_react["default"].createElement("input",_extends({},inputProps,{className:"todoinput ".concat(inputProps===null||inputProps===void 0?void 0:inputProps.className),onKeyUp:handleInsert})),/*#__PURE__*/_react["default"].createElement("button",{className:"todo-inputButton",type:"button",onClick:function onClick(e){var input=e.target;handleAddTodo(input.previousElementSibling)}},"\u21B5"),/*#__PURE__*/_react["default"].createElement("ul",_extends({},listProps,{className:"todolist ".concat(listProps===null||listProps===void 0?void 0:listProps.className)}),todoItem===null||todoItem===void 0?void 0:todoItem.map(function(item,idx){return/*#__PURE__*/_react["default"].createElement("li",{key:idx},/*#__PURE__*/_react["default"].createElement("input",{type:"checkbox",checked:item.isAvail,onClick:function onClick(){return checkItemHandler(idx)},readOnly:true}),item.todo,/*#__PURE__*/_react["default"].createElement("button",{className:"todo-delectbutton",onClick:function onClick(){return deleteItemHandler(idx)}},"X"))})))};var _default=Todo;exports["default"]=_default;