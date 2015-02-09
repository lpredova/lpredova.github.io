portfolioApp.controller('workController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.openProject = function (slug) {
            $location.path('/work/project/' + slug)
        }



    }]);