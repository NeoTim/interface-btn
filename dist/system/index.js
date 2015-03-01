System.register(["./activator", "./aelement-activator"], function (_export) {
  return {
    setters: [function (_activator) {
      // export function install(aurelia){
      //   aurelia.withInstance(EventAggregator, includeEventsIn(aurelia));
      // }

      _export("Activator", _activator.Activator);
    }, function (_aelementActivator) {
      _export("ElementActivator", _aelementActivator.ElementActivator);

      _export("PropertyActivator", _aelementActivator.PropertyActivator);

      _export("AiActivatorAttachedBehavior", _aelementActivator.AiActivatorAttachedBehavior);
    }],
    execute: function () {
      "use strict";
    }
  };
});