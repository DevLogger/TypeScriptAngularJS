/**
 * Created by beto_ on 27/03/2016.
 */
System.config({
    defaultJSExtensions: true,
    baseURL: "./",
    map: {
        "angular": "node_modules/angular/angular.min.js",
        "main" : "built/Main"
    }

});
System.import('angular')
    .then(function () {
        System.import('main');
    });
