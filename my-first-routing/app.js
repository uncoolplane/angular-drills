angular.module('my-first-router', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state(
        'home', //title of state
        {
          url: '/', //home screen
          controller: 'homeCtrl', //name of controller to use
          templateUrl: 'home/home.html' //can just have template, pass hardcoded html (<h1>...</h1>)
        } //object, key/value pairs
      )
      .state(
        'about',
        {
          url: '/about',
          controller: 'aboutCtrl',
          templateUrl: 'about/about.html'
        }
      )
})
