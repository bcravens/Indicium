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
      console.log("addsearch running")
      let search = this.newSearch
      $state.go("show", {search});
  }

}
}());
