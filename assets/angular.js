/**
 * Created by Lenovo on 2016-05-31.
 */
var app = angular.module("app",["ngRoute"],["ngResource"]);

app.config(["$routeProvider"], function($routeProvider){
    "use strict";
   $routeProvider.when("/",{
       templateUrl:"/partials/index.html"
   }).when('/check',{
       templateUrl:"/partials/result"
   }).otherwise({
       redirectTo:"/"
   })
});