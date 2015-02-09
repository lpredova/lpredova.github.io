portfolioApp.factory('postPhotoFactory', ['$http', function ($http) {
    return {
        getPostPhotos: function (id) {

            var params = {
                params: {
                    method: 'post_photo',
                    value: id
                }
            };
            return $http.post("http://localhost/portfolioAPI/api_add.php", params);
        }
    };
}]);