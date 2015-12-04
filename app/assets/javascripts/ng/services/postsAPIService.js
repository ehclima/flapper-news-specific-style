angular.module('flapperNews').factory('postsAPI', function($http){

	var _getAllPosts = function (){
		// retorna somente o objeto com as infos, mas n instancia array aqui
		return $http.get('/posts.json');
	}

	return {
		getAll: _getAllPosts
	};
});