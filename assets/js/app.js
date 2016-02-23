angular.module("student", ['ui.router', 'oc.lazyLoad', 'studentDirective', 'ngAnimate', 'chart.js'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
		function ($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider

				.state('home', {
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
				.state('student', {
					abstract:true,
					url:"/students",
					template:"<div ui-view></div>",
					resolve: {
						load: function ($ocLazyLoad) {
							console.log("do lazy load please")
							return $ocLazyLoad.load([
								{ name : 'ctrl.student', files: ['assets/js/controller/student.ctrl.js']}

							])
						}
					}
				})
				/*.state('student.index', {
					url:"/index",
					templateUrl: "assets/partials/students/index.html",
					controller: "StudentCtrl",

				})*/
				.state('student.create', {
						url:"/create",
						templateUrl: "assets/partials/students/form.html",
						controller: "StudentCreateCtrl"
						
				})
				.state('student.edit', {
						url:"/:id",
						templateUrl: "assets/partials/students/form.html",
						controller: "StudentEditCtrl"
						
				})
				


}]);


