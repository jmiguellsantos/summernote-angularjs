(function () {
  
});
const app = angular.module('senior.social', ['summernote']);

$.ajax({
  url: 'https://api.github.com/emojis',
  async: false 
}).then(function(data) {
  window.emojis = Object.keys(data);
  window.emojiUrls = data; 
});;

app.controller('SummerNoteController', function ($scope) {
  
  $scope.model = ""
  $scope.options = {
    hint: {
      match: /:([\-+\w]+)$/,
      search: function (keyword, callback) {
        callback($.grep(emojis, function (item) {
          return item.indexOf(keyword)  === 0;
        }));
      },
      template: function (item) {
        var content = emojiUrls[item];
        return '<img src="' + content + '" width="20" /> :' + item + ':';
      },
      content: function (item) {
        var url = emojiUrls[item];
        if (url) {
          return $('<img />').attr('src', url).css('width', 20)[0];
        }
        return '';
      }
    },
    placeholder: "Escreva aqui...",
    width: 400,
    height: 250,
    minHeight: 150,
    maxHeight: 200,
    focus: true,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']],
      ['table', ['table']],
      ['insert', ['template', 'link', 'picture', 'hr']],
      ['view', ['fullscreen']],
      ['help', ['help']],
    ],
  };
});
