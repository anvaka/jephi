'use strict';

angular.module('jephiApp', [
  'ngRoute'
]).config(require('./lib/routes'))
// This is ugly. I believe it could be done better
  .directive('graphConfiguration', require('./lib/edit/graphConfiguration'));
