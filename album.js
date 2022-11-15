window.onload = async () => {
  const options = {
    method: "GET",
  };

  const baseUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/";
  const albumId = "75621062";
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

  //   Changing properties based on the album ID

  let albumCover = document.querySelector(".albumCover");
  albumCover.src = `${coverXl}`;
  let type = document.querySelector(".recordType");
  type.innerText = `${recordType}`;
  let albumTitle = document.querySelector(".albumTitle");
  albumTitle.innerText = `${albumName}`;
  let artist = document.querySelector(".artist");
  artist.innerText = `${artistName}`;
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
                        <th class="thMinWidth" scope="row">${[i + 1]}</th>
                            <td class="d-flex flex-column">
                                <div class="tableTitle">${tracks[i].title}</div>
                                <div class="tableArtist">${
                                  tracks[i].artist.name
                                }</div>
                                </td>
                            <td class="text-right pr-5">${minutes}:${seconds}</td>
                        </tr>`;
  }
};
