angular.module('TarifsParkings')
.controller('TarifController',
            function($scope, $http, $cookieStore, $location, $routeParams) {
                $scope.serverError = false;
                $scope.tarifs = new Array();
                $scope.currentParking = '';

                var urlWithFilter = '';

                if($routeParams.name != 'undefined') {
                    urlWithFilter = tarifsApiUrl + '?filter={"NOM_COMPLET":{"$eq":"' + $routeParams.name + '"}}';
                    $scope.currentParking = $routeParams.name;
                }

                $http.get(urlWithFilter)
                .success(function(data, status, headers, config) {
                    $scope.serverError = false;
                    $scope.tarifs = data.data;
                })
                .error(function(data, status, headers, config) {
                    console.log("Error: " + data);
                    $scope.serverError = true;
                });
            }
           );