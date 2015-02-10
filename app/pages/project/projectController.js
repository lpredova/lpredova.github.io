portfolioApp.controller('projectController', ['$scope', '$location', 'projectFactory', 'projectPhotoFactory',
    function ($scope, $location, projectFactory, projectPhotoFactory) {
        slug = $location.path().split("/")
        projectFactory.getProject(slug[3])
            .success(
            function (data) {
                if (data.status == 200) {
                    $scope.project = data.project

                    $scope.soon = data.project[0].id
                    console.log(data.project[0].id)
                    if( data.project[0].id === null){

                    }


                    projectPhotoFactory.getProjectPhoto(data.project[0].id)
                        .success(function (photos) {
                            if (photos.status == 200) {
                                $scope.photos = photos.photos

                            }
                        })
                        .error(function(){
                        })
                }
                else{
                }
            }
        )
            .error(
            function (data) {
            })
    }]);