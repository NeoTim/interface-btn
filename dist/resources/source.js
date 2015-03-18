System.register(["aurelia-framework", "aurelia-http-client"], function (_export) {
  var Behavior, HttpClient, _prototypeProperties, _classCallCheck, httpClient, Source;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      httpClient = new HttpClient().configure(function (builder) {
        return builder.withResponseType("text");
      });
      Source = _export("Source", (function () {
        function Source(element) {
          _classCallCheck(this, Source);

          this.element = element;
        }

        _prototypeProperties(Source, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("source").withProperty("value", "valueChanged", "source");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(newValue) {
              var _this = this;

              if (!newValue) {
                this.element.innerHTML = "";
                return;
              }

              httpClient.get(newValue).then(function (response) {
                _this.element.textContent = response.content.trim();
                Prism.highlightElement(_this.element);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Source;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zb3VyY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsRUFDUixVQUFVLHlDQUVkLFVBQVUsRUFFRCxNQUFNOzs7O0FBTFgsY0FBUSxxQkFBUixRQUFROztBQUNSLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVkLGdCQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO2VBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztPQUFBLENBQUM7QUFFM0UsWUFBTTtBQVFOLGlCQVJBLE1BQU0sQ0FRTCxPQUFPO2dDQVJSLE1BQU07O0FBU2YsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzZCQVZVLE1BQU07QUFDVixrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FDMUIsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEQ7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFLckMsc0JBQVk7bUJBQUEsc0JBQUMsUUFBUSxFQUFFOzs7QUFDckIsa0JBQUksQ0FBQyxRQUFRLEVBQUU7QUFDYixvQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLHVCQUFPO2VBQ1I7O0FBRUQsd0JBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQ3JCLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoQixzQkFBSyxPQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkQscUJBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDO2VBQ3RDLENBQUMsQ0FBQzthQUNOOzs7Ozs7ZUF2QlUsTUFBTSIsImZpbGUiOiJyZXNvdXJjZXMvc291cmNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=