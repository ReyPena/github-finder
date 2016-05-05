angular.module("pokedex").service("pokedexService", function($http ) {

    var apiUrl = "http://pokeapi.co/api/v2/pokemon/";

    this.getPokemonsName = function () {
      return $http({
        method: "GET",
        url: apiUrl + "?limit=811"
      }).then(function (result) {
        return result.data.results;
      });
    };

    this.getPokemons = function (name) {
      return $http({
        method: "GET",
        url: apiUrl + name
      }).then(function (result) {
        return result.data;
      });
    };

});
