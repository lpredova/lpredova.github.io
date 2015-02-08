'use strict';

// Declare app level module which depends on views, and components
var portfolioApp = angular.module('portfolioApp', [
    'ngRoute','ui.bootstrap'
]);


portfolioApp.run(function ($rootScope) {

    $rootScope.Sidebar = function () {
        $rootScope.boolChangeClass = !$rootScope.boolChangeClass;

    }
});
