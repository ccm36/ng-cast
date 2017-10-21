angular.module('video-player')

.component('app', {
  // bindings
  bindings: {

  },
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    
    this.selectVideo = (video) => {
      this.currentVideo = video;   
    };
    this.searchResults = (query) => {
      console.log(query);
      youTube.search(query, this.setVideoData);
    };
    this.setVideoData = (data) => {
      this.videos = data;
      this.query = "";
    };
  },

  templateUrl: 'src/templates/app.html'
})