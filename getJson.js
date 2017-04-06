 
//Read from local JSON file with an XHR.
var xhr = new XMLHttpRequest();


//Loop over results and inject into Music History list view.
function makeDOM(xhrData){
	var mySong={}
	for( var i=0; i< xhrData.songs.length ;i++){
		mySong.Artist = `<div id= "container-${i}"> <p class="seb">  Artist : ${xhrData.songs[i].Artist}</p>`;
		mySong.album = ` <p class="seb">  album name : ${xhrData.songs[i].album}</p>`;
		mySong.SongName = ` <p class="seb">  Song  : ${xhrData.songs[i].SongName}</p>`;
		deletbtn = `<input type="button" class="btn" id ="button-${i}" value ="delete"> </div>`;
		document.getElementById("mySong" + i ).innerHTML = '<li>' + mySong.Artist + '</li>' 
		+ '<li>' + mySong.album + '</li>'
		+'<li>' + mySong.SongName + '</li>'
		+ deletbtn ;	
	}
}


var data
 function excuteWhenLoad (){
    data = JSON.parse(this.responseText);
 	makeDOM(data);
 }

 xhr.addEventListener("load",excuteWhenLoad);
 xhr.open("GET","songs.json");
 xhr.send();

//Add delete button to each row and, when it is clicked, delete the entire row in the DOM.
function deletSong(event){
	if (event.target.className==="btn"){
		var parent = event.target.parentNode;
		for (var i = 0 ; i < parent.children.length ; i++){
			parent.children[i].innerHTML= "";
		}
	}
}

// event listener for the delete button
document.body.addEventListener("click" ,deletSong);
