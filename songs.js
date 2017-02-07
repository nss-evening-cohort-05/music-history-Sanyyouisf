// /*Albums array */
// var drakeAlbum = [
// "take care" , 
// "Nothing Was The Same",

// ]

// var drakeAlbum1 = {
//      album: "take care",
//     Artist:  "drake",
//     "Song name":  "Over My Dead Body",
// }

// var drakeAlbum2 = {
//      album: "Over My Dead Body",
//     Artist:  "drake",
//     "Song name":  "Over My Dead Body",
// }


// var drakeTakeCareSongs = [
// "Over My Dead Body" ,
// "Shot For Me" ,
// "Headlines"
// ]

var songs = [

];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var i
for( i=0 ; i<songs.length ; i++) {
	var Songs = songs[i].innerHtml;
	songs[i] = songs[i].replace(" >" , " - ");
	songs[i] = songs[i].replace("*" , '');
	songs[i] = songs[i].replace("@" , '');
	songs[i] = songs[i].replace(" & " ,'');
	songs[i] = songs[i].replace("!" , '');
	songs[i] = songs[i].replace("(" , '');
}

	console.log (songs);




