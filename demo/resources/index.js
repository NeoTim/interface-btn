import {Markdown} from './markdown';
import {Source} from './source';
import {Example} from './example';
import {ExampleContext} from './example-context'
import {Column} from './column';
import {File} from './file';

export function install(aurelia) {
  aurelia.withResources(Markdown, Source);

  aurelia.container.registerInstance(
    ExampleContext,
    new ExampleContext('https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages'))
  aurelia.withResources(Markdown, Source, Example, Column, File);
}
