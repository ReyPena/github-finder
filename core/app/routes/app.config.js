angular.module("pokedex").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "../views/routeViews/home/home.html"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "../views/routeViews/projects/projects.html",
    })
    .state("skills", {
      url: "/skills",
      templateUrl: "../views/routeViews/skills/skills.html",
    })
    .state("experience", {
      url: "/experience",
      templateUrl: "../views/routeViews/experience/experience.html",
    });

  $urlRouterProvider
    .otherwise("/");
});
