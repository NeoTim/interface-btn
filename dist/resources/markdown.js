System.register(["aurelia-framework", "commonmark", "../util"], function (_export) {
  var Behavior, commonmark, isExternalLink, titleToSlug, _prototypeProperties, _classCallCheck, reader, writer, Markdown;

  function getHtml(markdown) {
    return writer.render(reader.parse(markdown));
  }

  function fixIndent(markdown) {
    /*
    This is intended to remove indentation that is not really part of
    the markdown, to preserve the ability to indent the markup properly.
     In the example below the total indentation will be reduced by 4 characters.
     |
    |<template>
    |  <markdown>
    |    # hello world
    |
    |    lorem ipsum bla bla
    |
    |        var x = 3;
    |
    |  </markdown>
    |</template>
    |
     */
    var result = /^( +)\S/im.exec(markdown);
    if (result) {
      markdown = markdown.replace(new RegExp("^ {" + result[1].length.toString() + "}", "gim"), "");
    }
    return markdown;
  }

  function fixBlockQuotes(markdown) {
    return markdown.replace(/^(\s*)&gt;/gim, function (match, p1) {
      return p1 + ">";
    });
  }

  function updateAnchorTargets(element) {
    // external links need target="_blank"
    var anchors = element.getElementsByTagName("a"),
        i,
        ii;
    for (i = 0, ii = anchors.length; i < ii; i++) {
      if (!isExternalLink(anchors[i].href)) continue;
      anchors[i].target = "_blank";
    }
  }

  function makeHeadingsLinkable(element) {
    var headings = element.querySelectorAll("h1,h2,h3,h4,h5,h6"),
        i,
        ii,
        h,
        title,
        slug;
    for (i = 0, ii = headings.length; i < ii; i++) {
      h = headings[i];
      title = h.textContent;
      slug = titleToSlug(title);
      h.id = slug;
      // h.innerHTML = `<a id="${slug}" class="anchor" href="#${slug}" aria-hidden="true"><span class="glyphicon glyphicon-link"></span></a>${title}`;
    }
  }

  function applySyntaxHighlighting(element) {
    var codes = element.getElementsByTagName("code"),
        i,
        ii;
    for (i = 0, ii = codes.length; i < ii; i++) {
      // don't mess with code elements that are not enclosed in a pre.
      if (codes[i].parentNode.tagName !== "PRE") continue;

      // trim the code to avoid strange appearance with line numbers.
      codes[i].textContent = codes[i].textContent.trim();

      // make sure there's a language-* class.
      if (!/language-/.test(codes[i].className)) codes[i].className += " language-javascript";

      // // make sure the parent pre has the line-numbers class.
      // if (!/line-numbers/.test(codes[i].parentNode.className))
      //   codes[i].parentNode.className += ' line-numbers';

      // apply syntax highlighting.
      Prism.highlightElement(codes[i]);
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_commonmark) {
      commonmark = _commonmark["default"];
    }, function (_util) {
      isExternalLink = _util.isExternalLink;
      titleToSlug = _util.titleToSlug;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();
      Markdown = _export("Markdown", (function () {
        function Markdown(element) {
          _classCallCheck(this, Markdown);

          this.element = element;
          element.className += " markdown-body";
          this.setContent(element.innerHTML || "");
        }

        _prototypeProperties(Markdown, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("markdown").withProperty("value", "valueChanged").noView().skipContentProcessing();
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
              this.setContent(newValue);
            },
            writable: true,
            configurable: true
          },
          setContent: {
            value: function setContent(markdown) {
              markdown = fixIndent(markdown);
              markdown = fixBlockQuotes(markdown);
              this.element.innerHTML = getHtml(markdown);

              updateAnchorTargets(this.element);
              makeHeadingsLinkable(this.element);
              applySyntaxHighlighting(this.element);
            },
            writable: true,
            configurable: true
          }
        });

        return Markdown;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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SUFBSSxFQUFFLENBQUM7OztBQUduRCxVQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQ3ZDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksc0JBQXNCLENBQUM7Ozs7Ozs7QUFPL0MsV0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO0dBQ0Y7Ozs7QUF4Rk8sY0FBUSxxQkFBUixRQUFROztBQUNULGdCQUFVOztBQUNULG9CQUFjLFNBQWQsY0FBYztBQUFFLGlCQUFXLFNBQVgsV0FBVzs7Ozs7Ozs7O0FBRS9CLFlBQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDaEMsWUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksRUFBRTtBQXFGN0IsY0FBUTtBQVVSLGlCQVZBLFFBQVEsQ0FVUCxPQUFPO2dDQVZSLFFBQVE7O0FBV2pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGlCQUFPLENBQUMsU0FBUyxJQUFJLGdCQUFnQixDQUFDO0FBQ3RDLGNBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMxQzs7NkJBZFUsUUFBUTtBQUNaLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FDekIsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FDckMsTUFBTSxFQUFFLENBQ1IscUJBQXFCLEVBQUUsQ0FBQzthQUM1Qjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUFFOzs7OztBQU9yQyxzQkFBWTttQkFBQSxzQkFBQyxRQUFRLEVBQUU7QUFDckIsa0JBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0I7Ozs7QUFFRCxvQkFBVTttQkFBQSxvQkFBQyxRQUFRLEVBQUU7QUFDbkIsc0JBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0Isc0JBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFM0MsaUNBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLGtDQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxxQ0FBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7Ozs7OztlQTVCVSxRQUFRIiwiZmlsZSI6InJlc291cmNlcy9tYXJrZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9