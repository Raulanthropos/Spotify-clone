// Searching for params albumId
const params = new URLSearchParams(window.location.search);
const albumId = params.get("albumId");
console.log(albumId);
// Deleting Green painting from targeted Track
function deleteTargetedElementsClass(targetedElements) {
  for (const element of targetedElements) {
    element.classList.remove("targetedTrack");
  }
  // Display None Sound Icon
  let soundIconBi = document.querySelectorAll("i.bi.bi-bar-chart-fill.d-flex");
  console.log("soundIconBi", soundIconBi);
  if (soundIconBi.length > 0) {
    for (const elementBi of soundIconBi) {
      elementBi.classList.remove("d-flex");
      elementBi.classList.add("d-none");
    }
  }
  // Targetting Tracknumber to add padding top
  let trackNumberNoPadding = document.querySelectorAll(
    "th.thMinWidth.text-center:not(.pt-4)"
  );
  if (trackNumberNoPadding.length > 0) {
    for (const elementTh of trackNumberNoPadding) {
      elementTh.classList.add("pt-4");
    }
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
  let targetedElements = document.querySelectorAll(".targetedTrack");

  deleteTargetedElementsClass(targetedElements);

  event.target.parentElement.parentElement.parentElement.classList.add(
    "targetedTrack"
  );
  event.target.parentElement.parentElement.firstElementChild.nextElementSibling.classList.add(
    "targetedTrack"
  );

  // Targetting Music Icon to remove d-none
  event.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.classList.remove(
    "d-none"
  );
  event.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.classList.add(
    "d-flex"
  );
  // Targetting Tracknumber to remove padding top
  event.target.parentElement.parentElement.parentElement.firstElementChild.classList.remove(
    "pt-4"
  );

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

async function getAlbum() {
  const options = {
    method: "GET",
  };

  const baseUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/";
  const response = await fetch(baseUrl + albumId, options);

  const album = await response.json();
  console.log(album);

  const artistName = album.artist.name;
  const artistPicture = album.artist.picture_xl;
  const albumName = album.title;
  const recordType = album.record_type;
  const coverXl = album.cover_xl;
  const releaseYear = album.release_date.slice(0, 4);
  const quantityTracks = album.nb_tracks;
  const hours = parseInt((album.duration * 0.016666666666666) / 60);
  const minutes = parseInt((album.duration * 0.016666666666666) % 60);
  const tracks = album.tracks.data;
  console.log(tracks);

  //   Changing properties based on the album ID

  let albumCover = document.querySelector(".albumCover");
  albumCover.src = `${coverXl}`;
  let type = document.querySelector(".recordType");
  type.innerText = `${recordType}`;
  let albumTitle = document.querySelector(".albumTitle");
  albumTitle.innerText = `${albumName}`;
  let artist = document.querySelector(".artist");
  artist.innerHTML = `<a href="artist.html?artistId=${album.artist.id}" class="links">${artistName}</a>`;
  let releaseYearDiv = document.querySelector(".releaseYear");
  releaseYearDiv.innerText = `${releaseYear}`;
  let quantityDuration = document.querySelector(".quantityDuration");
  quantityDuration.innerText = `${quantityTracks} songs, ${hours} hr ${minutes} min`;
  let artistPictureImg = document.querySelector(".artistImg");
  artistPictureImg.src = artistPicture;

  //   Displaying Tracks inside the table
  let trackTable = document.getElementById("trackTable");
  trackTable.innerHTML = "";

  for (let i = 0; i < tracks.length; i++) {
    let minutes = parseInt(tracks[i].duration / 60);
    let modulaSeconds = tracks[i].duration % 60;
    let secondsString = "0" + modulaSeconds;
    let seconds = secondsString.slice(-2);

    trackTable.innerHTML += `<tr>
                                <th class="thMinWidth pt-4 text-center" scope="row">${[
                                  i + 1,
                                ]} <i class="bi bi-bar-chart-fill d-none"></i></th>
                                    <td class="d-flex flex-column">
                                        <div class="tableTitle"><a onclick="playSong('${encodeURIComponent(
                                          JSON.stringify(tracks[i])
                                        )}', event)" class="links">${
      tracks[i].title
    }</a></div>
                                        <div class="tableArtist"><a href="artist.html?artistId=${
                                          tracks[i].artist.id
                                        }" class="links">${
      tracks[i].artist.name
    }</a></div>
                                </td>
                            <td class="text-right pt-4 pr-5">${minutes}:${seconds}</td>
                        </tr>`;
  }
}
getAlbum();

// Icons changing on click

let buttChange = document.querySelector("#change-button");

const buttonChange = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="buttonChange2(), document.getElementById('sound1').pause()" class="bi bi-pause-fill" id="pause-button"></i>`;
};
const buttonChange2 = () => {
  buttChange.innerHTML = "";
  buttChange.innerHTML += `<i onclick="buttonChange(), document.getElementById('sound1').play()" class="bi bi-play-fill" id="pause-button"></i>`;
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

let heart2 = document.querySelector("#change-heart2");

const heartChange3 = () => {
  heart2.innerHTML = "";
  heart2.innerHTML += `<i onclick="heartChange4()" class="bi bi-heart-fill"></i>`;
};
const heartChange4 = () => {
  heart2.innerHTML = "";
  heart2.innerHTML += `<i onclick="heartChange3()" class="bi bi-heart"></i>`;
};

let buttChange2 = document.querySelector("#change-button2");

const buttonChange3 = () => {
  buttChange2.innerHTML = "";
  buttChange2.innerHTML += `<i onclick="buttonChange4(),  document.getElementById('sound1').pause()" class="bi bi-pause-fill"></i>`;
  buttonChange();
};
const buttonChange4 = () => {
  buttChange2.innerHTML = "";
  buttChange2.innerHTML += `<i onclick="buttonChange3(),  document.getElementById('sound1').play()" class="bi bi-play-fill"></i>`;
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
