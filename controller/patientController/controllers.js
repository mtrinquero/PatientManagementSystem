var myPDView = angular.module('myPDView', []);

// Creating Controllers
myPDView.controller('MyController', ['$scope', '$http', function ($scope, $http) {

$http.get('controller/patientController/data.json').success(function(data) {
	$scope.artists = data;
	$scope.patientOrder = 'name';
});	


}]);