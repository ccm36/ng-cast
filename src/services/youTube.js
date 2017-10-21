angular.module('video-player')
.service('youTube', function($http){
  this.search = function(query, videoDataChange) {
    $http({
      method : "GET",
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet, id',
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        delay: 500
      }
    }).then(function success(response) {
        console.log('success: ', response);
        videoDataChange(response.data.items);
    }, function error(response) {
        console.log('error: ', response);
    });
  };
});
