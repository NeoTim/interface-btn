System.register(["aurelia-framework", "./example-context"], function (_export) {
  var Behavior, ExampleContext, _prototypeProperties, _classCallCheck, extensionLanguageMap, File;

  function getLanguage(filename) {
    var extension = /\.(\w+)$/.exec(filename)[1].toLowerCase();
    return extensionLanguageMap[extension];
  }

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

      extensionLanguageMap = {
        js: "javascript",
        html: "markup"
      };
      File = _export("File", (function () {
        function File(context) {
          _classCallCheck(this, File);

          this.context = context;
          this.info = null;
        }

        _prototypeProperties(File, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("file").withProperty("src", "propertyChanged").withProperty("view", "propertyChanged").withProperty("model", "propertyChanged");
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
          propertyChanged: {
            value: function propertyChanged() {
              var src = this.src,
                  context = this.context,
                  example = context.example;

              this.info = {
                name: src,
                moduleId: context.base + "/" + src.substr(0, src.indexOf(".")),
                language: getLanguage(src),
                url: "demo/" + context.base + "/" + src,
                repoUrl: context.githubBase + "/demo/" + context.base + "/" + src
              };

              if (this.view === "true") example.view = this.info;

              if (this.model === "true") example.model = this.info;

              example.result = example.view && example.model;
            },
            writable: true,
            configurable: true
          }
        });

        return File;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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