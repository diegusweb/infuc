app
.directive('searchBar', [function () {
	return {
		scope: {
			ngModel: '='
		},
		require: ['^ionNavBar', '?ngModel'],
		restrict: 'E',
		replace: true,
		template: '<ion-nav-buttons side="right">'+
						'<div class="searchBar">'+
							'<div class="searchTxt" ng-show="ngModel.show">'+
						  		'<div class="bgdiv"></div>'+
						  		'<div class="bgtxt">'+
						  			'<input type="text" placeholder="Procurar..." ng-model="ngModel.txt">'+
						  		'</div>'+
					  		'</div>'+
						  	'<i class="icon placeholder-icon" ng-click="ngModel.txt=\'\';ngModel.show=!ngModel.show"></i>'+
						'</div>'+
					'</ion-nav-buttons>',
		
		compile: function (element, attrs) {
			var icon=attrs.icon
					|| (ionic.Platform.isAndroid() && 'ion-android-search')
					|| (ionic.Platform.isIOS()     && 'ion-ios7-search')
					|| 'ion-search';
			angular.element(element[0].querySelector('.icon')).addClass(icon);
			
			return function($scope, $element, $attrs, ctrls) {
				var navBarCtrl = ctrls[0];
				$scope.navElement = $attrs.side === 'right' ? navBarCtrl.rightButtonsElement : navBarCtrl.leftButtonsElement;
				
			};
		},
		controller: ['$scope','$ionicNavBarDelegate', function($scope,$ionicNavBarDelegate){
			var title, definedClass;
			$scope.$watch('ngModel.show', function(showing, oldVal, scope) {
				if(showing!==oldVal) {
					if(showing) {
						if(!definedClass) {
							var numicons=$scope.navElement.children().length;
							angular.element($scope.navElement[0].querySelector('.searchBar')).addClass('numicons'+numicons);
						}
						
						title = $ionicNavBarDelegate.getTitle();
						$ionicNavBarDelegate.setTitle('');
					} else {
						$ionicNavBarDelegate.setTitle(title);
					}
				} else if (!title) {
					title = $ionicNavBarDelegate.getTitle();
				}
			});
		}]
	};
}])	
.directive('itemStatus',function(){
  return{
    restrict:'E',
    replace:true,
    scope:{s:'@'},
    template: '<img ng-src="{{s}}" >',
    link: function($scope, element, attrs){
     
      attrs.$observe('s',function(value){
        if(!value){
          if(attrs.receiptids == "true")
            	$scope.s = "img/infuc.png";
            else
            	$scope.s = "http://ionicframework.com/img/docs/venkmans.jpg";
        }
        
      });
    }
  };
})
.directive('suchHref', ['$location', function ($location) {
  return{
    restrict: 'A',
    link: function (scope, element, attr) {
    	console.log("adas");
      element.attr('style', 'cursor:pointer');
      element.on('click', function(){
        $location.url(attr.suchHref)
        scope.$apply();
      });
    }
  }
}])
.directive('resultsimple', function() {
    return {
        restrict: 'EA',
        controller: "AnesteciaDopaminaCtrl",
        link: function(scope, element, attr) {},
        templateUrl: 'templates/pages/results-simple.html'
   };
});