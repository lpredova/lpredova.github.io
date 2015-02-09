portfolioApp.controller('postController', ['$scope', '$location', 'postFactory', 'postCommentFactory', 'postPhotoFactory',
    function ($scope, $location, postFactory, postCommentFactory, postPhotoFactory) {

        slug = $location.path().split("/")
        postFactory.getPosts(slug[3])
            .success(function (post) {
                console.log(post)
                if (post.status == 200) {
                    id = post.post[0].id

                    postPhotoFactory.getPostPhotos(id).success(
                        function(photos)
                        {
                            if(photos.status==200){
                                $scope = photos.photos
                                console.log("photos" + photos)
                                console.log(photos.photos)
                            }
                        }
                    ).error()
                    postCommentFactory.getPostComments(id).success(
                        function (data) {
                            if(data.status==200){
                                $scope.comments = data.comments
                                console.log("comments" + data.comments)
                                console.log(data.comments)
                            }
                        }
                    ).error()

                }
            })
            .error()

    }]);