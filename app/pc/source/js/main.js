(function () {
    "use strict";
    require('angular');
    angular.module('app',[]).controller('RootCtrl', function($scope) {
        console.log('root controller');
        $scope.hoge = '555';
    });
})();
