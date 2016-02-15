angular.module('ionicApp', ['ionic','ngFileUpload'])
.directive('siteHeader', function () {
    return {
            restrict: 'E',
            template: '<button id="button1" class="button button-icon button-clear ion-arrow-left-c" ng-click="back()"> </button>',
            scope: {
                        back: '@back',
                        forward: '@forward',
                        icons: '@icons'
                    },
            link: function(scope, element, attrs) {
                    element.on('click', function() {
                      window.history.back();
                    });
            }
        };
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('account', {
      url: '/account',
      templateUrl: 'templates/account.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html'
    })
    .state('faq', {
      url: '/faq',
      templateUrl: 'templates/faq.html'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.folder', {
      url: "/folder",
      views: {
        'folder-tab': {
          templateUrl: "templates/tab-folder.html",
          controller: 'FolderCtrl'
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.downloads', {
      url: "/downloads",
      views: {
        'downloads-tab': {
          templateUrl: "templates/tab-downloads.html"
        }
      }
    })
    .state('tabs.uploads', {
      url: "/uploads",
      views: {
        'uploads-tab': {
          templateUrl: "templates/tab-uploads.html",
          controller: 'UploadCtrl'
        }
      }
    })
    .state('tabs.points', {
      url: "/points",
      views: {
        'points-tab': {
          templateUrl: "templates/tab-points.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
.controller('HomeTabCtrl', function($scope) {
})


.controller('UploadCtrl', ['$scope', 'Upload', function ($scope, Upload) {
  alert();
    // upload later on form submit or something similar
    $scope.submit = function(file) {
        $scope.upload(file);
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: 'upload/url',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
}])

.controller('FolderCtrl', function($scope) {
  var items = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];
  $scope.items = items;
  $scope.noMoreItemsAvailable = false;
  $scope.myValue = false;
  
  $scope.loadMore = function() {
    if ( $scope.items.length == 5 ) {
      $scope.noMoreItemsAvailable = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
});

