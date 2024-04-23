// Question_40
/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/

// Define the function make_album
function make_album(artist: string, album_title: string, track?: number) {
    const album : {artist: string, album_title: string, track?: number} = {
        artist: artist,
        album_title: album_title,
    
    };
    
    // If tracks parameter is provided, add it to the album object
    if (track !== undefined) {
        album.track = track;
    }

    // Return the album object
    return album;
        
    };
    
// function call to create an album without specifying track
const album1 = make_album("Asim Azhar", "Noor");
console.log(album1);
console.log("----------------------------");

// function call to create an album with specifying track
const album2 = make_album("Arijit Singh", "Let It Be", 10);
console.log(album2);
console.log("----------------------------");

// function call to create an album with specifying track
const album3 = make_album("Atif Aslam", "Ab To Adat Si HE Mujhko", 8);
console.log(album3);

