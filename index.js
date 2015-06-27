'use strict';

var babel = require('babel');
//var hotifyPlugin = require('babel-plugin-react-hotify');

exports.translate = function (load) {
  var babelOptions = System.babelOptions || {};
  var split = load.address.split('/');
  var filename = split.pop();
  var options = {};
  var output;

  options.filename = filename;
  options.sourceMap = 'inline';
  if (split[split.length - 1] === 'eval') {
    options.sourceFileName = '../'+filename;
  } else {
    options.sourceFileName = filename+'!source';
  }

  options.stage = babelOptions.stage || 0;
  options.optional = babelOptions.optional || ['runtime'];
  options.plugins = babelOptions.plugins;// || [hotifyPlugin];
  
  output = babel.transform(load.source, options);
  load.source = output.code;
};
