// START - USED SERVICES
/*
 *	StudentService.create
 *		PARAMS: 
 *		
 *
 *	StudentService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	StudentService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	ExamService.findBy_students
 *		PARAMS: 
 *					Objectid key - Id of model to search for
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
 * StudentService  
 */
// END - REQUIRED RESOURCES

app.controller('StudentEditController', ['$scope', '$location', '$routeParams', '$q', 'ExamService', 'StudentService', 'ExamService', 'ExamService',
    function ($scope, $location, $routeParams, $q, ExamService , StudentService , ExamService, ExamService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = StudentService.get({_id: $scope.id});
        	$scope.external._Exam_students = ExamService.findBy_students({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new StudentService();
        	$scope.external._Exam_students = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/students/');
    		});
    	}
    	
    	$scope.remove = function(){
    		StudentService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/students/');
    		});
    	}
    	
    		
        //manage relation _exams
        		
    	$scope.list_Exam = ExamService.query();

    	$scope.contain_Exam = function(item){
    		if (!$scope.obj._exams) return false;
    		return $scope.obj._exams.indexOf(item) != -1;
    	}
		    	
		$scope.add_Exam = function(item){
			if(!$scope.obj._exams)
				$scope.obj._exams = [];
			$scope.obj._exams.push(item);
		}
		
		$scope.remove_Exam = function(index){
			$scope.obj._exams.splice(index, 1);
		}
    		
        //manage External relation _students
        		
    	$scope.list_Exam_students = ExamService.query();
    	
}]);