angular.module("gitSearch").controller("profileCtrl", function($scope, $stateParams, homeService, porfileService) {
    homeService.getProfile($stateParams.id).then(function(response) {
        $scope.user = response;
    });

    $scope.data = [];

    porfileService.getRepos($stateParams.id).then(function(response) {
        $scope.repos = response;
        return response;
      }).then(function (response) {
        response.forEach(function(repo) {
          porfileService.getLanguage(repo.languages_url).then(function(response) {
            return response;
          }).then(function (response) {
            for (var index in response) {
              for (var i = 0; i < $scope.data.length; i++) {
                var item = $scope.data[i];
                // if (item.name == index) {
                //   $scope.data.splice(item, 1);
                // } else {
                //   item.y += response[index];
                // }
              }
              $scope.data.push({
                name: index,
                y: response[index]
              });
            }
          });
        });
      });


});
