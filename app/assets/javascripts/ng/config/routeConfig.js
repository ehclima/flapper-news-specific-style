angular.module('flapperNews').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'view/_home.html',
		controller: 'MainCtrl',
		resolve : {
			posts: function(postsAPI){
				return postsAPI.getAll();
			}	
		}
	});

	$stateProvider.state('posts', {
		url: '/posts/{id}',
		templateUrl: 'view/_posts.html',
		controller: 'PostsCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);