portfolioApp.controller('projectController', ['$scope', '$location', 'projectFactory', 'projectPhotoFactory',
    function ($scope, $location, projectFactory, projectPhotoFactory) {
        slug = $location.path().split("/")
        projectFactory.getProject(slug[3])
            .success(
            function (data) {
                if (data.status == 200) {
                    $scope.project = data.project
                    console.log()

                    projectPhotoFactory.getProjectPhoto(data.project[0].id)
                        .success(function (photos) {
                            if (photos.status == 200) {
                                $scope.photos = photos.photos
                            }
                        })
                        .error(data)
                }
            }
        )
            .error(
            function (data) {
            })
    }]);