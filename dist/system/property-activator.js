System.register([], function (_export) {
    var _taggedTemplateLiteral, _prototypeProperties, _classCallCheck, PropertyActivator;

    return {
        setters: [],
        execute: function () {
            "use strict";

            _taggedTemplateLiteral = function (strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); };

            _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            PropertyActivator = _export("PropertyActivator", (function () {
                function PropertyActivator(type, name, viewModel, propertyName, invokeMethod) {
                    var _this = this;

                    _classCallCheck(this, PropertyActivator);

                    this.type = type;
                    this.name = name;
                    this.viewModel = viewModel;
                    this.property = propertyName;
                    this.callbacks = { onToggle: [],
                        onCall: [],
                        onSwap: []
                    };
                    this._errors = {
                        use: function (method, type, msg) {
                            console.error("AiActivator." + method + ": " + _this.name + " does not have a " + type + " by the name of " + msg);
                        },
                        msg: function (method, msg) {
                            console.error("AiActivator." + method + ":" + name + " " + msg);
                        } };
                }

                _prototypeProperties(PropertyActivator, null, {
                    invoke: {

                        /**
                         * invoke
                         * @reference               This method references the call method on AiActivator. so that we don't overwrite JavaScripts .call() method
                         * @param  {String} method  String to specify which method to invoke
                         */

                        value: function invoke(method) {
                            if (typeof this.viewModel[method] !== "function") {
                                return this._errors.use("call", "method", method);
                            }this.viewModel[method]();
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

                        value: function toggle() {
                            console.log(this);
                            if (this.viewModel[this.property] === undefined) {
                                return this._errors.use("toggle", "property", this.property);
                            }var currentPropertyValue = this.viewModel[this.property];
                            var newPropertyValue = !this.viewModel[this.property];
                            this.viewModel[this.property] = newPropertyValue;
                            this.onEvent("onToggle", newPropertyValue, currentPropertyValue);
                        },
                        writable: true,
                        configurable: true
                    },
                    swap: {

                        /**
                         * swap
                         * @param  {Array} propertyList swaps the properties on the given viewModel
                         */

                        value: function swap(propertyList) {
                            if (!Array.isArray(propertyList)) {
                                return this._errors.msg("swap", null, "requires and array");
                            }var currentPropertyValue = this.viewModel[this.property];
                            var newPropertyValue = currentPropertyValue === propertyList[0] ? propertyList[0] : propertyList[1];
                            this.viewModel[this.property] = newPropertyValue;
                            this.onEvent("onSwap", newPropertyValue, currentPropertyValue);
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
                                return this._errors.msg(name(_taggedTemplateLiteral(["", " ", ""], ["", " ", ""]), type, callback), "is not a function");
                            }this.callbacks[type].push(callback);
                        },
                        writable: true,
                        configurable: true
                    },
                    onEvent: {
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

                return PropertyActivator;
            })());
        }
    };
});