portfolioApp.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(
                {
                enabled: true,
                requireBase: false
                });

            $routeProvider.
                when('/', {
                    templateUrl: '/app/pages/home/home.html',
                    controller: 'homeController'
                }).
                when('/work', {
                    templateUrl: '/app/pages/work/work.html',
                    controller: 'workController'
                }).
                when('/about', {
                    templateUrl: '/app/pages/about/about.html',
                    controller: 'aboutController'
                }).
                when('/contact', {
                    templateUrl: '/app/pages/contact/contact.html',
                    controller: 'contactController'
                }).
                when('/work/project/:slug', {
                    templateUrl: '/app/pages/project/project.html',
                    controller: 'projectController'
                }).
                when('/blog/post/:slug', {
                    templateUrl: '/app/pages/post/post.html',
                    controller: 'postController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]
);