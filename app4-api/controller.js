angular.module('api').controller('mainCtrl', function($scope, mainService) {
  $scope.init = function() {
    getShips();

    $scope.gridOptions = {
      data: 'ships',
      height: "800px",
      sortInfo: {
        fields: ['name', 'cargo_capacity', 'length', 'model', 'manufacturer', 'starship_class'],
        directions:['asc']
      },
      columnDefs: [
        {field: 'name', displayName:'Name', width:'100px'},
        {field: 'cargo_capacity', displayName:'Cargo', wdith:'100px'},
        {field: 'length', displayName: 'Length', width:'100px'},
        {field: 'model', displayName: 'Model', width:'100px'},
        {field: 'manufacturer', displayName: 'Manufacturer', width: '100px'},
        {field: 'starship_class', displayName: 'Class', width: '100px'}
      ]
    }
  }

  function getShips() {
    mainService.getShips().then(function(response) {
      console.log('controller', response);
      $scope.ships = response;
      $scope.gridOptions.height = ($scope.ships.length * 34) + "px";
    })
  }

  $scope.init();
});
