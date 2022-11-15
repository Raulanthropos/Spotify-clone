const inputField = document.querySelector(".form-control");
const searchBtn = document.getElementById("search-btn");

window.onload = () => {
    const options = {
      method: "GET"
    };
  
    const baseUrl = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

const searchResult = async () => {
    let artistId = inputField.value;
    const response = await fetch(baseUrl + artistId, options);
    const artist = await response.json();
  const artistName = artist.name;
  const artistPicture = artist.picture_xl;
  const tracklist = artist.tracklist;
  console.log(artistName, artistPicture, tracklist);

    // console.log(artist);
}

    searchBtn.addEventListener('click', searchResult);
  };