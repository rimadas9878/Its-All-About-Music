const showAlbums = () => {
    let artist = document.getElementById('allSearchTextbox').value;
    let allArtistFetchedDetails = document.querySelector('.allArtistDetailsSection')

    var allMusicArtistURL = `https://theaudiodb.p.rapidapi.com/searchalbum.php?s=${artist}`;
    console.log(allMusicArtistURL);

    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f56d2df827mshde0e1640c3c665cp1335dcjsn4bbc4890f265',
            'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
        }
    };


    fetch(allMusicArtistURL, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getAlbumDetails = data;
            console.log('Data: ', data);
            allArtistFetchedDetails.innerHTML = `
                    
                      <section>
                          <p for="allArtistLabel" class="allArtistLabel" id="allArtistLabelId">${artist}</p>
                          <span id="h-divider"></span>
                      </section>

                      <section id="allAlbumContainer">`
                          data.album.forEach(album => {
                           allArtistFetchedDetails.innerHTML += `
                       <section class="allAlbumDetailsSection" data-title="${album.strAlbum}">
                             <a href="" id="allAlbumlinkId" class="allaAlbumLinkClass">
                             <img src="${album.strAlbumThumb}" alt="${album.strAlbum}" class="albumImage" data-id="0"></img>
                              </a>
                            <label for="allArtist">${album.strAlbum}</label>
                            <section>
                                <p for="albumLabel" class="albumLabel" id="allArtistAlbumlink"></p>
                            </section>
                       </section>
                       </section>`
            });

            allArtistFetchedDetails.innerHTML += '</section>'

        })
};


document.getElementById('allSearchBtn').addEventListener('click', showAlbums);






