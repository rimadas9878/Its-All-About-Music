//https://rapidapi.com/theaudiodb/api/theaudiodb/
//Used "Return all Album details from artist name"



// Adding albums to the page and on click viewing the details of the Album
var musicartistURL = 'https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk';

var options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f56d2df827mshde0e1640c3c665cp1335dcjsn4bbc4890f265',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
};

var displayDetailsContainer = document.getElementById('albumDetailsDisplayid')


function getAlbum1Details(event) {
    event.preventDefault();
    albumDetailsDisplay();


    var dataid = event.target.dataset.id;
    console.log(dataid);

    fetch(musicartistURL, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            console.log(data.album);
            const AlbumName = data.album[dataid].strAlbum;
            const AlbumYear = data.album[dataid].intYearReleased;
            const Description = data.album[dataid].strDescriptionEN;

            document.getElementById('albumName').innerText = AlbumName;
            document.getElementById('yearReleased').innerText = AlbumYear;
            document.getElementById('albumDescriptionid').innerText = Description;

            console.log(AlbumName, AlbumYear, Description);

            if (!search.includes(AlbumName)) {
                search.push(AlbumName);
                localStorage.searchItem = JSON.stringify(search);
            }
        })
}

function albumDetailsDisplay() {
    displayDetailsContainer.classList.remove('hide');

}
function displayAlbum1Details() {

    var getAlbumDetails = document.getElementById('daftPunkContent');
    console.log(getAlbumDetails);
    getAlbumDetails.addEventListener('click', getAlbum1Details);
}

displayAlbum1Details();


//LocalStorage
function searchItem() {
    var searchValue = document.getElementById('searchTextbox').value
    localStorage.setItem('searchValue', searchValue);

    var searchHistory = localStorage.getItem('searchValue');

    document.getElementById('itemDisplayedHere').innerText = searchHistory;
}

var search = JSON.parse(localStorage.getItem('searchItem')) || []

var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchItem);



