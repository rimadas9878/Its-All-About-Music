var musicVideoURL = 'https://theaudiodb.p.rapidapi.com/mvid.php?i=112024';
// function displayVideo1Details(){
//     document.addEventListener('click', musicVideo)
// }
function musicVideos() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f56d2df827mshde0e1640c3c665cp1335dcjsn4bbc4890f265',
            'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
        }
    };
    fetch(musicVideoURL, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            // // const { mvids } = data;
            // for (var i = 1; i < 24; i++) {
            //     const { strTrack } = data.mvids[i];
            //     document.getElementById('songLabel' + (i)).innerText = strTrack;
            //     // const {strMusicVid} = data.mvids[i];
            //     console.log(strTrack);
            // }
        })
    // .catch(err => console.error(err));
}