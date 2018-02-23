var myApp = angular.module("myApp.controllers", []);

  myApp.controller('patientController', ['$scope', '$http', function($scope, $http) {
  $http.get('model/data.json').success(function(data) {
    $scope.patients = data;
    $scope.patientOrder = 'name';
  });
}]);
  
 myApp.controller('patientDetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('model/data.json').success(function(data) {
    $scope.patients = data;
    $scope.whichItem = $routeParams.itemId;
  });
  
  myApp.controller('usersController', ['$scope', '$http', function($scope, $http) {
  $http.get('model/users.json').success(function(user) {
    $scope.users = user;
   });
}]);

 }]); 
