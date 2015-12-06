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
		controller: 'PostsCtrl',
		resolve: {
			post: function($stateParams, postsAPI){
				return postsAPI.getPost($stateParams.id);
			}
		}
	});

	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'view/_login.html',
		controller: 'AuthCtrl',
		onEnter: function($state, Auth){
			Auth.currentUser().then(function(){
				$state.go('home');
			})
		}
	});

	$stateProvider.state('register', {
		url: '/register',
		templateUrl: 'view/_register.html',
		controller: 'AuthCtrl',
		onEnter: function($state, Auth){
			Auth.currentUser().then(function(){
				$state.go('home');
			})
		}
	});

	$urlRouterProvider.otherwise('home');
}]);