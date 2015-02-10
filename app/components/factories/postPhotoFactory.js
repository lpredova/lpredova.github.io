portfolioApp.factory('postPhotoFactory', ['$http', function ($http) {
    return {
        getPostPhotos: function (id) {

            var params = {
                params: {
                    method: 'post_photo',
                    value: id
                }
            };
            return $http.post("http://lovropredovan.com/api/v1/api_add.php", params);
        }
    };
}]);