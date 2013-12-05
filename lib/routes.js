module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit', { templateUrl: '/lib/edit/index.html', controller: require('./edit/index.js') });
  $routeProvider.when('/homepage', { templateUrl: '/lib/homepage/index.html', controller: require('./homepage/index.js') });
  $routeProvider.otherwise({redirectTo: '/homepage'});
}];
