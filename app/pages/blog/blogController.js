portfolioApp.controller('blogController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.openPost = function (slug) {
            $location.path('/blog/post/' + slug)
        }
    }]);