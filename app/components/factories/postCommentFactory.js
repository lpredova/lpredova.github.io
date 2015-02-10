portfolioApp.factory('postCommentFactory', ['$http', function ($http) {
    return {
        getPostComments: function (id) {

            var params = {
                params: {
                    method: 'post_comments',
                    value: id
                }
            };
            return $http.post("https://apartments-lela.com/api/v1/api_add.php", params);
        }
    };
}]);