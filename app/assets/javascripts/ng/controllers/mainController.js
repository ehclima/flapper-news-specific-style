// localizando módulo e criando controller
angular.module('flapperNews').controller('MainCtrl', function($scope, posts, postsAPI){

	$scope.posts = posts.data; // vem do resolve em routeConfig.js

	$scope.addPost = function(){
		if(!$scope.title || $scope.title === '') { return; }
		
		postsAPI.save({
			title: $scope.title,
			link: $scope.link
		}).success(function(data){
			$scope.posts.push(data);
		});

		$scope.title = '';
		$scope.link = '';
	}

	$scope.incrementUpvotes = function(post){
		postsAPI.upvote(post).success(function(data){
			post.upvotes += 1;
		});
	}
});