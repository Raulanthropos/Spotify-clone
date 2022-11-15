/* window.onload = async () => {
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
*/
const horizontalCard = async () => {
  let Hcard = document.querySelector(".con");
  Hcard.innerHTML = "";
  Hcard.innerHTML += `<div class="gridofcards d-flex justify-content-between">
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
};
const horizontalCard2 = async () => {
  let Hcard = document.querySelector(".cont");
  Hcard.innerHTML = "";
  Hcard.innerHTML += `<div class="gridofcards d-flex justify-content-between mt-5">
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="everycard">
    <div class="background-card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">AC/DC Playlist</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
};
const normalCard = async () => {
  let card = document.querySelector(".conta");
  card.innerHTML = "";

  card.innerHTML += `<div class="gridofcards d-flex justify-content-between">
  <div class="card mb-5" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/2/25/YellowcardLightsandSounds.jpg"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Yellowcard Mix</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/Spotify-DiscoverThis-Final.jpg"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-truncate">Discover Something New</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://www.billboard.com/wp-content/uploads/2022/03/35.-Metallica-%E2%80%98Master-of-Puppets-1986-album-art-billboard-1240.jpg?w=600"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Metallica</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://media.pitchfork.com/photos/5bcdf9b8a8f1ec1406cb9892/1:1/w_600/Queen_Bohemian%20Rhapsody%20OST.jpg"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-truncate">Bohemian Rhapsody</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/2/25/YellowcardLightsandSounds.jpg"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Yellowcard Mix</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"
      class="card-img-top pt-3 pl-3 pr-3"
      id="rounded"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Eminem</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://i.scdn.co/image/ab67706f0000000387bff188c40608c48b82068f"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">This is Drake</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
</div>`;
};

const normalCard2 = async () => {
  let card = document.querySelector(".contai");
  card.innerHTML = "";
  card.innerHTML += `<div class="gridofcards d-flex justify-content-between">
  <div class="card mb-5" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/2/25/YellowcardLightsandSounds.jpg"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Yellowcard Mix</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/Spotify-DiscoverThis-Final.jpg"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-truncate">Discover Something New</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://www.billboard.com/wp-content/uploads/2022/03/35.-Metallica-%E2%80%98Master-of-Puppets-1986-album-art-billboard-1240.jpg?w=600"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Metallica</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://media.pitchfork.com/photos/5bcdf9b8a8f1ec1406cb9892/1:1/w_600/Queen_Bohemian%20Rhapsody%20OST.jpg"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-truncate">Bohemian Rhapsody</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/2/25/YellowcardLightsandSounds.jpg"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Yellowcard Mix</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"
      class="card-img-top pt-3 pl-3 pr-3"
      id="rounded"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Eminem</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
  <div class="card" id="darker" style="width: 20rem; height: 28rem">
    <img
      src="https://i.scdn.co/image/ab67706f0000000387bff188c40608c48b82068f"
      class="card-img-top pt-3 pl-3 pr-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">This is Drake</h5>
      <p class="card-text text-truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corrupti porro. Fugiat corrupti aut ab adipisci temporibus
        molestias deserunt. Tenetur eaque quaerat iste aspernatur quo
        harum incidunt inventore at sint!
      </p>
    </div>
  </div>
</div>`;
};

window.onload = async () => {
  horizontalCard();
  horizontalCard2();
  normalCard();
  normalCard2();
};
