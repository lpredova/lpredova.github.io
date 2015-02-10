portfolioApp.factory('postFactory', ['$http', function ($http) {
    return {
        getPosts: function (slug) {
            var params = {
                params: {
                    method: 'post',
                    value: slug
                }
            };
            return $http.post("http://apartments-lela.com/api/v1/api_main.php", params);
        }
    };
}]);