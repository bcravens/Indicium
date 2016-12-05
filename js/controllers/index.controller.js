"use strict";

(function(){
  angular
  .module("indicium")
  .controller("IndexController", [
    "$state",
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

  function IndexController($state){
    this.addSearch = function () {
      let search = this.newSearch
      $state.go("show", {search});
  }

}
}());
