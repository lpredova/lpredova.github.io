portfolioApp.factory('projectPhotoFactory', ['$http', function ($http) {
    return {
        getProjectPhoto: function (id) {

            var params = {
                params: {
                    method: 'project_photos',
                    value: id
                }
            };
            return $http.post("http://localhost/portfolioAPI/api_add.php", params);
        }
    };
}]);