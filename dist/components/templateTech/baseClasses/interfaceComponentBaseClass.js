"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _BaseComponent2 = _interopRequireDefault(require("./BaseComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * InterfaceComponentBaseClass extends the functionality of BaseComponent to provide an interface for 
 * managing and rendering components dynamically with additional customization options.
 * This class is designed to integrate tightly with an application's interface and factory system.
 */
var InterfaceComponentBaseClass = exports["default"] = /*#__PURE__*/function (_BaseComponent) {
  // Function to retrieve the component's HTML representation.

  /**
   * Constructor to initialize the InterfaceComponentBaseClass instance.
   * Calls the BaseComponent constructor and initializes state.
   */
  function InterfaceComponentBaseClass() {
    var _this;
    _classCallCheck(this, InterfaceComponentBaseClass);
    _this = _callSuper(this, InterfaceComponentBaseClass);
    _defineProperty(_this, "addToProps", {});
    // Additional properties to merge with the default props.
    _defineProperty(_this, "addToInitialSetup", []);
    // Additional setup functions to execute during initialization.
    _defineProperty(_this, "getterFunc", undefined);
    _this.state = {};
    return _this;
  }

  /**
   * Retrieves the combined props object for the component, including interface, app, theme, type, 
   * and additional properties from `addToProps`.
   * @returns {Object} - The combined props object.
   */
  _inherits(InterfaceComponentBaseClass, _BaseComponent);
  return _createClass(InterfaceComponentBaseClass, [{
    key: "getProps",
    value: function getProps() {
      var props = _objectSpread(_objectSpread({
        "interface": this["interface"],
        app: this.app,
        theme: this.props.theme,
        type: this.props.type
      }, this.props), this.addToProps);
      return props;
    }

    /**
     * Sets the component list by retrieving it from the interface.
     * This method is typically called during the setup process.
     */
  }, {
    key: "setComponentList",
    value: function setComponentList() {
      var _this$interface;
      this.componentList = (_this$interface = this["interface"]) === null || _this$interface === void 0 ? void 0 : _this$interface.getComponentList();
    }

    /**
     * Placeholder for setting additional props. Can be overridden or expanded.
     */
  }, {
    key: "setProps",
    value: function setProps() {}

    /**
     * Retrieves the HTML representation of the component.
     * This method prepares props, sets the getter function, and calls it to generate the HTML.
     * @returns {JSX.Element} - The rendered HTML.
     */
  }, {
    key: "getHtml",
    value: function getHtml() {
      this.setProps();
      var props = this.getProps();
      this.setGetterFunc(this.props.getterFunc);
      if (this.getterFunc) {
        this.html = this.getterFunc(_objectSpread({}, props), props.type || this.state.type);
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.html);
    }

    /**
     * Sets the getter function for generating the HTML. 
     * Defaults to `getterFunc` passed in props, or the interface's main function, if available.
     * @param {Function} f - The function to set as the getter.
     */
  }, {
    key: "setGetterFunc",
    value: function setGetterFunc(f) {
      this.getterFunc = f || this["interface"].getMainFunc() || this.getterFunc;
    }

    /**
     * Adds components to the factory if `addToFactory` is specified in the props.
     * This registers the specified components in the interface's factory.
     */
  }, {
    key: "addToFactory",
    value: function addToFactory() {
      if (this.props.addToFactory) {
        var factory = this["interface"].getFactory();
        var _iterator = _createForOfIteratorHelper(this.props.addToFactory),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var obj = _step.value;
            factory.registerComponent(obj.type, obj.comp);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }

    /**
     * Performs pre-setup tasks by preparing the component's setup functions.
     * This method combines custom setup functions with default ones.
     */
  }, {
    key: "preSetup",
    value: function preSetup() {
      this.componentPreSetup();
      this.initialSetupFunctions = [].concat(_toConsumableArray(this.initialSetupFunctions), [this.setComponentList, this.addToFactory], _toConsumableArray(this.addToInitialSetup));
    }

    /**
     * Placeholder for additional pre-setup tasks. Can be overridden in subclasses.
     */
  }, {
    key: "componentPreSetup",
    value: function componentPreSetup() {}
  }]);
}(_BaseComponent2["default"]);