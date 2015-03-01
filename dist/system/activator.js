System.register(["./property-activator", "./element-activator"], function (_export) {
    var PropertyActivator, ElementActivator, _prototypeProperties, _classCallCheck, Activator;

    return {
        setters: [function (_propertyActivator) {
            PropertyActivator = _propertyActivator.PropertyActivator;
        }, function (_elementActivator) {
            ElementActivator = _elementActivator.ElementActivator;
        }],
        execute: function () {
            "use strict";

            _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            Activator = _export("Activator", (function () {
                function Activator() {
                    _classCallCheck(this, Activator);

                    this.msgs = {
                        activate: "the first argument must be either \"element\" or \"property\"",
                        exists: "event already exists! Please choose a different name",
                        delegate: "event does not exist"

                    };

                    this._error = function (method, name, msg) {
                        console.error("AiActivator." + method + ":" + name + " " + msg);
                    };
                    this.delegations = {};
                    this.activations = {};
                }

                _prototypeProperties(Activator, null, {
                    activate: {
                        /**
                         * activate               activation method for activating element or properties.
                         * @param  {String} type  REQUIRED| Use the key to specify which type of activation you would like to make.
                         * @NOTE                  Please see the activateElement, or activateProperty methods for descriptions on parameters
                         * @usage                 if type is element
                         *                        activator.activate( 'element', 'someName', element, prefix)
                         * @usage                 if type is property
                         *                        activator.activate( 'property', 'someName', viewModel, propertyName, )
                         * @return {[type]}      [description]
                         */

                        value: function activate(type) {
                            if (type !== "element" || type !== "property") {
                                return this._error("activate", this.msgs.activate);
                            }type === "element" && this.activateElement.apply(this, arguments)(type === "property") && this.activateProperty.apply(this, arguments);
                        },
                        writable: true,
                        configurable: true
                    },
                    activateElement: {

                        /**
                         * activateElement
                         * @param  {String}  name    REQUIRED| The key/name the activation will be stored as within this.activations
                         * @param  {Element} element REQUIRED| Must be a DOM or jQuery selected element
                         * @param  {String}  prefix  OPTIONAL| If you would like to prefix your classes when toggled
                         */

                        value: function activateElement(name, element, prefix) {
                            if (this.activations[name]) {
                                return this._error("activate", name, this.msgs.exists);
                            }this.activations[name] = new ElementActivator("element", name, element, prefix);
                        },
                        writable: true,
                        configurable: true
                    },
                    activateProperty: {
                        value: function activateProperty(name, viewModel, propertyName, invokeMethod) {
                            if (this.activations[name]) {
                                return this._error("activate", name, this.msgs.exists);
                            }this.activations[name] = new PropertyActivator("property", name, viewModel, propertyName, invokeMethod);
                        },
                        writable: true,
                        configurable: true
                    },
                    registerCallback: {
                        value: function registerCallback(name, type, callback) {
                            this.activations[name].registerCallback(type, callback);
                        },
                        writable: true,
                        configurable: true
                    },
                    delegate: {
                        value: function delegate(name) {
                            if (!this.activations[name]) {
                                return this._error("delegate", name, this.msgs.delegate);
                            }return this.activations[name];
                        },
                        writable: true,
                        configurable: true
                    }
                });

                return Activator;
            })());
        }
    };
});