angular.module("ctrl.main", ['dataProvider'])
.controller("MainCtrl", ["$scope", "$stateParams", "Student" , "$filter", function ($scope, $stateParams, Student, $filter) {
	$scope.students = Student.query();
	$scope.graph = $filter('graphData')($scope.students);
	  
	
	if($stateParams.isReload)
		console.log("reload please")

}])