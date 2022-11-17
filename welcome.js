// Fetching albums (first cards)
async function getAlbums() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`,
    options
  );

  const listOfSearch = await response.json();
  return listOfSearch;
}
// Fetching songs (second cards)
async function getSongs() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica`,
    options
  );

  const listOfSongs = await response.json();
  return listOfSongs;
}
// Fetching artists (third cards)

async function getArtist() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
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
let topsidecards = document.querySelector("#topsidecards");
let firstRow = document.querySelector("#firstAlbumRow");
let secondRow = document.querySelector("#secondAlbumRow");

// Filling first card rows (horizontal ones)
// Card row with albums to redirect to album page.
const fillPageAlbums = function (listOfSearch) {
  topsidecards.innerHTML = "";
  for (i = 0; i < 10; i++) {
    topsidecards.innerHTML += `<a href="albums.html?q=${listOfSearch.data[i].album.id}>"<div class="sidecards col-2">
<img
  class="col-4"
  src="${listOfSearch.data[i].album.cover_medium}"
  alt=""
/>
<p class="col-8 sidetext">${listOfSearch.data[i].album.title}</p>
</div></a>`;
  }
};
// Filling second card rows - normal card with i < 8 so doesnt create more than that ammount of cards.
// Tell me if we should change them to albums or smthg
// Card row with songs
const fillPageSongs = function (listOfSongs) {
  firstRow.innerHTML = "";
  for (i = 0; i < 8; i++) {
    firstRow.innerHTML += `<a href="artists.html?q=${listOfSongs.data[i].artist.id}>"<div class="albumCard">
        <img
          class="col-11"
          src="${listOfSongs.data[i].album.cover_medium}"
          alt=""
        />
        <div class="albumText">
          <p>${listOfSongs.data[i].artist.name}</p>
          <p>${listOfSongs.data[i].title}</p>
        </div>
      </div></a>`;
  }
};
// Filling third card rows
// Card row with Artists to go to artist page
const fillPageArtists = function (listOfArtists) {
  secondRow.innerHTML = "";
  for (i = 0; i < 8; i++) {
    secondRow.innerHTML += `<a href="albums.html=q?${listOfArtists.data[i].album.id}>"<div class="albumCard">
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
function hideLoader() {
  let loader = document.getElementById("loading");
  loader.classList.add("hide");
}

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
  buttChange.innerHTML += `<i onclick="buttonChange2()" class="bi bi-pause-fill" id="pause-button"></i>`;
};
const buttonChange2 = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="buttonChange()" class="bi bi-play-fill" id="pause-button"></i>`;
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
