'use strict';

// Declare app level module which depends on filters, and services
angular.module('BatallaKamikaze',
      ['BatallaKamikaze.config', 'BatallaKamikaze.routes', 'BatallaKamikaze.filters', 'BatallaKamikaze.services', 'BatallaKamikaze.directives', 'BatallaKamikaze.controllers',
         'simpleLoginTools', 'routeSecurity']
   )

   .run(['loginService', '$rootScope', 'FBURL', function(loginService, $rootScope, FBURL) {
      if( FBURL === 'https://INSTANCE.firebaseio.com' ) {
         // double-check that the app has been configured
         angular.element(document.body).html('<h1>Please configure app/js/config.js before running!</h1>');
         setTimeout(function() {
            angular.element(document.body).removeClass('hide');
         }, 250);
      }
      else {
         // establish authentication
         $rootScope.auth = loginService.init('/login');
         $rootScope.FBURL = FBURL;
      }
   }]);