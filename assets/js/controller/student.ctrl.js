angular.module("ctrl.student", ['dataProvider'])
.controller("StudentCreateCtrl", ["$scope" , "$filter", "Student", "$stateParams", "$state", function ($scope, $filter, Student, $stateParams, $state) {
	$scope.save = function()
	{
		Student.create($scope.student);
		$state.go('home');
	}
	$scope.back = function()
	{
		$state.go("^")
	}
	// body...
}])
.controller("StudentEditCtrl", ["$scope" , "$stateParams", "Student", "$state", function ($scope, $stateParams, Student, $state) {
	$scope.student = Student.get($stateParams.id)
	$scope.save = function()
	{
		Student.update($stateParams.id, $scope.student);
		$state.go('home');
	}
	$scope.back = function()
	{
		$state.go("^")
	}
	// body...
}])