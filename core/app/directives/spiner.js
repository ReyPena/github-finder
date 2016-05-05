angular.module("pokedex").directive("spiner", function() {
    return {
        restrict: "E",
        templateUrl: "../views/directiveViews/spiner.html",
        controller: function($scope, $http) {
            $scope.hasPendingRequests = function() {
                return $http.pendingRequests.length > 0;
            };
        }
    };
});
