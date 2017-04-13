
$(document).ready(function(){
var songContainer = $('#songContainer');
var song2Container = $('#song2Container');
var button = document.getElementById("button");
var moreBtn = '<input type="button" id ="button" class="morebtn" value="More >"> ' ;

//whey this function dosn't work
// function makeDOM(song){
// 	var songs  ;
// 	$.each(songs, function(index, value) {
// 	    console.log("makeDOM");
// 	    $('#songContainer').append(`<p> {value.album} </p>`);
// 	    $("#songContainer").append(`<p>  {value.Artist}</p> `);
// 	    $("#songContainer").append(`<p> {value.SongName} </p>`);
// 	    $("#songContainer").append(`<input type="button" class="btn" id ="button-${i}" value ="delete">`);
// 	});
// 	$("#songContainer").append(' <input type="button" id ="button" class="morebtn" value="More >"> ');
// };


function makeDOM(data){
	var mySong={}
	for( var i=0; i< data.songs.length ;i++){
		mySong.Artist = `<div id= "container-${i}" class = "container"> <p>the Artist is : ${data.songs[i].Artist}</p>`;
		mySong.album = ` <p>album name : ${data.songs[i].album}</p>`;
		mySong.SongName = ` <p> Song  : ${data.songs[i].SongName}</p>`;
		deletbtn = `<input type="button" class="btn" id ="button-${i}" value ="delete"> </div>`;
		$("#mySong" + i ).html( '<li>' + mySong.Artist + '</li>' 
		+ '<li>' + mySong.album + '</li>'
		+'<li>' + mySong.SongName + '</li>'
		+ deletbtn );	
	}
	$('#songContainer').append(moreBtn);
}

	
$.ajax({
  url: "songs.JSON"
}).done(function (songs) {
	makeDOM(songs);
	console.log("songs",songs);
	console.log("load");
	console.log("data in songs.json", songs);
	//in case of failure 
}).fail(function (error) {
	console.log("the following error occurred", error);
});




// var data
// function excuteWhenLoad (){
//    data = JSON.parse(this.responseText);
//    makeDOM(data);
// }





// function deletSong(event){
// 	if (event.target.className==='btn'){
// 		var parent = event.target.parentNode;
// 		for (var i = 0 ; i < parent.children.length ; i++){	
// 			parent.children[i].innerHTML= "";
// 		}
// 	}
// }

// document.body.addEventListener("click" ,deletSong);




// //the code for part 2 
// function makeDOMSongs2(xhrData2){
// 	var mySong2={}
// 	for( var i=0; i< xhrData2.songs2.length ;i++){
// 		mySong2.Artist = `<div id= "container-${i}" class = "container"> <p>  Artist : ${xhrData2.songs2[i].Artist}</p>`;
// 		mySong2.album = ` <p>  album name : ${xhrData2.songs2[i].album}</p>`;
// 		mySong2.SongName = ` <p>  Song  : ${xhrData2.songs2[i].SongName}</p>`;
// 		deletbtn = `<input type="button" class="btn" id ="button-${i}" value ="delete"> </div>`;
// 		document.getElementById("2mySong" + i ).innerHTML = '<li>' + mySong2.Artist + '</li>' 
// 		+ '<li>' + mySong2.album + '</li>'
// 		+'<li>' + mySong2.SongName + '</li>'
// 		+ deletbtn ;
// 	}
// 	//adding the more button at the end
// 	song2Container.innerHTML += moreBtn;
// }


// function loadSongs2(){
//     data2 = JSON.parse(this.responseText);
//  	makeDOMSongs2(data2);
//  }

// //delete the More button at the end of the first song part 
// function deleteMoreBtn(event){
// 	if (event.target.className ==="morebtn"){
// 		event.target.remove();
// 	}
// };

// // Event Listener gor the More button 
// document.body.addEventListener("click",function(){
// 	if (event.target.className ==="morebtn"){
// 	xhr2.addEventListener("load",loadSongs2);
// 	xhr2.open("GET","songs2.json");
// 	xhr2.send();
// 	deleteMoreBtn(event);
// 	}
// });

});
