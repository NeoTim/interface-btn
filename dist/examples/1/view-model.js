System.register([], function (_export) {
    var _prototypeProperties, _classCallCheck, BtnComponent;

    return {
        setters: [],
        execute: function () {
            "use strict";

            _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            BtnComponent = _export("BtnComponent", (function () {
                function BtnComponent(element) {
                    _classCallCheck(this, BtnComponent);

                    this.element = element;
                    this.btnColor = "primary";
                    this.btnSize = "md";
                    this.btnWaves = "light";
                }

                _prototypeProperties(BtnComponent, {
                    inject: {
                        value: function inject() {
                            return [Element];
                        },
                        writable: true,
                        configurable: true
                    }
                });

                return BtnComponent;
            })());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzEvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOytDQUFhLFlBQVk7Ozs7Ozs7Ozs7O0FBQVosd0JBQVk7QUFLVix5QkFMRixZQUFZLENBS1QsT0FBTzswQ0FMVixZQUFZOztBQU1qQix3QkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsd0JBQUksQ0FBQyxRQUFRLEdBQUMsU0FBUyxDQUFDO0FBQ3hCLHdCQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztBQUNsQix3QkFBSSxDQUFDLFFBQVEsR0FBQyxPQUFPLENBQUM7aUJBQ3pCOztxQ0FWUSxZQUFZO0FBRWQsMEJBQU07K0JBQUEsa0JBQUU7QUFDWCxtQ0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNwQjs7Ozs7O3VCQUpRLFlBQVkiLCJmaWxlIjoiZXhhbXBsZXMvMS92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=