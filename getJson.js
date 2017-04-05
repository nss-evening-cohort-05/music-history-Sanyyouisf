 
//Read from local JSON file with an XHR.
var xhr = new XMLHttpRequest();
var mySong=[];

//Loop over results and inject into Music History list view.
function makeDOM(xhrData){
	var mySong={}
	for( var i=0; i< xhrData.songs.length ;i++){
		mySong.Artist = `<div id= "container-${i}"> <p>  Artist : ${xhrData.songs[i].Artist}</p>`;
		mySong.album = ` <p>  album name : ${xhrData.songs[i].album}</p>`;
		mySong.SongName = ` <p>  Song  : ${xhrData.songs[i].SongName}</p>`;
		deletbtn = `<input type="button" class="btn" id ="button-${i}" value ="delete"> </div>`;
		document.getElementById("mySong" + i ).innerHTML = '<li>' + mySong.Artist + '</li>' 
		+ '<li>' + mySong.album + '</li>'
		+'<li>' + mySong.SongName + '</li>'
		+ deletbtn ;	
	}
}

// function makeDOM(xhrData){
// 	var mySong="";
// 	var currentSong;
// 	for( var i=0; i< xhrData.songs.length ;i++){
// 		// currentSong = xhrData.songs[i];
// 		mySong += `<div id= "container-${i}"> `;
// 		mySong += ` <p>  Artist : ${xhrData.songs[i].Artist}</p>`;
// 		mySong += ` <p>  album name : ${xhrData.songs[i].album}</p>`;
// 		mySong += ` <p>  Song  : ${xhrData.songs[i].SongName}</p>`;
// 		mySong += `<input type="button"  class="btn" id ="button-${i}" value ="delete">`;
// 		mySong += `</div>`;
// 		document.getElementById("mySong-${i}").innerHTML = mySong;
// 		console.log("mySong is :",mySong);
// 	}
// }
var data
 function excuteWhenLoad (){
    data = JSON.parse(this.responseText);
 	makeDOM(data);
 }

 xhr.addEventListener("load",excuteWhenLoad);
 xhr.open("GET","songs.json");
 xhr.send();

// var deletbtn = document.getElementsByClassName("button");
//Add delete button to each row and, when it is clicked, delete the entire row in the DOM.
 
// deletbtn.addEventListener("clicked" , function(){
// 	for( var i=0; i< xhrData.songs.length ;i++){
//  		if (document.getElementById("button-${i}").clicked === true ){
//  			document.getElementById("container-${i}").innerHTML = "";
//  		}
//  	}
// })


function deletSong(event){
	// var mySong=[];
	console.log("function deletSong");
	if (event.target.className==="btn"){
		console.log("data.songs",data.songs);
		for( var i=0; i<data.songs.length ;i++){
			console.log("event.target.id",event.target.id);
	 		// if (document.getElementById("button-${i}").clicked == true ){
	 			if (event.target.className==="btn"){
	 			console.log("event.target.id second",event.target.id);
	 			console.log("if statment");
	 			document.getElementById("container-${i}").innerHTML = "";
	 			console.log("line deleted");
	 		}
 		}
	}
}

document.body.addEventListener("click" ,deletSong);
