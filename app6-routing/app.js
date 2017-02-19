angular.module('routing', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state(
        'home',
        {
          url: '/',
          controller: 'homeCtrl',
          // template: '<h2>Hello World</h2>'
          templateUrl: 'home/home.html'
        }
      )
      .state(
        'details',
        {
          url: '/details',
          controller: 'detailsCtrl',
          templateUrl: 'details/details.html'
        }
      )
      .state(
        'signup',
        {
          url: '/signup',
          controller: 'signupCtrl',
          templateUrl: 'signup/signup.html'
        }
      )
})
