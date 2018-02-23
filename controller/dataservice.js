angular.module("myApp.dataservice", [ "ngResource" ]).factory("Patient", function($resource) {
    return $resource("http://52.1.207.77/rest/patient/:id", {
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

