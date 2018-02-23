(function() {

  "use strict";

  var myApp = angular.module("myApp.services",[]);

  //myApp.value('version', '0.1');

  // here is a declaration of simple utility function to know if an given param is a String.
  myApp.service("UtilSrvc", function () {

      this.helloWorld = function(name) {
      	var result = "Hum, Hello you, but your name is too weird...";
        
      	return "Hello, " + name;
      };
  });

}());
/**
angular.module("pmsApp", [ "ngResource" ]).factory("Patient", function($resource) {
    return $resource("http://localhost:8080/patient/:id", {
        id: '@id'
    }, {
        update: {
            method: "PUT"
        },
        remove: {
            method: "DELETE"
        },
        get: {
            method:'GET'
        }
    });
});
**/