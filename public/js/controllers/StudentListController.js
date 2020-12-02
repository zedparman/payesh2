// START - USED SERVICES
/*
 *	StudentService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	StudentService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * StudentService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('StudentListController', ['$scope', 'StudentService',
    function ($scope, StudentService ) {
		
    	$scope.list = StudentService.query();
    	
}]);