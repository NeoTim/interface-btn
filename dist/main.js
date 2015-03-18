System.register(["aurelia-framework", "aurelia-logging-console", "interface"], function (_export) {
    var LogManager, ConsoleAppender, Ainterface;

    _export("configure", configure);

    function configure(aurelia) {

        aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("interface-btn").plugin("./resources/index");
        var ainterface = aurelia.container.get(Ainterface);
        ainterface.setTheme("aurelia-interface");

        aurelia.start().then(function (framework) {
            console.log("Main", framework);
            return framework.setRoot("app", document.body);
        });
    }

    return {
        setters: [function (_aureliaFramework) {
            LogManager = _aureliaFramework.LogManager;
        }, function (_aureliaLoggingConsole) {
            ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
        }, function (_interface) {
            Ainterface = _interface.Ainterface;
        }],
        execute: function () {
            "use strict";

            LogManager.addAppender(new ConsoleAppender());
            LogManager.setLevel(LogManager.levels.debug);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFRLFVBQVUsRUFDVixlQUFlLEVBQ2QsVUFBVTs7eUJBR0gsU0FBUzs7QUFBbEIsYUFBUyxTQUFTLENBQUMsT0FBTyxFQUFFOztBQUVqQyxlQUFPLENBQUMsR0FBRyxDQUNSLHNCQUFzQixFQUFFLENBQ3hCLGdCQUFnQixFQUFFLENBQ2xCLE1BQU0sRUFBRSxDQUNSLGVBQWUsRUFBRSxDQUNqQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzVCLFlBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELGtCQUFVLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRXpDLGVBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FDVixJQUFJLENBQUMsVUFBUyxTQUFTLEVBQUU7QUFDdEIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0FBQzlCLG1CQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNqRCxDQUFDLENBQUM7S0FDVjs7OztBQXRCTyxzQkFBVSxxQkFBVixVQUFVOztBQUNWLDJCQUFlLDBCQUFmLGVBQWU7O0FBQ2Qsc0JBQVUsY0FBVixVQUFVOzs7OztBQUNuQixzQkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDOUMsc0JBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=