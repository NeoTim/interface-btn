"format global";
"deps ../styles/aurelia-interface.css!";
// export function install(aurelia){
//   aurelia.withInstance(EventAggregator, includeEventsIn(aurelia));
// }

import {BtnComponent}                   from './btnComponent'
export function install(aurelia){

  aurelia.withResources([BtnComponent]);
}
