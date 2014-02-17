angular.module('TarifsParkings')
.controller('ParkingController',
            function($scope, $http, $cookieStore, $location) {
                $scope.serverError = false;
                $scope.parkings = new Array();

                $http.get(parkingsApiUrl)
                .success(function(data, status, headers, config) {
                    $scope.parkings = data;
                    $scope.serverError = false;
                })
                .error(function(data, status, headers, config) {
                    console.log("Error: " + data);
                    $scope.serverError = true;
                });

                $scope.consult = function(name) {
                    $location.path('/tarifs/' + name);
                };
            }
           );