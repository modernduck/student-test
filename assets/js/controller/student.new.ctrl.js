angular.module("ctrl.studen.newt", ['dataProvider'])
.controller("StudentCreateCtrl", ["$scope" , "$filter", "Student", "$stateParams", "$state", function ($scope, $filter, Student, $stateParams, $state) {
	$scope.save = function()
	{
		Student.create($scope.student);
		$state.go('app.home');
	}
	
	// body...
}])