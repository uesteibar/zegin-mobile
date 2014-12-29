
zegin.factory('EventsService',['$http', function($http){
    return{
        getKMREvents: function(locationData){
            console.log(locationData.k);
            console.log(locationData.D);
            return $http.get(options.api.base_url + '/api/events/'+locationData.k + "/" + locationData.D + "/" + locationData.kmr);
        },
//        putPost: function(post){
//            post.date = new Date();
//            return $http.post(options.api.base_url + '/post', post);
//        },
//        deletePost: function(post){
//            return $http.delete(options.api.base_url + '/post/'+post._id, post);
//        },
        getEvent: function(id){
            return $http.get(options.api.base_url + '/api/events/'+id);
        }
    }
}]);