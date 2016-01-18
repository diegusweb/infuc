app.controller('ListCtrl', function($scope, $stateParams, PeopleService, $state) {
	$scope.ser = PeopleService;
	
	PeopleService.GetCategory().then(function(cat){
        $scope.todos = cat[$stateParams.id].formulas;
		$scope.category = $stateParams.id;	
		$scope.prefs = cat[$stateParams.id].pref;
    });

    $scope.disabled = function() {
    	console.log("asdasd");
	  //if($scope.addInviteesDisabled) { return false;}
	}
	
	$scope.demo = function(id, cat){
		var name = "";
		PeopleService.GetCategory().then(function(data){
			var resCate = parseInt(cat)+1;
			var resId = parseInt(id)+1;
			
			for(i=0; i< data.length ;i++){
				if(data[i].id == resCate){
					for(j=0;j < data[i].formulas.length ;j++){
						if(data[i].formulas[j].id == resId){
							
							name = data[i].pref+"_"+data[i].formulas[j].pref;
							$scope.selectView(name);
						}
					}		
				}
			}
		});	
	};
	
	$scope.selectView = function(view){
		console.log("--- "+view.toLowerCase());
		//$state.go(''+view.toLowerCase()+'/:id/:cat', { id: id, cat: cat});
		$state.go(''+view.toLowerCase()+'/:info', {info: view.toLowerCase() });
		
	}
		
});
