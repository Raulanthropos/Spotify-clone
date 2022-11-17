// Searching for params albumId
const params = new URLSearchParams(window.location.search);
const artistId = params.get("artistId");
console.log(artistId);

const playSong = (obj) => {
  track = JSON.parse(decodeURIComponent(obj));
  console.log(track);
  // PlayerInfos
  const playerSongImage = document.querySelector(".playerSongImage");
  playerSongImage.src = `${track.album.cover_xl}`;
  const playerSongTitle = document.querySelector(".playerSongTitle");
  playerSongTitle.innerText = `${track.title}`;
  const playerSongArtist = document.querySelector(".playerSongArtist");
  playerSongArtist.innerText = `${track.artist.name}`;
  // Duration
  const timeLeft = document.querySelector(".timeLeft");
  let minutes = parseInt(track.duration / 60);
  let modulaSeconds = track.duration % 60;
  let secondsString = "0" + modulaSeconds;
  let seconds = secondsString.slice(-2);
  timeLeft.innerText = `${minutes}:${seconds}`;
};

const inputField = document.querySelector(".form-control");
const searchBtn = document.getElementById("search-btn");
let bandPic = document.querySelectorAll(".band-pic");
let trackTitle = document.querySelectorAll(".track-title");
let trackRank = document.querySelectorAll(".rank");
let trackDuration = document.querySelectorAll(".duration");
let mainImage = document.getElementById("main-image");
let monthlyListeners = document.getElementById("monthly-listeners");
let headerInput = document.querySelector("h1");
let currentTrack = document.querySelector(".current-track");
let currentTrackTitle = document.querySelector(".current-track-title");
let playSongBtn = document.querySelectorAll(".play-song");

const theTrackList = async (tracklist) => {
  const newFetch = await fetch(tracklist);
  const fetchedTrackList = await newFetch.json();
  arrayOfFetchedTrackList = fetchedTrackList.data;
  for (let i = 0; i < arrayOfFetchedTrackList.length; i++) {
    const minutes = parseInt(arrayOfFetchedTrackList[i].duration / 60);
    let seconds = parseInt(arrayOfFetchedTrackList[i].duration % 60);
    if (seconds < 10) {
      seconds = "0" + seconds; //For number of seconds <10, this ensures the seconds will be displayed correctly, with the number 0 assigned in the front, right after the colon.
      console.log(seconds);
    }
    const rank = arrayOfFetchedTrackList[i].rank;
    const duration = minutes + ":" + seconds;
    trackTitle[
      i
    ].innerHTML = `<a class="links" onclick="playSong('${encodeURIComponent(
      JSON.stringify(arrayOfFetchedTrackList[i])
    )}')" class="links">${arrayOfFetchedTrackList[i].title}</a>`;
    trackRank[i].innerText = rank.toLocaleString("en-us");
    monthlyListeners.innerText =
      rank.toLocaleString("en-us") + " monthly listeners"; //This function ensures that, if the number has more than 3 digits, every 3 digits will be separated by a comma.
    trackDuration[i].innerText = duration;
    currentTrackTitle.innerText = trackTitle[0].innerText;
  }
};

window.onload = async () => {
  const options = {
    method: "GET",
  };

  const baseUrl = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
  const response = await fetch(baseUrl + artistId, options);
  const artist = await response.json();
  const artistName = artist.name;
  const artistPicture = artist.picture_small;
  const tracklist = artist.tracklist;
  for (bpic of bandPic) {
    bpic.src = artistPicture;
  }
  currentTrack.src = artistPicture;
  headerInput.innerText = artistName;
  mainImage.src = artist.picture_xl;
  theTrackList(tracklist);
};

// Button changing

let buttChange = document.querySelector("#change-button");

const colorChange = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="colorChange2()" class="bi bi-pause-circle-fill col-2 mr-4" id="pause-button"></i>`;
};
colorChange2 = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="colorChange()" class="bi bi-play-circle-fill col-2 mr-4" id="pause-button"></i>`;
};
