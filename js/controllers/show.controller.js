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
    this.searchTerm = $stateParams.search.toUpperCase();

    this.response = TweetFactory.get({search: $stateParams.search});
    this.response.$promise.then((data) => {
      this.tweets = data.tweets;
      this.sentiment = data.watsonResponse;
      this.anger = Math.round((parseFloat(this.sentiment.docEmotions.anger) * 100)) + "%"
      this.disgust = Math.round((parseFloat(this.sentiment.docEmotions.disgust) * 100)) + "%"
      this.fear = Math.round((parseFloat(this.sentiment.docEmotions.fear) * 100)) + "%"
      this.joy = Math.round((parseFloat(this.sentiment.docEmotions.joy) * 100)) + "%"
      this.sadness = Math.round((parseFloat(this.sentiment.docEmotions.sadness) * 100)) + "%"

      this.angerNum = parseInt(this.anger)
      this.disgustNum = parseInt(this.disgust)
      this.fearNum = parseInt(this.fear)
      this.joyNum = parseInt(this.joy)
      this.sadnessNum = parseInt(this.sadness)
    })

    this.roundSentiment = function(sentiment){
      var value = Math.round(sentiment * 100);
      return value
    }

  }

}());
