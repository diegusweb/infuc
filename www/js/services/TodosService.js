app.service("PeopleService", function ($http, $q) {
    var categories = [];
    this.GetCategory = function () {
		var deferred = $q.defer();
        $http.get("appdata/file.json").success(function(response){
                deferred.resolve(response);           
		});
		categories = deferred.promise;
		 return  deferred.promise;
    };
	
    this.GetList = function (catId) {
       for(i=0; i < categories.length; i++){
                if(categories[i].id == catId){
                    return categories[i];
                }
            }
    };
	
});

/*app.factory('PeopleService',['$http',function($http){
    var categories = []; //Private Variable
    return {
        GetCategory: function(){ 
            return $http.get("appdata/file.json").then(function(response){
                categories = response;
                return response;
            });
        },
		 GetList: function(personId){
            for(i=0; i < categories.length; i++){
                if(categories[i].id == personId){
                    return categories[i];
                }
            }
        },
        GetDetail: function(category, personId){
			var categories = [];
			$http.get("appdata/file.json").then(function(response){
                categories = response;
                return response;
            });
            for(i=0;i< categories.length ;i++){
                if(categories[i].id == category){
					
					for(j=0;j< categories[i].formulas.length ;j++){
						if(categories[i].formulas[j].id == personId){
							return categories[i].formulas[j];
						}
					}
                    
                }
            }
        },
		GetUrlForm: function(category, personId){
			var categories = [];
			$http.get("appdata/file.json").then(function(response){
                categories = response;
                return response;
            });
			for(i=0;i< categories.length ;i++){
                if(categories[i].id == category){
					
					for(j=0;j< categories[i].formulas.length ;j++){
						if(categories[i].formulas[j].id == personId){
							
							return categories[i].name+"_"+categories[i].formulas[j].name;
						}
					}
                    
                }
            }
		},
    }
}]);*/