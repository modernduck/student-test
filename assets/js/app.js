angular.module("student", ['ui.router', 'oc.lazyLoad', 'studentDirective', 'ngAnimate', 'chart.js'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
		function ($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state("app", {
					abstract:true,
					templateUrl:'assets/partials/layout.html',
					resolve: {
						load: function ($ocLazyLoad) {
							return $ocLazyLoad.load([
								{ name: 'ctrl.main', files: ['assets/js/controller/main.ctrl.js'] },

								]);
						}
					}
				})
				.state('app.home', {
					url:"/",
					views: {
						"tabledata" : {
							templateUrl: 'assets/partials/home.html',
							controller: 'MainCtrl'
						},
						"graph":{
							templateUrl: 'assets/partials/graph.html',
							controller: 'MainCtrl'
						}
					}
				})
				.state('app.create', {
					url:"/new",
					views:{
						"tabledata" : {
							templateUrl: 'assets/partials/students/form.html',
							controller: 'StudentCreateCtrl'
						},
						"graph":{
							templateUrl: 'assets/partials/preview.html',
							controller: 'PreviewCtrl'
						}
					},
					resolve: {
						load: function ($ocLazyLoad) {
							
							return $ocLazyLoad.load([
								{ name : 'ctrl.student.new', files: ['assets/js/controller/student.new.ctrl.js']}

							])
						}
					}

				})
				.state('app.edit', {
					url:"/:id",
					views:{
						"tabledata" : {
							templateUrl: 'assets/partials/students/form.html',
							controller: 'StudentEditCtrl'
						},
						"graph":{
							template: '<students students="students"></students>',
							controller: 'StudentCtrl'
						}
					},
					resolve: {
						load: function ($ocLazyLoad) {
							
							return $ocLazyLoad.load([
								{ name : 'ctrl.student', files: ['assets/js/controller/student.ctrl.js']}

							])
						}
					}

				})

				
				


}]);


