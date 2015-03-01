define(["exports", "./activator", "./aelement-activator"], function (exports, _activator, _aelementActivator) {
  "use strict";

  // export function install(aurelia){
  //   aurelia.withInstance(EventAggregator, includeEventsIn(aurelia));
  // }

  exports.Activator = _activator.Activator;
  exports.ElementActivator = _aelementActivator.ElementActivator;
  exports.PropertyActivator = _aelementActivator.PropertyActivator;
  exports.AiActivatorAttachedBehavior = _aelementActivator.AiActivatorAttachedBehavior;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});