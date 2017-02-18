angular.module('filtering').controller('mainCtrl', function($scope, mainService) {
  $scope.users = mainService.getUsers();

})
