app
.controller('AnesteciaDopaminaCtrl', function($scope, $stateParams, PeopleService,$location,$ionicPopup,ModalService) {
	$scope.resultado = "";

	$scope.info = {
		dilusion: '',
		concentracion: '',
		peso: '',
		dosis : '' 
	};  

	$("input[type=number]").focusin(function() {
		$('#resBoton1').hide();
	});

	$("input[type=number]").focusout(function() {
		$('#resBoton1').show();
	});
	
	$scope.showAlert = function() {

	   ModalService.alertModal("Error En Datos","No se permite numeros negativo");
	 };

	$scope.submitDopamina = function(form, info) {
		$('#resBoton1').show();

		/*if(!isPositiveInteger(parseInt(info.dilusion)) || !isPositiveInteger(parseInt(info.sistolica)) ){
			$scope.showToast("El dato ingresado es incorrecto");
		}*/

		if(form.$valid) {
			console.log(info);
		//La Dopamina viene en  5ml = 200mg	
		
			var res1_mg = 0;
			res1_mg = (200 * 1) / 5; //resultado en mg
			
			console.log("res1_mg "+res1_mg);
			//calculo de gamas
			var res2_gamas = 0;
			res2_gamas = (res1_mg * 1000) /1; 
			
			console.log("res2_gamas "+res2_gamas);
			
			var res_final = 0;
			res_final = parseInt(info.gamas)/res2_gamas; //Dopamina en 100 ml de DA 
			
			console.log("info.gamas "+parseInt(info.gamas));
			
			$scope.resultado = res_final + " Dopamina en 100ml de DA" ;

		}
		else{
			$scope.showToast("Campos Vacios");
		}	
	}	

	
	$scope.reset = function(){

		ModalService.resetModal().then(
			function( response ) {
				  $scope.info.username = null;
		   $scope.info.desidad = null;
		   $scope.info.opacidad = null;
            },
            function() {
                
            });
	};

})
.controller('AnesteciaPresionArterialCtrl', function($scope, $stateParams, PeopleService,$ionicPopup,ionicToast,ModalService,$cordovaKeyboard) {

	$("input[type=number]").focusin(function() {
		$('#resBoton').hide();

	});

	$("input[type=number]").focusout(function() {
		$('#resBoton').show();

	});

	$scope.resultado = "";

	$scope.info = {
		diastolica: '',
		sistolica : '' 
	};  

	$scope.submit_presion = function(form, info) {
		$('#resBoton').show();
		
		if(!isPositiveInteger(parseInt(info.diastolica)) || !isPositiveInteger(parseInt(info.sistolica)) ){
			$scope.showToast("El dato ingresado es incorrecto");
		}

		if(form.$valid) {
			var section1 = (2 * parseInt(info.diastolica));
			var section2 = section1 + parseInt(info.sistolica);
			var pam = section2/3;

			$scope.resultado = pam;
		}
		else{
			$scope.showToast("Campos Vacios");
		}	
	}

	$scope.reset = function(){

		ModalService.resetModal().then(
			function( response ) {
				 $scope.info.diastolica = null;
		   		$scope.info.sistolica = null;
		   		$scope.resultado = "";
            },
            function() {
                
            });
	};

	function isPositiveInteger(n) {
	    return parseFloat(n) === n >>> 0;
	}

	$scope.showToast = function(ms){
	 	var s = ionicToast.show(ms, 'bottom',false, 2000);
	 	console.log(s);
	};
	
	
})
.controller('AnesteciaNoradrenalinaCtrl', function($scope, $stateParams, PeopleService,$ionicPopup,ionicToast) {
	$scope.resultado = "";

	$scope.info = {
		diluir: '',
		ampollas: '',
		peso: '',
		dosis : '' 
	};  

	$("input[type=number]").focusin(function() {
		$('#resBoton1').hide();
	});

	$("input[type=number]").focusout(function() {
		$('#resBoton1').show();
	});

	$scope.submit_adrenalina = function(form, info) {
		$('#resBoton').show();
		
		/*if(!isPositiveInteger(parseInt(info.diastolica)) || !isPositiveInteger(parseInt(info.sistolica)) ){
			$scope.showToast("El dato ingresado es incorrecto");
		}*/

		if(form.$valid) {
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
		else{
			$scope.showToast("Campos Vacios");
		}	
	}

	$scope.submit__ = function(data) {
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
	 	 ModalService.alertModal("Error En Datos","No se permite numeros negativo");
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

	$scope.showToast = function(ms){
	 	var s = ionicToast.show(ms, 'bottom',false, 2000);
	 	console.log(s);
	};
	
	
})
.controller('AnesteciaAdrenalinaCtrl', function($scope, $stateParams, PeopleService,$ionicPopup) {
	$scope.info = {
		diluir: '',
		ampollas: '',
		peso: '',
		dosis : '' 
	};  

	$("input[type=number]").focusin(function() {
		$('#resBoton1').hide();
	});

	$("input[type=number]").focusout(function() {
		$('#resBoton1').show();
	});
	
	$scope.showAlert = function() {

	   ModalService.alertModal("Error En Datos","No se permite numeros negativo");
	 };

	$scope.submitAdrenalina = function(form, info) {
		/*if(!isPositiveInteger(parseInt(data.diastolica)) || !isPositiveInteger(parseInt(data.sistolica)) ){
			$scope.showAlert();
		}*/
		var peso = parseInt(info.peso);
		var diluir = parseInt(info.diluir);
		var ampollas = parseInt(info.ampollas) * 1;
		var dosis = parseFloat(info.dosis);

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
	  	ModalService.alertModal("Error En Datos","No se permite numeros negativo");
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
.controller('OsmolaridadPlasmaticaCtrl', function($scope, $stateParams, PeopleService,ModalService, $ionicPopup) {
	$scope.info = [];

	$scope.submit = function(data) {
		/*if(!isPositiveInteger(parseInt(data.diastolica)) || !isPositiveInteger(parseInt(data.sistolica)) ){
			$scope.showAlert();
		}*/
		//Osm= 2 (Na + k ) + glucosa / 18  + BUN / 2,8 
		console.log(data);
		var Na = parseInt(data.na);
		var bun = parseInt(data.bun);
		var k = parseInt(data.k);
		var glucosa = parseInt(data.glucosa);

		console.log(Na + k);

		var osm = 2 * (Na + k) + glucosa/18 + bun/2.8;

		$scope.resultado = osm;
	}

	$scope.showAlert = function() {
		ModalService.alertModal("demo","modalll");
	 };

	$scope.reset = function(){
		ModalService.resetModal().then(
		function( response ) {
			$scope.info.Na = null;
			$scope.info.glucosa = null;
			$scope.info.bun = null;
			$scope.info.k = null;
        },
        function() {
            
        });
	};

	function isPositiveInteger(n) {
	    return parseFloat(n) === n >>> 0;
	}
	
	
})
.controller('AclaramientoCreatininaCtrl', function($scope, $stateParams, PeopleService, ModalService, ionicToast, $ionicPopup) {

	$("input[type=number]").focusin(function() {
		$('#resBoton6').hide();

	});

	$("input[type=number]").focusout(function() {
		$('#resBoton6').show();

	});

	$scope.resultado = "";

	  $scope.info = {
	    edad: '',
	    peso : '',
	    creatinina:'',
	    genero:''    
	  };  

	  $scope.genero = [
	  {id: 1, text: 'Masculino', checked: false, icon: null},
	  {id: 2, text: 'Femenino', checked: false, icon: null}];

	  /*$scope.countries = [
    {id: 1, text: 'USA', checked: false, icon: null}, 
    {id: 2, text: 'France', checked: false, icon: 'https://www.zeendoc.com/wp-content/themes/zeendoc/img/french_flag_small.jpg'}, 
    {id : 3, text: 'Japan', checked: true, icon: null}];*/
  
  $scope.countries_text_single = 'Seleccione Genero';
  //$scope.countries_text_multiple = 'Choose countries';
  $scope.val =  {single: null, multiple: null};

	$scope.submit_creatina = function(form, info) {

		if($scope.val.single == null){
			$scope.showToast("debe seleccionar un genero");
		}
		else{
			if(form.$valid) {	
				var peso = parseInt(info.peso);
				var edad = parseInt(info.edad);
				var creatina = parseInt(info.creatinina);
				var genero = parseInt($scope.val.single);

				if(peso == 0 || edad == 0 || creatina == 0){
					$scope.showToast("campos vacios");
				}
				else{
					var osm = (140 - edad) * peso / (71*creatina);

					var res = 0;
					if(genero == 2)
						res = osm* 0.85;
					else
						res = osm;

					$scope.resultado = res;
				}

			}
			else{
				$scope.showToast("Existen campos Vacios");
			}	
		}	
	}

	$scope.showAlert = function() {
		ModalService.alertModal("Error En Datos","No se permite numeros negativo");
	 };


	$scope.reset = function(){

		ModalService.resetModal().then(
				function( response ) {
					$scope.info.peso= null;
					$scope.info.edad = null;
					$scope.info.creatinina = null;
	            },
	            function() {
	                
	            });
	};

	function isPositiveInteger(n) {
	    return parseFloat(n) === n >>> 0;
	}
	
	//middle, top, bottom  https://market.ionic.io/plugins/ionictoast
	$scope.showToast = function(ms){

	 ionicToast.show(ms, 'bottom',false, 2000);
	};
	
});


