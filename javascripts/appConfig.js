app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
	console.log("intializing the firebase");
});

app.config(function($routeProvider){
	$routeProvider
	.when('/songs/list',{
		templateUrl:'/partials/mh-list.html',
		controller:'mhListCtrl'
	})
	.when('/songs/Profile',{
		templateUrl:'/partials/mh-profile.html',
		controller:"mhViewProfile"
	})
	.when('/songs/new',{
		templateUrl:'/partials/mh-newSong.html',
		controller:"mhNewSongCtrl"
	})
	.otherwise('/songs/list');
});