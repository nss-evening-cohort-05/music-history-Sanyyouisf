app.controller("mhListCtrl",function($scope,songFactory){
	console.log("inside mhListCtrl");
	$scope.songs=[];

	let getSongs = ()=>{
		songFactory.getSongsList()
		.then((songz) => {
			$scope.songs = songz;
			console.log("songz in getSongs",songz);
		})
		.catch((error)=>{
			console.log("error in getSongs",error);
		});
	};

	getSongs();

});