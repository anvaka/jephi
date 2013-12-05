module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit', {
    templateUrl: '/lib/edit/index.html',
    controller: require('./edit/editController')
  });

  $routeProvider.when('/homepage', {
    templateUrl: '/lib/homepage/index.html',
    controller: require('./homepage/homepageController')
  });

  $routeProvider.otherwise({redirectTo: '/homepage'});
}];
