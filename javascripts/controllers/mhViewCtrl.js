app.controller("mhViewCtrl",function($routeParams,$scope,SongFactory){
	console.log(" inside mhViewCtrl");

	$scope.selectedSong = {};
	SongFactory.getSingleSong($routeParams.id)
	.then((results)=>{
		$scope.selectedSong= results.data;
		console.log("results",results);
		console.log("$scope.selectedSong  in side mhViewCtrl",$scope.selectedSong);
	}).catch((error)=>{
    	console.log("error in getSingleSong ",error);
    });

});