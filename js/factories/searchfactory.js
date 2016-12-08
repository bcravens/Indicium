"use strict";

(function(){
  angular
  .module("indicium")
  .factory("SearchFactory", [
    "$resource",
    SearchFactoryFunction
  ]);

  function SearchFactoryFunction($resource){
    return $resource("https://pure-plains-26399.herokuapp.com/api/searches", {}, {
      update: {method: "PUT"}
    });
  }
}());
