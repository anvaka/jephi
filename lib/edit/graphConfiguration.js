/**
 * Graph Configuration custom directive
 */
module.exports = graphConfigDirective;

// associate this directive with custom name:
require('nerl').directive('graphConfiguration', graphConfigDirective);

function graphConfigDirective() {
  return {
    scope: {
      graphData: '='
    },
    restrict: 'E',
    templateUrl: '/lib/edit/graphConfiguration.html'
  };
}
