System.register(["./markdown", "./source", "./example", "./example-context", "./column", "./file"], function (_export) {
  var Markdown, Source, Example, ExampleContext, Column, File;

  _export("install", install);

  function install(aurelia) {
    aurelia.withResources(Markdown, Source);

    aurelia.container.registerInstance(ExampleContext, new ExampleContext("https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages"));
    aurelia.withResources(Markdown, Source, Example, Column, File);
  }

  return {
    setters: [function (_markdown) {
      Markdown = _markdown.Markdown;
    }, function (_source) {
      Source = _source.Source;
    }, function (_example) {
      Example = _example.Example;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }, function (_column) {
      Column = _column.Column;
    }, function (_file) {
      File = _file.File;
    }],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQ1AsY0FBYyxFQUNkLE1BQU0sRUFDTixJQUFJOztxQkFFSSxPQUFPOztBQUFoQixXQUFTLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDL0IsV0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRXhDLFdBQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQ2hDLGNBQWMsRUFDZCxJQUFJLGNBQWMsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDLENBQUE7QUFDM0YsV0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDaEU7Ozs7QUFkTyxjQUFRLGFBQVIsUUFBUTs7QUFDUixZQUFNLFdBQU4sTUFBTTs7QUFDTixhQUFPLFlBQVAsT0FBTzs7QUFDUCxvQkFBYyxtQkFBZCxjQUFjOztBQUNkLFlBQU0sV0FBTixNQUFNOztBQUNOLFVBQUksU0FBSixJQUFJIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9