"use strict";

(function(){
  angular
    .module('indicium', [
      "ui.router",
      "ngResource",
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("index", {
        url: "/",
        templateUrl: "/js/ng-views/index.html",
        controller: "IndexController",
        controllerAs: "vm"
      })
      .state("show", {
        url: "/tweets/:search",
        templateUrl: "/js/ng-views/show.html",
        controller: "ShowController",
        controllerAs: "vm"
      });
    }
}());
