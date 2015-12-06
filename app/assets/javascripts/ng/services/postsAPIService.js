angular.module('flapperNews').factory('postsAPI', function($http){

	var _getAllPosts = function (){
		// retorna somente o objeto com as infos, mas n instancia array aqui
		return $http.get('/posts.json');
	}

	var _getPost = function(id){
		return $http.get('/posts/' + id + '.json');
	}

	var _createPost = function(post){
		return $http.post('/posts.json', post);
	}

	var _upvotePost = function(post){
		return $http.put('/posts/' + post.id + '/upvote.json');
	}

	var _addComment = function(id, comment){
		return $http.post('/posts/' + id + '/comments.json', comment);
	}

	var _upvoteComment = function(post, comment){
		return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json');
	}

	return {
		getAll: _getAllPosts,
		getPost: _getPost,
		save: _createPost,
		upvote: _upvotePost,
		addComment: _addComment,
		upvoteComment: _upvoteComment
	};
});