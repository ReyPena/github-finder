angular.module("gitSearch").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "../views/routeViews/home/home.html",
            controller: "homeCtrl"
        })
        .state("profile", {
            url: "/profile/:id",
            templateUrl: "../views/routeViews/profile/profile.html",
            controller: "profileCtrl",
        })
        .state("about", {
            url: "/about",
            templateUrl: "../views/routeViews/about/about.html"
        });
    $urlRouterProvider
        .otherwise("/");
});
