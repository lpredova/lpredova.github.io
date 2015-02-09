portfolioApp.controller('blogController', ['$scope', '$location', 'blogFactory',
    function ($scope, $location, blogFactory) {
        $scope.openPost = function (slug) {
            $location.path('/blog/post/' + slug)
        }

        blogFactory.getBlogPosts()
            .success(
            function (data) {
                console.log(data.status);

                if(data.status==200){
                    $scope.posts=data.posts
                }
            }
        )
            .error(
            function (data) {
            })


    }]);