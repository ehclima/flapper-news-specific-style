angular.module('flapperNews').controller('PostsCtrl', function($scope, $stateParams, postsAPI){
	$scope.post = postsAPI.posts[$stateParams.id];

	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  $scope.post.comments.push({
	    body: $scope.body,
	    author: 'user',
	    upvotes: 0
	  });
	  $scope.body = '';
	};
});