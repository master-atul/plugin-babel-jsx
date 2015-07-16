'use strict';

var babel = require('babel');
var hotPlugin = require('babel-plugin-react-hot');

exports.translate = function (load) {
  var babelOptions = System.babelOptions || {};
  var address = load.address;
  var split = address.split('/');
  var filename = split.pop();
  var options = {};
  var pathname;
  var output;

  options._address = address;
  options.filename = filename;
  options.sourceMap = 'inline';
  options.sourceFileName = filename+'!source';

  options.stage = babelOptions.stage || 0;
  options.optional = babelOptions.optional || ['runtime'];
  options.plugins = (babelOptions.plugins || []).concat(hotPlugin);
  options.modules = 'system';
  
  try {
    output = babel.transform(load.source, options);
    load.source = output.code;
  } catch (err) {
    delete options.sourceMap;
    output = babel.transform(load.source, options);
    load.source = output.code;
  }
};
