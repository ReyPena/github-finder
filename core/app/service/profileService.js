angular.module("gitSearch").service("porfileService", function($http) {

  var apiUrl = "https://api.github.com/users/";

  this.getRepos = function (name) {
    return $http({
      method: "GET",
      url: apiUrl + name + "/repos"
    }).then(function (result) {
      return result.data;
    });
  };

  this.getLanguage = function (urls) {
    return $http({
      method: "GET",
      url: urls
    }).then(function (result) {
      return result.data;
    });
  };
});
