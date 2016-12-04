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
    this.addSearch = function () {
      console.log('clicked')
      let search = {body: this.newSearch}
      console.log(search.body)
    }

  }

}());
