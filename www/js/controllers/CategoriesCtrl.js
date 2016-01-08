app
.controller('CategoriesCtrl', function($scope, $state, PeopleService) {
  console.log("ssss");
  PeopleService.GetCategory().then(function(cat){
    $scope.todos = cat;     
  });

});
