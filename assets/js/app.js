angular.module("student", ['ui.router', 'oc.lazyLoad'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
		function ($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('app', {
					url:"/",
					templateUrl: 'assets/partials/home.html',
					controller: 'MainCtrl',
					resolve: {
						load: function ($ocLazyLoad) {
							return $ocLazyLoad.load([
								{ name: 'ctrl.main', files: ['assets/js/controller/main.ctrl.js'] },
								]);
						}
					}
				})

}]);


