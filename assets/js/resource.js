angular.module("dataProvider",[])
	.factory("Student", function(){
		var LOCAL_KEY = "students_wallethub"
		var _students = [

			    { name : "John", grade : "A", class : "Geography" },
				{ name : "Alice", grade : "B", class : "History" },
				{ name : "Alice", grade : "C", class : "Geography" },
				{ name : "Brian", grade : "B", class : "English" },
				{ name : "Brian", grade : "A", class : "History" },
				{ name : "Alice", grade : "D", class : "English" },
				{ name : "John", grade : "C", class : "English" },
				{ name : "John", grade : "D", class : "History" },
				{ name : "Brian", grade : "A", class : "Geography" }
			]
		return {
			query : function()
			{
				if(angular.isUndefined(localStorage[LOCAL_KEY]))
				{
					console.log("dafaq")
					localStorage[LOCAL_KEY] = JSON.stringify(_students);
				}else
					console.log('load from local?')
				return JSON.parse(localStorage[LOCAL_KEY])
			},
			get : function (index)
			{
				return this.query()[index];
			},
			updateAll : function(students)
			{
				localStorage[LOCAL_KEY] = JSON.stringify(students);
				return JSON.parse(localStorage[LOCAL_KEY])
			},
			update : function(index, student)
			{
				var students = this.query();
				students[index] = student;
				return this.updateAll(students);
			},
			create : function(student)
			{
				var students = this.query();
				students.push(student)
				return this.updateAll(students);
			}	
			
		}
	})