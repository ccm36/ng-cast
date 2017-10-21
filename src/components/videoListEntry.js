angular.module('video-player')

.component('videoListEntry', {
  // bindings
  bindings: {
    video: '<',
    onClick: '<'
  },
  controller: function() {

  },

  templateUrl: 'src/templates/videoListEntry.html'
});
