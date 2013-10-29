(function() {
	Meteor.loginAnonymously = function(fn) {
    	Meteor.call('login', {anonymous: true}, function(err, result) {
            if(!err) {
            	if(!Meteor.user()){
            		Meteor.loginWithToken(result.token);	
            	}
                fn && fn(err,result)
            }
    	});
  	}
})();
