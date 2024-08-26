"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _success = _interopRequireDefault(require("./assets/success.png"));
var _warning = _interopRequireDefault(require("./assets/warning.png"));
var _wrong = _interopRequireDefault(require("./assets/wrong.png"));
require("./modal.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Modale(_ref) {
  var type = _ref.type,
    image = _ref.image,
    title = _ref.title,
    message = _ref.message,
    onclose = _ref.onclose,
    show = _ref.show;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    icone = _useState2[0],
    setIcone = _useState2[1];
  var getIcone = function getIcone(type) {
    switch (type) {
      case "success":
        return _success["default"];
      case "warning":
        return _warning["default"];
      case "error":
        return _wrong["default"];
    }
  };
  (0, _react.useEffect)(function () {
    if (image) {
      setIcone(image);
      return;
    }
    setIcone(getIcone(type));
  }, [show]);
  return show ? /*#__PURE__*/React.createElement("div", {
    className: "container-modale"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modale"
  }, /*#__PURE__*/React.createElement("img", {
    src: icone
  }), /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, message), /*#__PURE__*/React.createElement("button", {
    onClick: onclose
  }, "OK"))) : "";
}
var _default = exports["default"] = Modale;