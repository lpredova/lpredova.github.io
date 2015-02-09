portfolioApp.factory('postFactory', ['$http', function ($http) {
    return {
        getPosts: function (slug) {
            var params = {
                params: {
                    method: 'post',
                    value: slug
                }
            };
            return $http.post("http://localhost/portfolioAPI/api_main.php", params);
        }
    };
}]);