angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    this.query = '';

  },

  templateUrl: 'src/templates/search.html'
});

