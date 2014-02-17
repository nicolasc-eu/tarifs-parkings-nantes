var tarifsApiUrl = "http://demo.nicolasc.eu/tarifs-parkings-nantes/api/tarifs_proxy.php";
var parkingsApiUrl = "http://demo.nicolasc.eu/tarifs-parkings-nantes/api/parkings_proxy.php";

angular.module('TarifsParkings', ['ngRoute', 'ngCookies'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller:'ParkingController',
        templateUrl:'parkings.html'
    })
    .when('/tarifs/:name', {
        controller: 'TarifController',
        templateUrl: 'tarifs.html'
    })
    .otherwise({
        redirectTo:'/'
    });
})
.controller([]);

