angular.module("gitSearch").controller("homeCtrl", function($scope, homeService) {

    $scope.search = function() {
        homeService.getProfile($scope.name).then(function(response) {
            $scope.user = response;
            $scope.name = " ";
        });
    };

    $("input").focusout(function() {
        $("input").addClass("text-center");
    });
    $("input").focusin(function() {
        $("input").removeClass("text-center");
    });

    $scope.usersSave = [];

    $scope.save = function(user) {
        if ($scope.usersSave.length === 0) {
            $scope.usersSave.push(user);
            $scope.saveLocal();
        } else {
            if ($scope.usersSave.indexOf(user) === -1) {
                $scope.usersSave.push(user);
                $scope.saveLocal();
            }
        }
    };

    $scope.delete = function(index) {
        $scope.usersSave.splice(index, 1);
        $scope.saveLocal();
    };

    $scope.saveLocal = function() {
        var str = JSON.stringify($scope.usersSave);
        localStorage.setItem("usersLocal", str);
    };

    $scope.getLocal = function() {
        var str = localStorage.getItem("usersLocal");
        $scope.usersSave = JSON.parse(str);

        if (!str) {
            $scope.usersSave = [];
        }
    };

    $scope.getLocal();

});
