System.register(["interface"], function (_export) {
  var Ainterface, _prototypeProperties, _classCallCheck, Welcome, UpperValueConverter;

  return {
    setters: [function (_interface) {
      Ainterface = _interface.Ainterface;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome(ainterface) {
          _classCallCheck(this, Welcome);

          this["interface"] = ainterface;
          this.heading = "The Aurelia-Interface btn-Component";
          this.firstName = "John";
          this.lastName = "Doe";
          this.btnColor = "primary";
          this.btnSize = "md";
          this.btnWaves = "light";
        }

        _prototypeProperties(Welcome, {
          inject: {
            value: function inject() {
              return [Ainterface];
            },
            writable: true,
            configurable: true
          }
        });

        return Welcome;
      })());
      UpperValueConverter = _export("UpperValueConverter", (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _prototypeProperties(UpperValueConverter, null, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            },
            writable: true,
            configurable: true
          }
        });

        return UpperValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUseUNBQ0wsT0FBTyxFQW1CUCxtQkFBbUI7Ozs7QUFwQnhCLGdCQUFVLGNBQVYsVUFBVTs7Ozs7Ozs7O0FBQ0wsYUFBTztBQU1QLGlCQU5BLE9BQU8sQ0FNTixVQUFVO2dDQU5YLE9BQU87O0FBT2hCLGNBQUksYUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM1QixjQUFJLENBQUMsT0FBTyxHQUFHLHFDQUFxQyxDQUFDO0FBQ3JELGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxRQUFRLEdBQUMsU0FBUyxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxRQUFRLEdBQUMsT0FBTyxDQUFDO1NBRXZCOzs2QkFmVSxPQUFPO0FBRVgsZ0JBQU07bUJBQUEsa0JBQUU7QUFDYixxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQ3BCOzs7Ozs7ZUFKVSxPQUFPOztBQW1CUCx5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7NkJBQW5CLG1CQUFtQjtBQUM5QixnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUM7QUFDWCxxQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3JDOzs7Ozs7ZUFIVSxtQkFBbUIiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9