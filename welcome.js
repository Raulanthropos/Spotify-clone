// Fetching albums (first cards)
async function getAlbums() {
  const options = {
    method: "GET",
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=bushido`,
    options
  );

  const listOfSearch = await response.json();
  return listOfSearch;
}
// Fetching songs (second cards)
async function getSongs() {
  const options = {
    method: "GET",
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=kool-savas`,
    options
  );

  const listOfSongs = await response.json();
  return listOfSongs;
}
// Fetching artists (third cards)

async function getArtist() {
  const options = {
    method: "GET",
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=rock`,
    options
  );

  const listOfArtists = await response.json();
  return listOfArtists;
}
// Checking if everything fetches and filling cards on page load
// Should probably move this to the bottom later
window.onload = async () => {
  const listOfSearch = await getAlbums();
  const listOfSongs = await getSongs();
  const listOfArtists = await getArtist();
  console.log(listOfArtists);
  console.log(listOfSearch);
  console.log(listOfSongs);
  fillPageAlbums(listOfSearch);
  fillPageSongs(listOfSongs);
  fillPageArtists(listOfArtists);
  hideLoader();
};
// Getting places for cards
let cardstart = document.querySelector("#cardstart");
let firstRow = document.querySelector("#firstAlbumRow");
let secondRow = document.querySelector("#secondAlbumRow");

// Filling first card rows (horizontal ones)
// Card row with albums to redirect to album page.
const fillPageAlbums = function (listOfSearch) {
  cardstart.innerHTML = `<h1 class="col-12 mb-4">Good Morning</h1>`;
  for (let i = 0; i < 10; i++) {
    console.log(listOfSearch.data[i].album.id);
    cardstart.innerHTML += `<div class="col-6 col-md-6 col-lg-6 col-xl-2">
                              <a href="album.html?albumId=${listOfSearch.data[i].album.id}">
                                <div class="sidecards col-2">
                                <img
                                  class="col-4"
                                  src="${listOfSearch.data[i].album.cover_medium}"
                                  alt="Album Cover"
                                />
                                <p class="col-8 sidetext">${listOfSearch.data[i].album.title}</p></div>
                                </a></div>`;
  }
};
// Filling second card rows - normal card with i < 8 so doesnt create more than that ammount of cards.
// Tell me if we should change them to albums or smthg
// Card row with songs
const fillPageSongs = function (listOfSongs) {
  firstRow.innerHTML = "";
  console.log("listOfSongs", listOfSongs);
  for (i = 0; i < 8; i++) {
    firstRow.innerHTML += `<div class="albumCard">
    <a href="album.html?albumId=${listOfSongs.data[i].album.id}">
        <img
          class="col-11"
          src="${listOfSongs.data[i].album.cover_medium}"
          alt=""
        /></a>
        <div class="albumText">
        <a href="artist.html?artistId=${listOfSongs.data[i].artist.id}">
          <p>${listOfSongs.data[i].artist.name}</p></a>
          <a href="album.html?albumId=${listOfSongs.data[i].album.id}"><p>${listOfSongs.data[i].title}</p></a>
        </div>
      </div>`;
  }
};
// Filling third card rows
// Card row with Artists to go to artist page
const fillPageArtists = function (listOfArtists) {
  console.log("🚀listOfArtists", listOfArtists);

  secondRow.innerHTML = "";
  for (i = 0; i < 8; i++) {
    secondRow.innerHTML += `<a href="artist.html?artistId=${listOfArtists.data[i].artist.id}"><div class="albumCard">
          <img
            class="col-11"
            src="${listOfArtists.data[i].artist.picture}"
            alt=""
          />
          <div class="albumText">
            <p>${listOfArtists.data[i].artist.name}</p>
            </div>
        </div></a>`;
  }
};

// Hiding loader

function hideLoader() {
  let loader = document.getElementById("loading");
  loader.classList.add("hide");
}

// Icons changing on click

let heart = document.querySelector("#change-heart");

const heartChange = () => {
  heart.innerHTML = "";
  heart.innerHTML += `<i onclick="heartChange2()" class="bi bi-heart-fill"></i>`;
};
const heartChange2 = () => {
  heart.innerHTML = "";
  heart.innerHTML += `<i onclick="heartChange()" class="bi bi-heart"></i>`;
};
let buttChange = document.querySelector("#change-button");

const buttonChange = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="buttonChange2(), document.getElementById('sound1').pause() " class="bi bi-pause-fill" id="pause-button"></i>`;
};
const buttonChange2 = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="buttonChange(), document.getElementById('sound1').play()" class="bi bi-play-fill" id="pause-button"></i>`;
};

let volume = document.querySelector("#change-volume");

const changeVolume = () => {
  volume.innerHTML = "";
  volume.innerHTML += `<i onclick="changeVolume2()" class="bi bi-volume-mute"></i>`;
};
const changeVolume2 = () => {
  volume.innerHTML = "";
  volume.innerHTML += `<i onclick="changeVolume()" class="bi bi-volume-up"></i>`;
};

let song = document.querySelector("music");

const createMusic = () => {
  song.innerHTML += "";
  song.innerHTML += `<audio id='sound1' src="" preload="auto"></audio>`;
};
