angular.module('an_array').controller('mainCtrl', function($scope, mainService) {
  $scope.users = mainService.getUsers();

})
