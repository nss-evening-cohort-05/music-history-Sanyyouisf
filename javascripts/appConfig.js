app.config(function($routeProvider){
	$routeProvider
	.when('/musicHistory/list',{
		templateUrl:"/partials/mh-list.html",
		controller:"mhListCtrl"
	})
	.when('/musicHistory/Profile',{
		templateUrl:"/partials/mh-profile.html",
		controller:"mhViewProfile"
	})
	.when('/musicHistory/AddSong',{
		templateUrl:"/partials/mh-addSong.html",
		controller:"mhAddSongCtrl"
	})
	.otherwise('/musicHistory/list');
});