"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ElementActivator = exports.ElementActivator = (function () {
    function ElementActivator(type, name, element, prefix) {
        _classCallCheck(this, ElementActivator);

        var _this = this;
        this.type = type;
        this.name = name;
        this.element = element;
        this.prefix = prefix;
        this.splitter = /\s*,\s*/;
        this.callbacks = { onToggle: [],
            onCall: [],
            onSwap: []
        };
    }

    _prototypeProperties(ElementActivator, null, {
        _prefix: {
            value: function _prefix(className) {
                if (!this.prefix) {
                    return className;
                }if (Array.isArray(className)) {
                    var array = [];
                    for (var c in className) {
                        array.push("" + this.prefix + "-" + c);
                    }
                    return array;
                }
                return "" + this.prefix + "-" + className;
            },
            writable: true,
            configurable: true
        },
        _hasClass: {
            value: function _hasClass(className) {
                return this.element.classList.contains(className);
            },
            writable: true,
            configurable: true
        },
        _removeClass: {
            value: function _removeClass() {
                this.element.classList.remove.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
        },
        _addClass: {
            value: function _addClass() {
                this.element.classList.add.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
        },
        _toggleClass: {
            value: function _toggleClass() {
                this.element.classList.toggle.apple(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
        },
        invoke: {

            /**
             * invoke
             * @reference               This method references the call method on AiActivator. so that we don't overwrite JavaScripts .call() method
             * @param  {String} method  String to specify which method to invoke
             */

            value: function invoke(method) {
                if (typeof this.element[method] !== "function") {
                    return console.error("AiActivator: " + this.name + " does not have a method called " + method);
                }this.element[method]();
                this.onEvent("onCall", null, null);
            },
            writable: true,
            configurable: true
        },
        toggle: {

            /**
             * toggle
             * @param  {String} property  toggle the boolean of the given property
             */

            value: function toggle(className) {
                className = this._prefix(className);
                console.log(className);
                this.element.classList.toggle(className);
                this.onEvent("onToggle", className);
            },
            writable: true,
            configurable: true
        },
        swap: {

            /**
             * swap
             * @param  {Array} propertyList swaps the properties on the given context
             */

            value: function swap(classList) {
                classList = classList.trim().split(this.splitter);
                if (!Array.isArray(classList)) {
                    return console.error("AiActivator.swap: requires and array");
                }if (!this._hasClass(classList[0]) && !this._hasClass(classList[1])) {
                    this.element.classList.toggle(classList[0]);
                } else {
                    this.element.classList.toggle(classList[0]);
                    this.element.classList.toggle(classList[1]);
                }
                this.onEvent("onSwap");
            },
            writable: true,
            configurable: true
        },
        registerCallback: {

            /**
             * registerCallback   Register callbacks for events
             * @param  {String}   type     Callback category <onToggle, onCall, onSwap>
             * @param  {Function} callback Callback to be registered
             */

            value: function registerCallback(type, callback) {
                if (typeof callback !== "function") {
                    return console.error("AiActivator." + type + ": this callback \"" + callback + "\" is not a function");
                }this.callbacks[type].push(callback);
            },
            writable: true,
            configurable: true
        },
        onEvent: {

            /**
             * onEvent
             * @param  {String} type  The callbacks property containing the array of callbacks to call
             */

            value: function onEvent(type) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.callbacks[type][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var callback = _step.value;

                        callback(arguments[1], arguments[2]);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator["return"]) {
                            _iterator["return"]();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            },
            writable: true,
            configurable: true
        }
    });

    return ElementActivator;
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});