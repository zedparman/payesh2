// START - USED SERVICES
/*
 *	ExamService.create
 *		PARAMS: 
 *		
 *
 *	ExamService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ExamService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	StudentService.list
 *		PARAMS: 
 *		
 *
 *	StudentService.findBy_exams
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ExamService  
 * StudentService  
 */
// END - REQUIRED RESOURCES

app.controller('ExamEditController', ['$scope', '$location', '$routeParams', '$q', 'ExamService', 'StudentService', 'StudentService', 'StudentService',
    function ($scope, $location, $routeParams, $q, ExamService , StudentService , StudentService, StudentService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = ExamService.get({_id: $scope.id});
        	$scope.external._Student_exams = StudentService.findBy_exams({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new ExamService();
        	$scope.external._Student_exams = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/exams/');
    		});
    	}
    	
    	$scope.remove = function(){
    		ExamService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/exams/');
    		});
    	}
    	
    		
        //manage relation _students
        		
    	$scope.list_Student = StudentService.query();

    		
        //manage External relation _exams
        		
    	$scope.list_Student_exams = StudentService.query();
    	
}]);