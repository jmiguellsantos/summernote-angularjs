(() => {
  'use strict';

  angular.module('SummerWithAngular', [])
    .service('EmojiApiSvc', EmojiApiSvc)

  /* @ngInject */
  function EmojiApiSvc($http) {

    var vm = this;

    vm.$http = $http;

    const $init = () => {
      _requestEmojis;
    }

    const _requestEmojis =  () =>{
      var url = "https://api.github.com/emojis";

      return this.$http.get(url).then(function (data) {
        window.emojis = Object.keys(data);
        window.emojisUrls = data;
      })
    }
  }
})