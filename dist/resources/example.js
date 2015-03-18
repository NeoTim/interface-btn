System.register(["aurelia-framework", "./example-context"], function (_export) {
  var Behavior, ExampleContext, _prototypeProperties, _classCallCheck, Example;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Example = _export("Example", (function () {
        function Example(context) {
          _classCallCheck(this, Example);

          this.context = context;
          this.model = null;
          this.view = null;
          this.result = false;
        }

        _prototypeProperties(Example, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("example").withProperty("base", "baseChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [ExampleContext];
            },
            writable: true,
            configurable: true
          }
        }, {
          baseChanged: {
            value: function baseChanged(newValue) {
              this.context.base = newValue;
              this.context.example = this;
            },
            writable: true,
            configurable: true
          }
        });

        return Example;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxRQUFRLEVBQ1IsY0FBYyx5Q0FFVCxPQUFPOzs7O0FBSFosY0FBUSxxQkFBUixRQUFROztBQUNSLG9CQUFjLG1CQUFkLGNBQWM7Ozs7Ozs7OztBQUVULGFBQU87QUFRUCxpQkFSQSxPQUFPLENBUU4sT0FBTztnQ0FSUixPQUFPOztBQVNoQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7NkJBYlUsT0FBTztBQUNYLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FDeEIsWUFBWSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQzthQUN4Qzs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUFFOzs7OztBQVE1QyxxQkFBVzttQkFBQSxxQkFBQyxRQUFRLEVBQUU7QUFDcEIsa0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUM3QixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQzdCOzs7Ozs7ZUFsQlUsT0FBTyIsImZpbGUiOiJyZXNvdXJjZXMvZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9