portfolioApp.controller('aboutController', ['$scope', '$window',
    function ($scope, $window) {

        $scope.DownloadCV = function () {
            var url = 'http://' + window.location.hostname + ":" + window.location.port + "/app/assets/other/lovro_predovan_cv.pdf";
            $window.open(url, '_blank');
        }
    }]);