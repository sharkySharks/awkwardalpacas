angular.module('lunchCorgi.services', [])

.factory('Events', function($http) { //when routes are created, we might not use the $http stuff - TBD
	
  // need to figure out how this will point to the correct MongoDB path.  
  // this function finds events with time greater than now (that's what Date.now is)...
  var getEvents = function(pageNum) {
    return $http({
      method: 'GET',
      url: '/api/events',
      data: {pageNum: pageNum}
    })
    .then(function(resp) {
      return resp.statusCode
    })

  };

	var addEvent = function(event) {
	    return $http({
    		method: 'POST',
    		url: '/api/events', //this route may need to be changed once routes are created
    		data: {event: event}
    	})
    	.then(function (resp) {
	    	//we don't really need to return anything here, but maybe we'll redirect to the newly created event page or something
    		return resp.statusCode; 
    	});
	}

	// return all of our methods as an object, so we can use them in our controllers
	return {
		getEvents : getEvents,
		addEvent : addEvent
	}

})
.factory('Users', function($http){
  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    }).then(function (resp) {
      return resp.data.token;
    });
  }

  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    }).then(function (resp) {
      return resp.data.token;
    });    
  }

  return {
    signup: signup,
    signin: signin
  }
})