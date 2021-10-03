"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _kendoReactDateinputs = require("@progress/kendo-react-dateinputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatePicker = function DatePicker(props) {
  return /*#__PURE__*/_react["default"].createElement(_kendoReactDateinputs.DatePicker, props);
};

var _default = DatePicker;
exports["default"] = _default;