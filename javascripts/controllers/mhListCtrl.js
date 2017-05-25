app.controller("mhListCtrl",function($scope,songFactory){
	console.log("inside mhListCtrl");
	$scope.songs=[];

	let getSongs = () => {
		songFactory.getSongList()
		.then((songz) => {
			$scope.songs = songz;
			console.log("songs in getSongs",$scope.songs);
		})
		.catch((error)=>{
			console.log("error in getSongs",error);
		});
	};

	getSongs();

	$scope.deleteSong = (id) => {
		songFactory.deletz(id)
		.then(()=>{
			getSongs();
			// console.log("result",result);
		})
		.catch((error)=>{
			console.log("error deleteSong in List Ctrl ", error);
		});
	};

});