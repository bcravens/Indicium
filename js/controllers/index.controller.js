"use strict";

(function(){
  angular
  .module("indicium")
  .controller("IndexController", [
    "$state",
    "SearchFactory",
    IndexController
  ]);

  function IndexController($state, SearchFactory){

    this.addSearch = function () {
      let search = this.newSearch

      var newSearch = new SearchFactory({body: search})
      newSearch.$save();

      $state.go("show", {search});
  }

}
}());
