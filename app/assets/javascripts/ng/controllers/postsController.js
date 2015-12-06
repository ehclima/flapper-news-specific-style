angular.module('flapperNews').controller('PostsCtrl', function($scope, $stateParams, post, postsAPI){
	
	$scope.post = post.data; // vem do resolve em routeConfig.js

	$scope.addComment = function(){
  	if($scope.body === '') { return; }
  
  	postsAPI.addComment($scope.post.id, {
    	body: $scope.body,
    	author: 'user',
  	}).success(function(comment) {
    	$scope.post.comments.push(comment);
  	});
  	$scope.body = '';
	};

  $scope.incrementUpvotes = function(comment){
    postsAPI.upvoteComment($scope.post, comment).success(function(data){
      comment.upvotes += 1;
    });
  }

});