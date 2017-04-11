//Read from local JSON file with an XHR.
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var songContainer = document.getElementById("songContainer");
var song2Container = document.getElementById("song2Container");
var button = document.getElementById("button");
var moreBtn = ' <input type="button" id ="button" class="morebtn" value="More >"> ' ;


//Loop over results and inject into Music History list view.
function makeDOM(xhrData){
	var mySong={}
	for( var i=0; i< xhrData.songs.length ;i++){
		mySong.Artist = `<div id= "container-${i}" class = "container"> <p>  Artist : ${xhrData.songs[i].Artist}</p>`;
		mySong.album = ` <p>  album name : ${xhrData.songs[i].album}</p>`;
		mySong.SongName = ` <p>  Song  : ${xhrData.songs[i].SongName}</p>`;
		deletbtn = `<input type="button" class="btn" id ="button-${i}" value ="delete"> </div>`;
		document.getElementById("mySong" + i ).innerHTML = '<li>' + mySong.Artist + '</li>' 
		+ '<li>' + mySong.album + '</li>'
		+'<li>' + mySong.SongName + '</li>'
		+ deletbtn ;	
	}
	songContainer.innerHTML += moreBtn;
}


var data
function excuteWhenLoad (){
   data = JSON.parse(this.responseText);
   makeDOM(data);
}

xhr.addEventListener("load",excuteWhenLoad);
xhr.open("GET","songs.json");
xhr.send();



function deletSong(event){
	if (event.target.className==='btn'){
		var parent = event.target.parentNode;
		for (var i = 0 ; i < parent.children.length ; i++){	
			parent.children[i].innerHTML= "";
		}
	}
}

document.body.addEventListener("click" ,deletSong);




//the code for part 2 
function makeDOMSongs2(xhrData2){
	var mySong2={}
	for( var i=0; i< xhrData2.songs2.length ;i++){
		mySong2.Artist = `<div id= "container-${i}" class = "container"> <p>  Artist : ${xhrData2.songs2[i].Artist}</p>`;
		mySong2.album = ` <p>  album name : ${xhrData2.songs2[i].album}</p>`;
		mySong2.SongName = ` <p>  Song  : ${xhrData2.songs2[i].SongName}</p>`;
		deletbtn = `<input type="button" class="btn" id ="button-${i}" value ="delete"> </div>`;
		document.getElementById("2mySong" + i ).innerHTML = '<li>' + mySong2.Artist + '</li>' 
		+ '<li>' + mySong2.album + '</li>'
		+'<li>' + mySong2.SongName + '</li>'
		+ deletbtn ;
	}
	//adding the more button at the end
	song2Container.innerHTML += moreBtn;
}


function loadSongs2(){
    data2 = JSON.parse(this.responseText);
 	makeDOMSongs2(data2);
 }

//delete the More button at the end of the first song part 
function deleteMoreBtn(event){
	if (event.target.className ==="morebtn"){
		event.target.remove();
	}
};

// Event Listener gor the More button 
document.body.addEventListener("click",function(){
	if (event.target.className ==="morebtn"){
	xhr2.addEventListener("load",loadSongs2);
	xhr2.open("GET","songs2.json");
	xhr2.send();
	deleteMoreBtn(event);
	}
});
