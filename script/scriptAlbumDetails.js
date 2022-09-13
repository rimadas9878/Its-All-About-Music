//https://rapidapi.com/theaudiodb/api/theaudiodb/
var searchLyrics = document.getElementById('artistDetailsSearchLyricsTextbox');
var searchLyricsBtn = document.getElementById('artistDetailsSearchBtn');
var musicartistURL = 'https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk';
var Homework = document.getElementById('HomeworkalbumImage');
var options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f56d2df827mshde0e1640c3c665cp1335dcjsn4bbc4890f265',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
};
function displayAlbum1Details(){
   
    document.addEventListener('click', getAlbum1Details)
    console.log(Homework);
}
//Used "Return all Album details from artist name"
// Artist Details Section
function getAlbum1Details(event) {
    event.preventDefault();
    console.log('hello');
    var dataid = event.target.dataset.id;
    console.log(dataid);

    fetch(musicartistURL, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const homeworkAlbumName = data.album[dataid].strAlbum;
            const homeworkAlbumYear = data.album[dataid].intYearReleased;
            const homeworkDescription = data.album[dataid].strDescriptionEN;

            document.getElementById('albumName1').innerText = homeworkAlbumName;
            document.getElementById('yearReleased1').innerText = homeworkAlbumYear;
            document.getElementById('albumDescription1').innerText = homeworkDescription;

            console.log(homeworkAlbumName, homeworkAlbumYear, homeworkDescription);

        })
}
// getAlbum1Details();
displayAlbum1Details();


function top10Songs() {

}

function userRatingOnAlbum() {

}

function userRatingOnTrack() {

}

