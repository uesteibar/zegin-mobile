
zegin.factory('EventsService',['$http', function($http){
    return{
        getAllEvents: function(){
            return $http.get(options.api.base_url + '/events');
        }
//        putPost: function(post){
//            post.date = new Date();
//            return $http.post(options.api.base_url + '/post', post);
//        },
//        deletePost: function(post){
//            return $http.delete(options.api.base_url + '/post/'+post._id, post);
//        },
//        getPost: function(id){
//            return $http.get(options.api.base_url + '/post/'+id);
//        }
    }
}]);