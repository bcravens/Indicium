"use strict";

(function(){
  angular
  .module("indicium")
  .factory("TweetFactory", [
    "$resource",
    TweetFactoryFunction
  ]);

  function TweetFactoryFunction($resource){
    return $resource("http://localhost:4000/tweets/:search", {}, {
      update: {method: "PUT"}
    });
  }
}());
