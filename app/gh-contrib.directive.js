(function() {
    'use strict';

    angular.module('gh')
        .directive('ghContrib', GhContrib);

        function GhContrib() {
          return {
            templateUrl: 'app/gh-contrib.template.html',
            scope: {
              contrib: '='
            }
          };
        }

})();
