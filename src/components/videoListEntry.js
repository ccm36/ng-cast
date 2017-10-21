angular.module('video-player')

.component('videoListEntry', {
  // bindings
  bindings: {
    video: '<',
    setVideo: '<'
  },
  controller: function() {

  },

  templateUrl: 'src/templates/videoListEntry.html'
});
