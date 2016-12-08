"use strict";

(function(){
  angular
  .module("indicium")
  .factory("TweetFactory", [
    "$resource",
    TweetFactoryFunction
  ]);

  function TweetFactoryFunction($resource){
  return $resource("https://pure-plains-26399.herokuapp.com/api/tweets/:search", {}, {
      update: {method: "PUT"}
    });
  }

}());
