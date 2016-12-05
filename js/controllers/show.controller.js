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

    this.response = TweetFactory.get({search: $stateParams.search});

    this.response.$promise.then((data) => {
      this.sentiment = data.sentiment;
      this.tweets = data.tweets
      console.log(this.tweets)
      console.log(this.sentiment)
    })
  }

}());
