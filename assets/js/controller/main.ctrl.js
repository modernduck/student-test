angular.module("ctrl.main", ['dataProvider'])
.controller("MainCtrl", ["$scope", "$stateParams", "Student" , "$filter", function ($scope, $stateParams, Student, $filter) {
	$scope.students = Student.query();
	$scope.graph = $filter('graphData')($scope.students);

}])
.controller("PreviewCtrl", ["$scope", "Student","$state",  function($scope, Student, $state){
	$scope.resetData = function(){
		if(confirm("Are you sure to reset all data?"))
		{
			Student.reset();
			$state.go("app.home")

		}
	}
}])