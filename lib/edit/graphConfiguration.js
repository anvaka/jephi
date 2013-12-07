/**
 * Graph Configuration custom directive
 */
module.exports = graphConfigurationDirective;

function graphConfigurationDirective () {
  // TODO: What if this directive requires another directive from NPM?
  return {
    scope: {
      graphData: '='
    },
    restrict: 'E',
    templateUrl: '/lib/edit/graphConfiguration.html'
  };
};
