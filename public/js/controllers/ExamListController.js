// START - USED SERVICES
/*
 *	ExamService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ExamService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ExamService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('ExamListController', ['$scope', 'ExamService',
    function ($scope, ExamService ) {
		
    	$scope.list = ExamService.query();
    	
}]);