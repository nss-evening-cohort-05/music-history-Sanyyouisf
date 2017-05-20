app.factory("songFactory",function($q, $http, FIREBASE_CONFIG){
	console.log("inside songFactory");

	let getSongsList = () => {
        let songz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/songs.json`)
                .then((fbItems) => {
                    let songsCollection = fbItems.data;
                    console.log("songsCollection",songsCollection);
                    if (songsCollection !== null) {
                        Object.keys(songsCollection).forEach((key) => {
                            songsCollection[key].id = key;
                            songz.push(songsCollection[key]);
                        });
                    }
                    resolve(songz);
                    console.log("songz",songz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in getSongsList",error);
                });
        });
    };



    return { getSongsList: getSongsList};
});