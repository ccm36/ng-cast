angular.module('video-player')

.component('videoPlayer', {
  // bindings
  bindings: {
    video: '<'
  },
  controller: function(videoProperties) {
    console.log(videoProperties);

    this.videoId = videoProperties().getVideoId(this.video);
  },
  // controller

  // template
  templateUrl: 'src/templates/videoPlayer.html'
})

.service('videoProperties', function(video) {
  this.getVideoId = function () {
    return video.id.videoId
  }
})
