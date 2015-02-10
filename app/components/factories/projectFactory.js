portfolioApp.factory('projectFactory', ['$http', function ($http) {
    return {
        getProject: function (slug) {

            var params = {
                params: {
                    method: 'project',
                    value: slug
                }
            };
            return $http.post("https://apartments-lela.com/api/v1/api_main.php", params);
        }
    };
}]);