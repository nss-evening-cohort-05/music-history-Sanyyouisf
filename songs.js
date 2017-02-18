/*Albums array */
var drakeAlbum = [
"take care" , 
"Nothing Was The Same",

]

var drakeAlbum1 = {
     album: "take care",
    Artist:  "drake",
    "Song name":  "Over My Dead Body",
}

var drakeAlbum2 = {
     album: "Over My Dead Body",
    Artist:  "drake",
    "Song name":  "Over My Dead Body",
}


var drakeTakeCareSongs = [
"Over My Dead Body" ,
"Shot For Me" ,
"Headlines"
]

var songs = [

];

//Each student must add one song to the beginning   
songs[songs.length] = "Cheap Thrills by Sia on the album This is Acting";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
//Each student must add one song to the end of the array.
songs[songs.length] = "Deja Vu by Mike Posner on the album 31 Minutes to Takeoff";

// var songsArray = ["mySong1","mySong2","mySong3","mySong4"];


//Loop over the array and remove any words or characters that obviously don't belong.
//Students must find and replace the > character in each item with a - character.

for( var i=0  ; i<songs.length  ; i++  ) {
	songs[i] = songs[i].replace(" >" , " - ");
	songs[i] = songs[i].replace("*" , '');
	songs[i] = songs[i].replace("@" , '');
	songs[i] = songs[i].replace(" & " ,'');
	songs[i] = songs[i].replace("!" , '');
	songs[i] = songs[i].replace("(" , '');
    
    //Must add each string to the DOM in index.html in the main content area.
	document.getElementById("mySong" + i ).innerHTML = '<li>' + songs[i] + '</li>' ;
	
}

	



