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

const searchInputValue = async (event) => {
  console.log(event.target.value);
  const searchFor = event.target.value;
  const options = {
    method: "GET",
  };

  const baseUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;
  const response = await fetch(baseUrl + searchFor, options);
  const output = await response.json();
  const tracks = output.data;
  console.log(tracks);
  if (tracks.length > 0) {
    //   Displaying Albums inside the table
    let albumTable = document.getElementById("albumTable");
    albumTable.innerHTML = "";

    for (let i = 0; i < tracks.length; i++) {
      let minutes = parseInt(tracks[i].duration / 60);
      let modulaSeconds = tracks[i].duration % 60;
      let secondsString = "0" + modulaSeconds;
      let seconds = secondsString.slice(-2);

      albumTable.innerHTML += `<tr>
                                <th class="thMinWidth" scope="row">${[
                                  i + 1,
                                ]}</th>
                                    <td class="d-flex flex-column">
                                      <div class="tableTitle">
                                        <a onclick="playSong('${encodeURIComponent(
                                          JSON.stringify(tracks[i])
                                        )}')" class="links">${
        tracks[i].title
      }</a>
                                      </div>
                                      <div class="tableArtist">
                                        <a href="artist.html?artistId=${
                                          tracks[i].artist.id
                                        }" class="links">${
        tracks[i].artist.name
      }</a>
                                      </div>
                                    </td>
                                    <td class="tableAlbum pl-5">
                                      <a href="album.html?albumId=${
                                        tracks[i].album.id
                                      }" class="links">${
        tracks[i].album.title
      }</a>
                                    </td>
                                    <td class="text-right pr-5">${minutes}:${seconds}
                                </tr>`;
    }
  } else {
    alert("No such Artist found");
  }
};
// const artistName = data.artist.name;
// const artistPicture = data.artist.picture_xl;
// const dataName = data.title;
// const recordType = data.record_type;
// const coverXl = data.cover_xl;
// const releaseYear = data.release_date.slice(0, 4);
// const quantityTracks = data.nb_tracks;
// const hours = parseInt((data.duration * 0.016666666666666) / 60);
// const minutes = parseInt((data.duration * 0.016666666666666) % 60);
// const tracks = data.tracks.data;

//   Changing properties based on the album ID

// let albumCover = document.querySelector(".albumCover");
// albumCover.src = `${coverXl}`;
// let type = document.querySelector(".recordType");
// type.innerText = `${recordType}`;
// let albumTitle = document.querySelector(".albumTitle");
// albumTitle.innerText = `${albumName}`;
// let artist = document.querySelector(".artist");
// artist.innerText = `${artistName}`;
// let releaseYearDiv = document.querySelector(".releaseYear");
// releaseYearDiv.innerText = `${releaseYear}`;
// let quantityDuration = document.querySelector(".quantityDuration");
// quantityDuration.innerText = `${quantityTracks} songs, ${hours} hr ${minutes} min`;
// let artistPictureImg = document.querySelector(".artistImg");
// artistPictureImg.src = artistPicture;

window.onload = () => {
  const inputField = document.querySelector(".searchBarInput");

  inputField.addEventListener("keyup", function (event) {
    if (event.which === 13) {
      searchInputValue(event);
    }
  });
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
