import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import  {Ainterface} from 'interface'
LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);
export function configure(aurelia) {

  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
    .plugin('interface-btn')
    .plugin('./resources/index')
    var ainterface = aurelia.container.get(Ainterface);
    ainterface.setTheme('aurelia-interface');

    aurelia.start()
        .then(function(framework) {
            console.log('Main', framework)
            return framework.setRoot('app', document.body)
        });
}
