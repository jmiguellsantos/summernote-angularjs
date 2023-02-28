(function () {
  $.ajax({
    url: 'https://api.github.com/emojis',
    async: false 
  }).then(function(data) {
    window.emojis = Object.keys(data);
    window.emojiUrls = data; 
  });
  angular.module('SummerWithAngular', ['summernote'])
          .controller('SummerNoteController', SummerNoteController);
    
      
    /* @ngInject */
    function SummerNoteController ($scope) {
    var $ctrl = this;

    // $ctrl.EmojiApiSvc = EmojiApiSvc
    $ctrl.$scope = $scope;
    $ctrl.$scope.model = ""
    $ctrl.$scope.options = {
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
      width: 600,
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
  };
}());


