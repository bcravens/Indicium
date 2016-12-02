"use strict";

(function(){
  angular
  .module("indicium")
  .controller("IndexController", [
    "SearchFactory",
    IndexController
  ]);

  function IndexController(Searchfactory){
    this.newTweet = new SearchFactory();
  }
  //hey its rob
}());
