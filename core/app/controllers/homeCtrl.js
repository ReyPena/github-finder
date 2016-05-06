angular.module("gitSearch").controller("homeCtrl", function($scope, homeService) {

    $scope.search = function() {
        homeService.getProfile($scope.name).then(function(response) {
            $scope.user = response;
            $scope.name = " ";
        });
        $( "form" ).removeClass( "mid" );
    };

    $( "input" ).focusout(function () {
      $( "input" ).addClass("text-center");
      console.log("nothere");
    });
    $( "input" ).focusin(function () {
      $( "input" ).removeClass("text-center");
    });

    $scope.usersSave = [];

    $scope.save = function(user) {
        if ($scope.usersSave.length === 0) {
            $scope.usersSave.push(user);
        } else {
            for (var i = 0; i < $scope.usersSave.length; i++) {
                if ($scope.usersSave[i] != user) {
                    $scope.usersSave.push(user);
                }
            }
        }
    };

    $scope.delete = function(index) {
        $scope.usersSave.splice(index, 1);
    };

});
