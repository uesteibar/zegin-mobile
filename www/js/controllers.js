zegin.controller('TimelineCtrl', function ($scope, EventsService, $window) {
    $scope.events = [];
    $scope.refreshEvents = function(){
        EventsService.getAllEvents().then(function (res) {
            $scope.events = res.data;
            console.log($scope.events);
        }, function (err) {
            $window.alert(err);
        });
    };
    
    $scope.refreshEvents();
    
    $scope.GotoEventDetails= function(id){
        $window.location="#/timeline/"+id;
    };
    
    
});
zegin.controller('EventDetailsCtrl', function ($scope, EventsService, $stateParams, $ionicHistory) {
    $scope.event = {
        name:"",
        date:0
    };
    $scope.getEvent = function(id){
        EventsService.getEvent(id).then(function (res) {
            $scope.event = res.data;
            console.log($scope.event);
        }, function (err) {
            $window.alert(err);
        });
    };
    
    $scope.getEvent($stateParams.id);
    
    $scope.goBack = function(){
        $ionicHistory.goBack();
    };
    
    
});