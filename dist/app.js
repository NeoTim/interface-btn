System.register(["aurelia-router", "bootstrap", "interface"], function (_export) {
  var Router, bootstrap, Ainterface, _prototypeProperties, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }, function (_interface) {
      Ainterface = _interface.Ainterface;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router, ainterface) {
          _classCallCheck(this, App);

          this["interface"] = ainterface;
          console.log(this["interface"]);
          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia-Interface";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router, Ainterface];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsRUFDUixVQUFVLHlDQUVMLEdBQUc7Ozs7QUFKUixZQUFNLGtCQUFOLE1BQU07O0FBQ1AsZUFBUzs7QUFDUixnQkFBVSxjQUFWLFVBQVU7Ozs7Ozs7OztBQUVMLFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTSxFQUFFLFVBQVU7Z0NBRm5CLEdBQUc7O0FBR1osY0FBSSxhQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzVCLGlCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksYUFBVSxDQUFDLENBQUE7QUFDM0IsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7QUFDbkMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxDQUNqRixDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7NkJBWlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBRHJDLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=