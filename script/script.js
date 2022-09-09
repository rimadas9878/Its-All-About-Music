var searchLyrics = document.getElementById('searchLyricsTextbox');
var searchLyricsBtn = document.getElementById('searchBtn');



//Used "Return all Album details from artist name"
function getArtistDetails(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f56d2df827mshde0e1640c3c665cp1335dcjsn4bbc4890f265',
            'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
        }
    };
    
    fetch('https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}

searchLyricsBtn.addEventListener('click', getArtistDetails);

function musicVideos(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f56d2df827mshde0e1640c3c665cp1335dcjsn4bbc4890f265',
            'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
        }
    };
    
    fetch('https://theaudiodb.p.rapidapi.com/mvid.php?i=112024', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function top10Songs(){
    
}

function userRatingOnAlbum(){

}

function userRatingOnTrack(){
    
}

