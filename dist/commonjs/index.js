"use strict";

// export function install(aurelia){
//   aurelia.withInstance(EventAggregator, includeEventsIn(aurelia));
// }

exports.Activator = require("./activator").Activator;

var _aelementActivator = require("./aelement-activator");

exports.ElementActivator = _aelementActivator.ElementActivator;
exports.PropertyActivator = _aelementActivator.PropertyActivator;
exports.AiActivatorAttachedBehavior = _aelementActivator.AiActivatorAttachedBehavior;
Object.defineProperty(exports, "__esModule", {
  value: true
});