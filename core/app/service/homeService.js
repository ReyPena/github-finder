angular.module("gitSearch").service("homeService", function($http) {

    var apiUrl = "https://api.github.com/users/";

    this.getProfile = function (name) {
      return $http({
        method: "GET",
        url: apiUrl + name
      }).then(function (result) {
        return result.data;
      });
    };

});
