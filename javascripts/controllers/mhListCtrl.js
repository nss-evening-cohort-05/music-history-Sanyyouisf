app.controller("mhListCtrl",function($scope,SongFactory){
	console.log("inside mhListCtrl");
	$scope.songs=[];

	let getSongs = () => {
		SongFactory.getSongList()
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
		SongFactory.deletz(id)
		.then(()=>{
			getSongs();
			// console.log("result",result);
		})
		.catch((error)=>{
			console.log("error deleteSong in List Ctrl ", error);
		});
	};

});