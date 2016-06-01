/**
 * Created by Lenovo on 2016-05-31.
 */
var app = angular.module('app', ['ngRoute',"ngResource"]);

app.config(["$routeProvider", function ($routeProvider) {
    "use strict";
    $routeProvider
        .when("/", {
            templateUrl: "/partials/start.html",
            controller:"IndexController"
        })
        .when('/check/:name', {
            templateUrl: "/partials/result.html",
            controller: "WeatherResultController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);


app.controller("IndexController",["$scope",
function($scope){
    "use strict";

}]);



app.controller("WeatherResultController", ["$scope","$resource","$routeParams",
    function ($scope,$resource,$routeParams) {
        "use strict";
        console.log($scope.zmienna);
        var Weather = $resource("/check/:name",{name:"@_name"});
        Weather.get({name:$routeParams.name},function(data){
            $scope.weather = data;
        })


    }]);
//app.controller('IndexController',['$scope','$resource','$location',
//    function($scope,$resource,$location){
//        $scope.login = function(){
//            var Users = $resource("/user/login");
//            console.log("logujemy");
//
//            Users.save($scope.user,function(){
//                console.log("logujemy");
//            })
//        }
//    }]);
//app.config(function ($routeProvider) {
//    $routeProvider
//        .when('/', {
//            templateUrl: 'index1.html',
//            controller: 'indexController1'
//        })
//        .when('/view/:id', {
//            templateUrl: 'index2.html',
//            controller: 'indexController2'
//        })
//        .otherwise({
//            redirectTo: '/'
//        });
//});