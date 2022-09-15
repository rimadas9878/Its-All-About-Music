//https://rapidapi.com/theaudiodb/api/theaudiodb/
var searchLyrics = document.getElementById('artistDetailsSearchLyricsTextbox');
var searchLyricsBtn = document.getElementById('artistDetailsSearchBtn');
var musicartistURL = 'https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk';

//Used "Return all Album details from artist name"
var options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f56d2df827mshde0e1640c3c665cp1335dcjsn4bbc4890f265',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
};

var displayDetailsContainer = document.getElementById('albumDetailsDisplayid')

function albumDetailsDisplay(){
    displayDetailsContainer.classList.remove('hide');

}
function displayAlbum1Details(){ 
    
    document.addEventListener('click', getAlbum1Details)

}



function getAlbum1Details(event) {
    albumDetailsDisplay();
    event.preventDefault();

    var dataid = event.target.dataset.id;
    console.log(dataid);

    fetch(musicartistURL, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            const AlbumName = data.album[dataid].strAlbum;
            const AlbumYear = data.album[dataid].intYearReleased;
            const Description = data.album[dataid].strDescriptionEN;

            document.getElementById('albumName').innerText = AlbumName;
            document.getElementById('yearReleased').innerText = AlbumYear;
            document.getElementById('albumDescription').innerText = Description;


            console.log(AlbumName, AlbumYear, Description);

        })
}
// getAlbum1Details();


$(document).ready(function () {
    $('.artistDetails').on('click', '.daftPunkContent', function (ev) {
        $(this).toggleClass('animate');
        $('.LadyGagaContent').toggleClass('animate');
    }).on('click', '.LadyGagaContent', function (ev) {
        $(this).toggleClass('animate');
        $('.daftPunkContent').toggleClass('animate');
    });
});

displayAlbum1Details();