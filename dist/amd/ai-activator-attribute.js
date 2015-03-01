define(["exports", "aurelia-templating", "./activator"], function (exports, _aureliaTemplating, _activator) {
    "use strict";

    var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    var Behavior = _aureliaTemplating.Behavior;
    var Activator = _activator.Activator;

    var AiActivatorAttachedBehavior = exports.AiActivatorAttachedBehavior = (function () {
        function AiActivatorAttachedBehavior(element, activator) {
            _classCallCheck(this, AiActivatorAttachedBehavior);

            var _this = this;
            this.element = element;
            this.activator = activator;

            this._eventHandler = function (evt) {
                evt.preventDefault();

                _this.toggle && _this.delegating.toggle(_this.toggle);
                _this.swap && _this.delegating.swap(_this.swap);
                _this.call && _this.delegating.invoke(_this.call);
                if (!_this.toggle && !_this.swap && !_this.call) _this.delegating.toggle(_this.toggle);
            };
        }

        _prototypeProperties(AiActivatorAttachedBehavior, {
            metadata: {
                value: function metadata() {
                    return Behavior.withOptions().and(function (x) {
                        x.withProperty("activate");
                        x.withProperty("delegate");
                        x.withProperty("prefix");
                        x.withProperty("onToggle", "onToggleChanged", "on-toggle");
                        x.withProperty("onCall", "onCallChanged", "on-call");
                        x.withProperty("onSwap", "onSwapChanged", "on-swap");
                        x.withProperty("toggle");
                        x.withProperty("call");
                        x.withProperty("swap");
                        x.withProperty("on");
                    });
                },
                writable: true,
                configurable: true
            },
            inject: {
                value: function inject() {
                    return [Element, ActivatorService];
                },
                writable: true,
                configurable: true
            }
        }, {
            bind: {
                value: function bind() {
                    this.activate && this.registerActivation();
                    this.delegate && this.registerDelegation();
                },
                writable: true,
                configurable: true
            },
            unbind: {
                value: function unbind() {
                    this.delegate && this.unRegisterDelegation();
                },
                writable: true,
                configurable: true
            },
            registerActivation: {

                // activates an element for change

                value: function registerActivation() {
                    this.activator.activateElement(this.activate, this.element, this.prefix);
                },
                writable: true,
                configurable: true
            },
            registerDelegation: {

                // delegates element for toggling activated element

                value: function registerDelegation() {

                    this.onToggle && this.activator.registerCallback(this.delegate, "onToggle", this.onToggle);
                    this.onCall && this.activator.registerCallback(this.delegate, "onCall", this.onCall);
                    this.onSwap && this.activator.registerCallback(this.delegate, "onSwap", this.onSwap);
                    this.delegating = this.activator.delegate(this.delegate);
                    this.element.addEventListener(this.on || "click", this._eventHandler);
                },
                writable: true,
                configurable: true
            },
            unRegisterDelegation: {
                value: function unRegisterDelegation() {
                    this.element.removeEventListener(this.on || "click", this._eventHandler);
                },
                writable: true,
                configurable: true
            }
        });

        return AiActivatorAttachedBehavior;
    })();

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});