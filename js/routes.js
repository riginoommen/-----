angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('cSIOrderOfWorship', {
    url: '/',
    templateUrl: 'templates/cSIOrderOfWorship.html',
    controller: 'cSIOrderOfWorshipCtrl'
  })

  .state('page4', {
    url: '/orukkam',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/')


});