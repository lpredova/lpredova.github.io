portfolioApp.controller('homeController', ['$scope', '$timeout','anchorSmoothScroll',
    function ($scope, $timeout,anchorSmoothScroll) {

        $scope.gotoMe = function () {
            anchorSmoothScroll.scrollTo('me');
        }

    }]);