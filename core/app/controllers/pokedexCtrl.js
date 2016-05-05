angular.module("pokedex").controller("pokedexCtrl", function($scope, pokedexService) {

    $scope.pokemons = [];
    pokedexService.getPokemonsName().then(function(response) {
        response.forEach(function(poke) {
            pokedexService.getPokemons(poke.name).then(function(result) {
                $scope.pokemons.push(result);
            });
        });
    });
    console.log($scope.pokemon);
});
