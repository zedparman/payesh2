// START - USED SERVICES
/*
 *	UserService.create
 *		PARAMS: 
 *		
 *
 *	UserService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	UserService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * UserService  
 */
// END - REQUIRED RESOURCES

app.controller('UserEditController', ['$scope', '$location', '$routeParams', '$q', 'UserService',
    function ($scope, $location, $routeParams, $q, UserService ) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = UserService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new UserService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/users/');
    		});
    	}
    	
    	$scope.remove = function(){
    		UserService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/users/');
    		});
    	}
    	
}]);