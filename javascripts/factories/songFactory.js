app.factory("songFactory", function($q, $http, FIREBASE_CONFIG) {
    console.log("inside songFactory");

    let getSongList = () => {
        let songz = [];
        return new $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/songs.json`)
                // console.log("songs.json in getSongsList in factory ",songs.json)
                .then((fbItems) => {
                    let songsCollection = fbItems.data;
                    // console.log("songsCollection in getSongsList in factory :",songsCollection);
                    // console.log("fbItems in getSongsList in factory :",fbItems);
                    if (songsCollection !== null) {
                        Object.keys(songsCollection).forEach((key) => {
                            songsCollection[key].id = key;
                            // console.log("key in getSongsList in factory :",key);
                            songz.push(songsCollection[key]);
                            // console.log("songz in getSongsList in factory :",songz);
                        });
                    }
                    resolve(songz);
                    // console.log("songz in getSongsList after in factory  :",songz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in getSongsList", error);
                });
        });
    };


    let getSingleSong = (id) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/songs/${id}.json`)
                .then((resultz) => {
                    resultz.data.id = id;
                    resolve(resultz);
                    console.log("resultz in getSingleSong in factory :", resultz);
                    console.log("resultz.data in getSingleSong in factory :", resultz.data);
                    console.log("resultz.data.id in getSingleSong in factory :", resultz.data.id);
                }).catch((error) => {
                    reject(error);
                    console.log("error in getSingleSong", error);
                });
        });
    };

    let deletz = (songId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/songs/${songId}.json`)
                .then((resultz) => {
                    resolve(resultz);
                    console.log("resultz in deletz in factory :", resultz);

                })
                .catch((error) => {
                    reject(error);
                    console.log("error in deletz in factory ", error);
                });
        });
    };


    let postNewSong = (newSong) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/songs.json`, JSON.stringify(newSong))
            .then((resultz) => {
                    resolve(resultz);
                    console.log("resultz in postNewSong in factory :", resultz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in postNewSong in factory ", error);
                });
        });
    };


    return { getSongList: getSongList, getSingleSong: getSingleSong, deletz: deletz ,postNewSong:postNewSong};
});
