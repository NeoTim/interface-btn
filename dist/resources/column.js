System.register(["aurelia-framework"], function (_export) {
  var Behavior, _prototypeProperties, _classCallCheck, Column;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Column = _export("Column", (function () {
        function Column() {
          _classCallCheck(this, Column);
        }

        _prototypeProperties(Column, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("column");
            },
            writable: true,
            configurable: true
          }
        });

        return Column;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jb2x1bW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEseUNBRUgsTUFBTTs7OztBQUZYLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsWUFBTTtBQUtOLGlCQUxBLE1BQU07Z0NBQU4sTUFBTTtTQU1oQjs7NkJBTlUsTUFBTTtBQUNWLGtCQUFRO21CQUFBLG9CQUFHO0FBQ2hCLHFCQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekM7Ozs7OztlQUhVLE1BQU0iLCJmaWxlIjoicmVzb3VyY2VzL2NvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9