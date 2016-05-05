angular.module("pokedex").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("main", {
            url: "/",
            templateUrl: "../views/routeViews/pokedex/pokedex.html",
            controller: "pokedexCtrl"
        })
        .state("pokemon", {
            url: "/pokemon/:id",
            templateUrl: "../views/routeViews/pokemon/pokemon.html",
            controller: "pokemonCtrl"
        })
        .state("about", {
            url: "/about",
            templateUrl: "../views/routeViews/about/about.html",
        });
    $urlRouterProvider
        .otherwise("/");
});
