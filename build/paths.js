var path = require('path');

var appRoot  = 'src/';
var demoRoot = 'demo/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/',
  doc:'./doc',
  stylus:{
      index:'./styles/index.styl',
      all  :'./styles/**/*.styl'
  },
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  demo: {
      source : demoRoot + '**/*.js',
      html   : demoRoot + '**/*.html',
      root   : demoRoot,
  }
};
