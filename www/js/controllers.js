zegin.controller('TimelineCtrl', function ($scope, EventsService, $window, $ionicPlatform, $cordovaGeolocation) {
    $scope.events = [];

    $scope.refreshEvents = function () {
        $ionicPlatform.ready(function () {

            // TODO - query round km
            //                $cordovaPlugin.someFunction().then(success, error);
            console.log("device is ready!");

            var posOptions = {
                timeout: 10000,
                enableHighAccuracy: false
            };
            console.log('Getting current position');
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var lat = position.coords.latitude
                    var long = position.coords.longitude

                    alert(lat + ", " + long);


                    EventsService.getAllEvents().then(function (res) {

                        $scope.events = res.data;
                        console.log($scope.events);
                    }, function (err) {
                        $window.alert(err);
                    })
                        .finally(function () {
                            $scope.$broadcast('scroll.refreshComplete');
                        });

                }, function (err) {
                    // error
                });





        });
    };

    $scope.GotoEventDetails = function (id) {
        $window.location = "#/timeline/" + id;
    };



    $scope.refreshEvents();


});
zegin.controller('EventDetailsCtrl', function ($scope, EventsService, $stateParams, $ionicHistory) {
    $scope.event = {
        name: "",
        date: 0
    };
    $scope.getEvent = function (id) {
        EventsService.getEvent(id).then(function (res) {
            $scope.event = res.data;
            console.log($scope.event);
        }, function (err) {
            $window.alert(err);
        });
    };

    $scope.getEvent($stateParams.id);

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };


});