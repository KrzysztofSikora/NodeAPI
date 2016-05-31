/**
 * Created by Lenovo on 2016-05-31.
 */
var app = angular.module("Scripts",["ngRoute"],["ngResource"]);

app.config(["$routeProvider"], function($routeProvider){
    "use strict";
   $routeProvider.when('/check',{
       templateUrl:"/partials/result"
   }).otherwise({
       redirectTo:"/"
   })
});