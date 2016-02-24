angular.module("studentFilter",[])
	.filter("phone", function(){
		return function (phoneNumber){
			//remove all +668 => 668
			if(angular.isUndefined(phoneNumber))
				return phoneNumber;
			var phoneNumber = phoneNumber.toString().trim().replace(/^\+/, '');

			var country, city, number;
			
			switch(phoneNumber.length)
			{
				case 10: //+1PPP####### => C (PPP) ###-####
					country = 1;
					city = phoneNumber.slice(0, 3);
					number = phoneNumber.slice(3);
					break;
				case 11: 
					country = phoneNumber[0];
					city = phoneNumber.slice(1,4);
					number = phoneNumber.slice(4);
					break;
				case 12:
					country = phoneNumber.slice(0, 3);
					city = phoneNumber.slice(3, 5);
					number = phoneNumber.slice(5);
					break;
				default:
					return phoneNumber;
			}
			
			if(country == 1)
				country = "";
			var number = number.slice(0,3) + "-" + number.slice(3);

			return (country + " (" + city + ") "  + number).trim();

		}
	})
	.filter("studentSort", ['$filter', function($filter){
		return function (students)
		{
			return $filter("orderBy")(students, ['class','name','grade']);
		}
	}])
	.filter("graphData", function(){
		return function (students)
		{
			var graph = {};
			graph.labels = ['F', 'D', 'C', 'B', 'A'];
		  graph.series = ['Grade'];

		  graph.data = [];
		  graph.data[0] = [0,0,0,0,0];

		  students.forEach( function(student){
		  	
		  	for(var i =0; i < graph.labels.length;i++)
		  		if(graph.labels[i] == student.grade)
		  			graph.data[0][i]++
		  })
		  return graph;
 		}
	})