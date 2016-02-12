app.factory('ModalService___', ['$ionicPopup', '$q',
    function($ionicPopup,$q) {
        return {
            openModal: function(titles, result) {
                    var confirmPopup = $ionicPopup.confirm({
                     title: titles,
                     template: result
                   });

                    var defer = $q.defer();

                   confirmPopup.then(function(res) {
                   

                     if(res) {
                      console.log("aaa");      
                      defer.resolve( true );
                     } else {
                       console.log('You are not sure');
                      defer.reject( false );
                     }

                     console.log(defer.promise);

                   return( defer.promise );

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




