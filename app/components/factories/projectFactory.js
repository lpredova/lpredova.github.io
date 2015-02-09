portfolioApp.factory('projectFactory', ['$http', function ($http) {
    return {
        getProject: function (slug) {

            var params = {
                params: {
                    method: 'project',
                    value: slug
                }
            };
            return $http.post("http://localhost/portfolioAPI/api_main.php", params);
        }
    };
}]);