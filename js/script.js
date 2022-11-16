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

// const playSong = (event) => {
//   console.log(event);
//   // return fethcedData.preview;
// }

const theTrackList = async (tracklist) => {
  const newFetch = await fetch(tracklist);
  const fetchedTrackList = await newFetch.json();
  arrayOfFetchedTrackList = fetchedTrackList.data;
  for (let i=0; i<arrayOfFetchedTrackList.length; i++) {
  const minutes = parseInt((arrayOfFetchedTrackList[i].duration) / 60);
  let seconds = parseInt((arrayOfFetchedTrackList[i].duration) % 60);
  if (seconds <10) {
    seconds = "0" + seconds;
    console.log(seconds)
  }
  const rank = arrayOfFetchedTrackList[i].rank;
  const duration = minutes + ":" + seconds;
  trackTitle[i].innerText = arrayOfFetchedTrackList[i].title;
  trackRank[i].innerText = rank.toLocaleString("en-us");
  monthlyListeners.innerText = rank.toLocaleString("en-us") + " monthly listeners";
  trackDuration[i].innerText = duration;
  currentTrackTitle.innerText = trackTitle[0].innerText;
  let song = arrayOfFetchedTrackList[i].preview;
  // console.log(song);
    // playSongBtn.addEventListener('click', playSong(song));
  }
  console.log(arrayOfFetchedTrackList);
}

window.onload = async () => {
    const options = {
      method: "GET"
    };
  
    const baseUrl = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
    let artistId = "410";
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


  //