// START - USED SERVICES
/*
 *	UserService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	UserService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * UserService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('UserListController', ['$scope', 'UserService',
    function ($scope, UserService ) {
		
    	$scope.list = UserService.query();
    	
}]);