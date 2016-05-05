angular.module("pokedex").controller("pokemonCtrl", function($scope, $stateParams, pokemonService) {

  pokemonService.getPokemon($stateParams.id).then(function (response) {
    $scope.pokemon = response;
  });

  pokemonService.getEvolution($stateParams.id).then(function (response) {
    $scope.evolution = response;
    $scope.firstEvolution = $scope.evolution.species;
    $scope.secondEvolution = $scope.evolution.evolves_to[0].species;
  });



});
