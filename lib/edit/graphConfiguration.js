/**
 * Graph Configuration custom directive
 */
module.exports = function () {
  return {
    scope: {
      graphData: '='
    },
    restrict: 'E',
    templateUrl: '/lib/edit/graphConfiguration.html'
  };
};
