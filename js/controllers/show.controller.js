"use strict";

(function(){
  angular
  .module("indicium")
  .controller("ShowController", [
    "$stateParams",
    "TweetFactory",
    ShowController
  ]);

  function ShowController($stateParams, TweetFactory){
    this.tweets = TweetFactory.query({search: $stateParams.search});
    console.log(this.tweets);
  }

}());
