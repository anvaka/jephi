'use strict';

var app = angular.module('jephiApp', [
  'ngRoute'
]).config(require('./lib/routes'));

// Bind all directives to this angularjs application:
require('nerl').bindDirectives(app);
