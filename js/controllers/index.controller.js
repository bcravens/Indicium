"use strict";

(function(){
  angular
  .module("indicium")
  .controller("IndexController", [
    "TweetFactory",
    IndexController
  ]);


  // function IndexController(TweetFactory){
  //   this.tweets = TweetFactory.query();
  //   this.addSearch = function () {
  //     console.log('clicked')
  //     let search = {body: this.newSearch}
  //     console.log(search.body)
  //   }
  //
  // }

  function IndexController(TweetFactory){
    this.tweets = TweetFactory.query();
    this.addSearch = function () {
      let search = {body: this.newSearch}
      var url = "http://localhost:8080/#/tweets/" + search.body
      console.log(url)
      window.location = url
  }

}
}());
