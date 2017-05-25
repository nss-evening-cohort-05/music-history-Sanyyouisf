app.controller("mhNewSongCtrl",function($http, $q,$scope,$location,SongFactory, $rootScope){
	console.log(" inside mhNewSongCtrl");
	 // $scope.newSong = {};

	$scope.addNewSong = () => {
		// $scope.newSong.uid=$rootScope.user.uid;
		// console.log("$scope.newSong.uid inside mhNewSongCtrl",$scope.newSong.uid);
		SongFactory.postNewSong($scope.newSong)
		.then ((response)=>{
			$scope.newSong = {};
			console.log("response in addNewSong in mhNewSongCtrl",response);
			console.log("$scope.newSong in addNewSong in mhNewSongCtrl",$scope.newSong);
			$location.url("/songs/list");
		})
		.catch((error)=>{
			console.log("error in addNewSong in mh NewSong Ctrl :",error);
		});
	};
	
});