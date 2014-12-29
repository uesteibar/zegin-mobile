// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var zegin = angular.module('zegin', ['ionic', 'ngCordova']);

var options = {};
options.api = {};
//options.api.base_url = "http://localhost:3000";
options.api.base_url = "http://192.168.1.199:3000";


zegin.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

zegin.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('zegin', {
    url: "/zegin",
    abstract: false,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('zegin.timeline', {
    url: '/timeline',
    views: {
      'zegin-tab': {
        templateUrl: 'templates/timeline.html',
        controller: 'TimelineCtrl'
      }
    }
  })
  
    .state('zegin.details', {
    url: '/details/:id',
    views: {
      'zegin-tab': {
        templateUrl: 'templates/event_details.html',
        controller: 'EventDetailsCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/zegin/timeline');

});
