portfolioApp.factory('blogFactory', ['$http', function ($http) {
    return {
        getBlogPosts: function () {

            var params = {
                params: {
                    method: 'posts',
                    value: '1'
                },
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            return $http.post("http://lovropredovan.com/api/v1/api_main.php", params);
        }
    };
}]);