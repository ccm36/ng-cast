angular.module('video-player')

.component('app', {
  // bindings
  bindings: {

  },
  controller: function() {
    this.videoData = window.exampleVideoData;
    this.video = this.videoData[0];
    
    this.setVideo = (video) => {
      console.log("clicked");
      console.log(video);
      this.video = video;   
    }
  },
  // controller

  // template
  templateUrl: 'src/templates/app.html'
})

// .service('SelectVideo', function() {

// })