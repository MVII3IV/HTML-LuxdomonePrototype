 var app = angular.module("app", ['ngRoute']);

 app.config(function ($routeProvider) {
     $routeProvider

         // route for the home page
         .when('/', {
             templateUrl: 'public/pages/main-menu.html',
             controller: 'mainController'
         })

         // route for the about page
         .when('/lights', {
             templateUrl: 'public/pages/lights.html',
             controller: 'deviceController'
         })

 });

 app.controller("mainController", function ($scope, $interval) {

     $interval(function () {
         $scope.clock = Date.now();
     }, 1000);

 });

 app.controller("deviceController", function ($scope, $interval) {

     $interval(function () {
         $scope.clock = Date.now();
     }, 1000);

 });