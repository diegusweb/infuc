app.controller('CategoriesCtrl', function($scope, $state, PeopleService) {
	PeopleService.GetCategory().then(function(cat){
		$scope.todos = cat;			
	});

});
