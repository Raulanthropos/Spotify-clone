const inputField = document.querySelector(".form-control");
const searchBtn = document.getElementById("search-btn");

window.onload = async () => {
    const options = {
      method: "GET"
    };
  
    const baseUrl = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
    let artistId = "411";
    const response = await fetch(baseUrl + artistId, options);
      const artist = await response.json();
  
    const artistName = artist.name;
    const artistPicture = artist.picture_xl;
    const tracklist = artist.tracklist;
    console.log(artistName, artistPicture, tracklist);

const searchResult = () => {
    artistId = inputField.value;
    console.log(artistId);
}

    searchBtn.addEventListener('click', searchResult);
  };