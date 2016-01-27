// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic','ionic-toast', 'ngMessages'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  /*.state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })*/

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'templates/categories.html',
          controller: 'CategoriesCtrl'
        }
      }
    })
    .state('app.list', {
    url: "/list/:id",
     views: {
        'menuContent': {
          templateUrl: 'templates/form-list.html',
          controller: 'ListCtrl'
       }
     }   
  })

  .state('app.anestecia_1', {
    url: "/anestecia_1",
    views: {
      'menuContent': {
        templateUrl: 'templates/formulas/anestecia_1.html',
        controller: 'AnesteciaDopaminaCtrl'
      }
    }
    
  })
  .state('app.anestecia_2', {
    url: "/anestecia_2",
    views: {
      'menuContent': {
        templateUrl: 'templates/formulas/anestecia_2.html',
        controller: 'AnesteciaPresionArterialCtrl'
      }
    }   
  })
  .state('app.anestecia_3', {
    url: "/anestecia_3",
    views: {
      'menuContent': {
        templateUrl: 'templates/formulas/anestecia_3.html',
        controller: 'AnesteciaNoradrenalinaCtrl'
      }
    }   
  })
  .state('app.anestecia_4', {
    url: "/anestecia_4",
    views: {
      'menuContent': {
        templateUrl: 'templates/formulas/anestecia_4.html',
        controller: 'AnesteciaAdrenalinaCtrl'
      }
    }   
  })
  .state('app.anestecia_5', {
    url: "/anestecia_5",
    views: {
      'menuContent': {
        templateUrl: 'templates/formulas/anestecia_5.html',
        controller: 'OsmolaridadPlasmaticaCtrl'
      }
    }   
  })
  .state('app.anestecia_6', {
    url: "/anestecia_6",
    views: {
      'menuContent': {
        templateUrl: 'templates/formulas/anestecia_6.html',
        controller: 'AclaramientoCreatininaCtrl'
      }
    }   
  });

  /*.state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });*/
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/categories');
});
