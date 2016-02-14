app.factory('ModalService', ['$ionicPopup', '$q',
    function($ionicPopup,$q) {
        return {
            resetModal: function() {
                    var confirmPopup = $ionicPopup.confirm({
                     title: 'Vaciar Formulario',
                     template: 'Esta segro que desea borrar los campos llenados?'
                   });

                    var defer = $q.defer();

                   confirmPopup.then(function(res) {                
                      if(res) { 
                        defer.resolve( true );
                      } else {
                        defer.reject( false );
                      }
                   });

                  return( defer.promise );
            },
            alertModal: function(titles, message){
                 var alertPopup = $ionicPopup.alert({
                   title: titles,
                   template: message
                   });
                   alertPopup.then(function(res) {
                   console.log('Thank you for not eating my delicious ice cream cone');
                   });
            }
        };
    }
]);

app.factory(
            "modalReset",
            function( $ionicPopup, $q ) {
                // Define promise-based confirm() method.
                function openModal( titles, result ) {
                   var confirmPopup = $ionicPopup.confirm({
                     title: titles,
                     template: result
                   });

                    var defer = $q.defer();

                    // The native confirm will return a boolean.
                   confirmPopup.then(function(res) {                 

                     if(res) {
                        defer.resolve( true );
                     } else {
                        defer.reject( false );
                     }
                   });

                    return( defer.promise );
                }

                return( openModal );
            }
        );




