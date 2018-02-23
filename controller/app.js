(function() {

  "use strict";

  var app = angular.module("myApp", [
    "myApp.controllers",
    "myApp.services",
    "myApp.directives",
    "myApp.filters",
    "myApp.dataservice",
    "ngRoute",
    "ngResource"
  ]);
  
  app.controller('LoginCtrl', function($scope, $http, $location, authentication) {
  $scope.login = function() {
    if ($scope.username === 'DEMO' && $scope.password === 'DEMO') {
      console.log('successful');
      authentication.isAuthenticated = true;
      authentication.user = { name: $scope.username };
      $location.url("/home");
    } else {
      $scope.loginError = "Invalid username/password combination";
      console.log('Login failed..');
    };
  };
});

app.controller('AppCtrl', function($scope, authentication) {
  $scope.templates =
  [
  	{ url: 'view/forms/login.html' },
  	{ url: 'view/home.html' }
  ];
  $scope.template = $scope.templates[0];
  $scope.login = function (username, password) {
    if ( username === 'DEMO' && password === 'DEMO') {
  		authentication.isAuthenticated = true;
  		$scope.template = $scope.templates[1];
  		$scope.user = username;
                
    } else {
  		$scope.loginError = "Invalid username/password combination";
    };
  };
  
});

app.run(function(authentication, $rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function(evt) {
    if(!authentication.isAuthenticated){ 
      $location.url("/login");
    }
    event.preventDefault();
  });
});

    
    app.controller('HomeCtrl', function($scope, authentication) {
  $scope.user = authentication.username;
  
});

app.factory('authentication', function() {
  return {
    isAuthenticated: false,
    user: null
  };
});

  app.config(function ($routeProvider) {
    $routeProvider
    
      .when('/login', {
          templateUrl: 'view/forms/login.html',
          controller: 'LoginCtrl'
      })
      .when('/home', {
           templateUrl: 'view/home.html',
           controller: 'HomeCtrl'
      })
      .when('/patientDirectoryView', {
           templateUrl: 'view/patientDirectoryView.html',
           controller: 'patientController'
      })
      .when('/clinicMetricsView', {
           templateUrl: 'view/clinicMetricsView.html'
      })
      .when('/patientTableView', {
           templateUrl: 'view/patientTableView.html'
      })
      .when('/softwareDocumentationView', {
           templateUrl: 'view/softwareDocumentationView.html'
      })
      .when('/techSupportView', {
           templateUrl: 'view/techSupportView.html'
      })
      .when('/patientProfileDetails/:itemId', {
           templateUrl: 'view/patientProfileDetails.html',
           controller: 'patientDetailsController'
      }) 
        
      .otherwise({redirectTo : '/login'});
  });

}());