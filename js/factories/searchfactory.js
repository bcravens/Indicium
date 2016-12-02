"use strict";

(function(){
  angular
  .module("indicium")
  .factory("SearchFactory", [
    "$resource",
    SearchFactoryFunction
  ]);

  function SearchFactoryFunction($resource){
    return $resource("http://localhost:4000/searches", {}, {
      update: {method: "PUT"}
    });
  }
}());
