app
.controller('AnesteciaDopaminaCtrl', function($scope, $stateParams, PeopleService,$location,$ionicPopup) {
	$scope.info = [];
	$scope.resultado=0;
	
	$scope.showAlert = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Don\'t eat that!',
		 template: 'It might taste good'
	   });
	   alertPopup.then(function(res) {
		 console.log('Thank you for not eating my delicious ice cream cone');
	   });
	 };

	$scope.submit = function(data) {
	
		console.log(data);
		//La Dopamina viene en  5ml = 200mg
		
		
		var res1_mg = 0;
		res1_mg = (200 * 1) / 5; //resultado en mg
		
		console.log("res1_mg "+res1_mg);
		//calculo de gamas
		var res2_gamas = 0;
		res2_gamas = (res1_mg * 1000) /1; 
		
		console.log("res2_gamas "+res2_gamas);
		
		var res_final = 0;
		res_final = parseInt(data.gamas)/res2_gamas; //Dopamina en 100 ml de DA 
		
		console.log("data.gamas "+parseInt(data.gamas));
		
		$scope.resultado = res_final + " Dopamina en 100ml de DA" ;
		
       //$scope.showAlert();
	};
	
	$scope.reset = function(){
	   var confirmPopup = $ionicPopup.confirm({
		 title: 'Consume Ice Cream',
		 template: 'Esta segro que desea borrar los campos llenados?'
	   });
	   confirmPopup.then(function(res) {
		 if(res) {

		   $scope.info.username = null;
		   $scope.info.desidad = null;
		   $scope.info.opacidad = null;
		   
		 } else {
		   console.log('You are not sure');
		 }
	   });
	};

})
.controller('AnesteciaPresionArterialCtrl', function($scope, $stateParams, PeopleService,$ionicPopup) {
	console.log("info "+$stateParams.info );
	$scope.info = [];

	$scope.submit = function(data) {
		if(!isPositiveInteger(parseInt(data.diastolica)) || !isPositiveInteger(parseInt(data.sistolica)) ){
			$scope.showAlert();
		}
		var section1 = (2 * parseInt(data.diastolica));
		var section2 = section1 + parseInt(data.sistolica);
		var pam = section2/3;

		$scope.resultado = pam;
	}

	$scope.showAlert = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Error En Datos',
		 template: 'No se permite numeros negativo'
	   });
	   alertPopup.then(function(res) {
		 console.log('Thank you for not eating my delicious ice cream cone');
	   });
	 };

	$scope.reset = function(){
	   var confirmPopup = $ionicPopup.confirm({
		 title: 'Vaciar Formulario',
		 template: 'Esta segro que desea borrar los campos llenados?'
	   });
	   confirmPopup.then(function(res) {
		 if(res) {

		   $scope.info.diastolica = null;
		   $scope.info.sistolica = null;
		   
		 } else {
		   console.log('You are not sure');
		 }
	   });
	};

	function isPositiveInteger(n) {
	    return parseFloat(n) === n >>> 0;
	}
	
	
})
.controller('AnesteciaNoradrenalinaCtrl', function($scope, $stateParams, PeopleService,$ionicPopup) {
	$scope.info = [];

	$scope.submit = function(data) {
		/*if(!isPositiveInteger(parseInt(data.diastolica)) || !isPositiveInteger(parseInt(data.sistolica)) ){
			$scope.showAlert();
		}*/
		var peso = parseInt(data.peso);
		var diluir = parseInt(data.diluir);
		var ampollas = parseInt(data.ampollas) * 4;
		var dosis = parseFloat(data.dosis);

		var res1 = (ampollas/diluir) * 1000;
		var res2 = res1/peso;
		console.log("res2 "+res2);
		var res3 = res2/60;  //60min
		console.log("res3 "+res3);
		//Y por ultimo te dicen a q dosis quieren darle
		var res4 = dosis/res3;
		console.log("dosis "+dosis);
		console.log("res4 "+res4);

		$scope.resultado = res4;
	}

	$scope.showAlert = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Error En Datos',
		 template: 'No se permite numeros negativo'
	   });
	   alertPopup.then(function(res) {
		 console.log('Thank you for not eating my delicious ice cream cone');
	   });
	 };

	$scope.reset = function(){
	   var confirmPopup = $ionicPopup.confirm({
		 title: 'Vaciar Formulario',
		 template: 'Esta segro que desea borrar los campos llenados?'
	   });
	   confirmPopup.then(function(res) {
		 if(res) {

		   $scope.info.diastolica = null;
		   $scope.info.sistolica = null;
		   
		 } else {
		   console.log('You are not sure');
		 }
	   });
	};

	function isPositiveInteger(n) {
	    return parseFloat(n) === n >>> 0;
	}
	
	
});


