 
//Read from local JSON file with an XHR.
var xhr = new XMLHttpRequest();

//Loop over results and inject into Music History list view.
function makeDOM(xhrData){
	var mySong={}
	for( var i=0; i< xhrData.songs.length ;i++){
		mySong.Artist = ` <p>  Artist : ${xhrData.songs[i].Artist}</p>`;
		mySong.album = ` <p>  album name : ${xhrData.songs[i].album}</p>`;
		mySong.SongName = ` <p>  Song  : ${xhrData.songs[i].SongName}</p>`;
		document.getElementById("mySong" + i ).innerHTML = '<li>' + mySong.Artist + '</li>' 
		+ '<li>' + mySong.album + '</li>'
		+'<li>' + mySong.SongName + '</li>';
		console.log("xhrData.songs[i]",xhrData.songs[i]);
		console.log("mySong[i]",mySong);
	}
}

 function excuteWhenLoad (){
 	var data = JSON.parse(this.responseText);
 	makeDOM(data);
 }

 xhr.addEventListener("load",excuteWhenLoad);
 xhr.open("GET","songs.json");
 xhr.send();
//Add delete button to each row and, when it is clicked, delete the entire row in the DOM.
 
