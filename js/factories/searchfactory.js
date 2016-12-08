"use strict";

(function(){
  angular
  .module("indicium")
  .factory("SearchFactory", [
    "$resource",
    SearchFactoryFunction
  ]);

  function SearchFactoryFunction($resource){
    return $resource("http://localhost:4000/api/searches", {}, {
      update: {method: "PUT"}
    });
  }
}());
