$(document).ready(function(){
	var songContainer = $('#songContainer');
	var song2Container = $('#song2Container');
	var moreBtn = '<input type="button" id ="button" class="morebtn" value="More >" >' ;
	var deletbtn = '<input type="button" class="btn"  value ="delete"> </div>';

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


//make DOM for the first jason
	function makeDOM(data){
		var mySong={}
		for( var i=0; i< data.songs.length ;i++){
			mySong.Artist = `<div id= "container-${i}" class = "container"> <p>the Artist is : ${data.songs[i].Artist}</p>`;
			mySong.album = ` <p>album : ${data.songs[i].album}</p>`;
			mySong.SongName = ` <p> Song  : ${data.songs[i].SongName}</p>`;		
			$("#mySong" + i ).html( '<li>' + mySong.Artist + '</li>' 
			+ '<li>' + mySong.album + '</li>'
			+'<li>' + mySong.SongName + '</li>'
			+ deletbtn );	
		}
		$('#songContainer').append(moreBtn);
	}

//loading first JSON file	
	$.ajax({
	  url: "songs.JSON"
	}).done(function (songs) {
		makeDOM(songs);
	}).fail(function (error) {
		console.log("the following error occurred", error);
	});


//Event Listener for the delet button
	$(document).ready(function() {
		
		$(".btn").on("click" , function(event){
			console.log("the event is :",event)
			$(this).siblings().remove();
			console.log ("line is remover");
		});
	});

//make DOM for the second jason
	function makeDOM2(data2){
		var mySong={}
		for( var i=0; i< data2.songs2.length ;i++){
			mySong.Artist = `<div id= "container-${i}" class = "container"> <p>the Artist is : ${data2.songs2[i].Artist}</p>`;
			mySong.album = ` <p>album : ${data2.songs2[i].album}</p>`;
			mySong.SongName = ` <p> Song : ${data2.songs2[i].SongName}</p>`;
			$("#2mySong" + i ).html( '<li>' + mySong.Artist + '</li>' 
			+ '<li>' + mySong.album + '</li>'
			+'<li>' + mySong.SongName + '</li>'
			+ deletbtn);	
		}
		$('#song2Container').append(moreBtn);
	};

//event listener for the more button
	$(document).ready(function() {
		$("#button").on("click" , function(){
			$(this).remove();
			$.ajax ({
				url : "songs2.JSON"
			}).done(function(songs2){
				makeDOM2(songs2)
			}).fail (function(error){
				console.log("the following error occurred",error)
			});
		});
	});



});

