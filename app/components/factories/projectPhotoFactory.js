portfolioApp.factory('projectPhotoFactory', ['$http', function ($http) {
    return {
        getProjectPhoto: function (id) {

            var params = {
                params: {
                    method: 'project_photos',
                    value: id
                }
            };
            return $http.post("http://apartments-lela.com/api/v1/api_add.php", params);
        }
    };
}]);