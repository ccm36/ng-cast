angular.module('video-player')

.component('app', {
  // bindings
  bindings: {

  },
  controller: function() {
    this.videoData = window.exampleVideoData;
    this.video = this.videoData[0];
  },
  // controller

  // template
  templateUrl: 'src/templates/app.html'
})

// .service('SelectVideo', function() {

// })