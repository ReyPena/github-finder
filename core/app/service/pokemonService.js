angular.module("pokedex").service("pokemonService", function($http, $q) {

    var apiUrl = "http://pokeapi.co/api/v2/";

    this.getPokemon = function(id) {
        return $http({
            method: "GET",
            url: apiUrl + "pokemon/" + id
        }).then(function(result) {
            return result.data;
        });
    };

    this.getEvolution = function(id) {
        return $http({
            method: "GET",
            url: apiUrl + "evolution-chain/" + id
        }).then(function(result) {
            return result.data.chain.evolves_to[0];
        });
    };

});
