portfolioApp.factory('postCommentFactory', ['$http', function ($http) {
    return {
        getPostComments: function (id) {

            var params = {
                params: {
                    method: 'post_comments',
                    value: id
                }
            };
            return $http.post("http://localhost/portfolioAPI/api_add.php", params);
        }
    };
}]);