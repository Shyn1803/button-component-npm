"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  const {
    className,
    type,
    name,
    value,
    label,
    disabled,
    handleClick
  } = props;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn-component-npm ".concat(className || ''),
    type: type,
    name: name,
    value: value,
    disabled: disabled,
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("span", null, label));
};

var _default = Button;
exports.default = _default;