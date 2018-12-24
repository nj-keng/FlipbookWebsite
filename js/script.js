var userFeed = new Instafeed({
  get: 'user',
  userId: '6123706635',
  clientId: '967cb53a4c2d469fbffb560075f1d0ce',
  accessToken: '6123706635.967cb53.bca597e9ca8c4b46aad2b1dd3244b794',
  resolution: 'standard_resolution',
  template: '<div class="igFeed"><a href="{{link}}" target="_blank" id="{{id}}"><img class="igImage" src="{{image}}" /></a><p class="igCaptionLeft">{{likes}}</p> <p class="igCaptionRight">{{caption}}</p></div>',
  sortBy: 'most-recent',
  limit: 6,
  links: false,
	resolution: 'thumbnail'
});
userFeed.run();
