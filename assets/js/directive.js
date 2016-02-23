angular.module("studentDirective", ["studentFilter"])
	.directive("students", ["$filter", function ($filter){
			return {
				restrict:"E",
				scope :{
					students:"="
				},
				templateUrl:"assets/partials/widget/students.html",
				link : function (scope, elm, attrs)
				{
					scope.isSort = false;
					scope._students = scope.students;
					scope.sortToggle = function()
					{
						if(!scope.isSort)
							scope.students =  $filter('studentSort')(scope.students)
						else
							scope.students = scope._students;
						scope.isSort = !scope.isSort
					}
				}
			}
		}])
	.directive('validNumber', function() {
      return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return; 
          }

          ngModelCtrl.$parsers.push(function(val) {
            if (angular.isUndefined(val)) {
                var val = '';
            }
            
            var clean = val.replace(/[^-0-9\.]/g, '');
            var negativeCheck = clean.split('-');
			var decimalCheck = clean.split('.');
            if(!angular.isUndefined(negativeCheck[1])) {
                negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
                clean =negativeCheck[0] + '-' + negativeCheck[1];
                if(negativeCheck[0].length > 0) {
                	clean =negativeCheck[0];
                }
                
            }
              
            if(!angular.isUndefined(decimalCheck[1])) {
                decimalCheck[1] = decimalCheck[1].slice(0,2);
                clean =decimalCheck[0] + '.' + decimalCheck[1];
            }

            if (val !== clean) {
              ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$render();
            }
            return clean;
          });

          element.bind('keypress', function(event) {
            if(event.keyCode === 32) {
              event.preventDefault();
            }
          });
        }
      };
    })
	.directive("phoneNumber", ["$filter", function ($filter){
			return {
				restrict:"E",
				scope:{
					cssClass:"@class"
				},
				template:"<input type='text' valid-number class='form-control' ng-blur='onBlur()' ng-focus='onFocus()' ng-model='data' ng-change='update()' placeholder='Phone Number'>",
				require:"ngModel",
				link: function(scope, elm, attrs, ngModel)
				{
					scope.rawdata = ''

					scope.onBlur = function()
					{
						scope.data = $filter('phone')(scope.data);
					}

					scope.onFocus = function()
					{
						scope.data = scope.rawdata
					}

					scope.update = function()
					{
						scope.rawdata = scope.data
						ngModel.$setViewValue(scope.data)
					}
				}
			}
		}])