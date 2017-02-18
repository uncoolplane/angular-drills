angular.module('api').service('mainService', function($http) {
    var url = "https://swapi.co/api/starships"
    var ships = [];
    this.getShips = function() {
      return $http({
      method: 'GET',
      url: url
    }).then(function(response) {
      console.log('service', response.data.results);
      ships = response.data.results;
      return ships;
    })}
});
