"use strict";

(function(){
  angular
  .module("indicium")
  .controller("IndexController", [
    "TweetFactory",
    IndexController
  ]);

  function IndexController(TweetFactory){
    this.newTweet = new TweetFactory();
  }
  //hey its rob
}());
