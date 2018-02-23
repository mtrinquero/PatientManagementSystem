(function () {

  "use strict";

  var myApp = angular.module("myApp.filters",[]);

  myApp.filter('interpolate', function (version) {
    return function(text) {
       return String(text).replace(/\%VERSION\%/mg, version);
     }
  });

  // just copy paste the example above to add more filters

}());