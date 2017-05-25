app.controller("mhEditCtrl",function($routeParams,$scope,SongFactory, $location){
	console.log(" inside mhEditCtrl");
	$scope.newSong = {};
	SongFactory.getSingleSong($routeParams.id)
	.then((results)=>{
		$scope.newSong = results.data;
		console.log("$scope.newSong in mhEditCtrl",$scope.newSong);
		})
	.catch((error)=>{
    	console.log("error getSingleSong",error);
    });

	$scope.addNewSong=()=>{
		SongFactory.editSong($scope.newSong).then(()=>{
			$location.url('songs/list');
    }).catch((error)=>{
    	console.log("  error addNewSong in edit in ",error);
    });	
			
	};


});