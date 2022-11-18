// Searching for params albumId
const params = new URLSearchParams(window.location.search);
const artistId = params.get("artistId");
console.log(artistId);

// Deleting Green painting from targeted Track
function deleteTargetedElementsClass(targetedElements) {
  for (const element of targetedElements) {
    element.classList.remove("targetedTrack");
  }
}
// Creating music inside player
const createMusic = (track) => {
  let songDiv = document.querySelector("#music");
  let audioOriginal = document.querySelector("audio");

  songDiv.removeChild(audioOriginal);

  console.log(track.preview);

  let audio = document.createElement("audio");
  audio.setAttribute("id", "sound1");
  audio.setAttribute("preload", "auto");
  audio.src = `${track.preview}`;

  songDiv.appendChild(audio);
  document.getElementById("sound1").play();
  buttonChange3();
  buttonChange();
};

const playSong = (obj, event) => {
  document.getElementById("sound1").pause();
  buttonChange4();
  buttonChange2();
  let targetedElements = document.getElementsByClassName("targetedTrack");

  deleteTargetedElementsClass(targetedElements);

  event.target.parentElement.parentElement.classList.add("targetedTrack");
  // event.target.parentElement.parentElement.firstElementChild.nextElementSibling.classList.add(
  //   "targetedTrack"
  // );
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
  createMusic(track);
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
  let artistImages = document.querySelectorAll(".band-pic");
  for (let i = 0; i < arrayOfFetchedTrackList.length; i++) {
    artistImages[i].src = `${arrayOfFetchedTrackList[i].album.cover_xl}`;
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
    )}', event)" class="links">${arrayOfFetchedTrackList[i].title}</a>`;
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
  // for (bpic of bandPic) {
  //   bpic.src = artistPicture;
  // }
  currentTrack.src = artistPicture;
  headerInput.innerText = artistName;
  mainImage.src = artist.picture_xl;
  theTrackList(tracklist);
};

// Icons changing on click

let buttChange = document.querySelector("#change-button");

const buttonChange = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="buttonChange2(), document.getElementById('sound1').pause()" class="bi bi-pause-circle-fill col-2 mr-4" id="pause-button"></i>`;
};
const buttonChange2 = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="buttonChange(), document.getElementById('sound1').play()" class="bi bi-play-circle-fill col-2 mr-4" id="pause-button"></i>`;
};

let heart = document.querySelector("#change-heart");

const heartChange = () => {
  heart.innerHTML = "";
  heart.innerHTML += `<i onclick="heartChange2()" class="bi bi-heart-fill"></i>`;
};
const heartChange2 = () => {
  heart.innerHTML = "";
  heart.innerHTML += `<i onclick="heartChange()" class="bi bi-heart"></i>`;
};
let buttChange2 = document.querySelector("#change-button2");

const buttonChange3 = () => {
  buttChange2.innerHTML = "";
  buttChange2.innerHTML += `<i onclick="buttonChange4(), document.getElementById('sound1').pause()" class="bi bi-pause-fill"></i>`;
  buttonChange();
};
const buttonChange4 = () => {
  buttChange2.innerHTML = "";
  buttChange2.innerHTML += `<i onclick="buttonChange3(), document.getElementById('sound1').play()" class="bi bi-play-fill"></i>`;
  buttonChange2();
};

let volume = document.querySelector("#change-volume");

const changeVolume = () => {
  volume.innerHTML = "";
  volume.innerHTML += `<i onclick="changeVolume2(), document.getElementById('sound1').volume=1.0" class="bi bi-volume-mute"></i>`;
};
const changeVolume2 = () => {
  volume.innerHTML = "";
  volume.innerHTML += `<i onclick="changeVolume(), document.getElementById('sound1').volume=0" class="bi bi-volume-up"></i>`;
};

let follow = document.querySelector("#following");

const addColor = () => {
  follow.innerHTML = "";
  follow.innerHTML += `<p
  class="d-inline border mr-4 bg-success"
  style="margin-block: auto"
  id="follow"
  onclick="removeColor()"
>
  Follow
</p>`;
};
const removeColor = () => {
  follow.innerHTML = "";
  follow.innerHTML += `<p
  class="d-inline border mr-4"
  style="margin-block: auto"
  id="follow"
  onclick="addColor()"
>
  Follow
</p>`;
};
