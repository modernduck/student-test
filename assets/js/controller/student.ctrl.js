angular.module("ctrl.student", ['dataProvider'])
.controller("StudentEditCtrl", ["$scope" , "$stateParams", "Student", "$state", function ($scope, $stateParams, Student, $state) {
	console.log("yo")
	$scope.student = Student.get($stateParams.id)
	console.log($scope.student)
	$scope.save = function()
	{
		Student.update($stateParams.id, $scope.student);
		$state.go('app.home');
	}
	
}])
.controller("StudentCtrl", ["$scope", "$stateParams", "Student", function ($scope, $stateParams, Student){
	$scope.students = Student.query($stateParams.id)
}])