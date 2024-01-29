const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');
const ouveCard = document.getElementsByClassName('card1');


function requestApi (searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    const artistGenere = document.getElementById('artist-categorie');

    result.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
        artistGenere.innerText = element.genre;
    });

    resultsArtist.classList.remove('hidden');
}



searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultsArtist.classList.add('hidden');
        return;
    }
    requestApi(searchTerm);
});
