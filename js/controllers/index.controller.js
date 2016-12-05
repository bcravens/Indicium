"use strict";

(function(){
  angular
  .module("indicium")
  .controller("IndexController", [
    "$state",
    IndexController
  ]);

  function IndexController($state){
    this.addSearch = function () {
      let search = this.newSearch
      $state.go("show", {search});
  }

}
}());
