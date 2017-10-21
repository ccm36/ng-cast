angular.module('video-player')

.component('videoList', {

  bindings: {
    videos: '<',
    setVideo: '<'
  },

  controller: function() {
  },

  templateUrl: 'src/templates/videoList.html'

});