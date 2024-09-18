const COHORT = "2408-Alexis";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

// === State ===

const state = {
  artists: [],
};

/** Updates state with artists from API */
async function getArtists() {
  // TODO
  try {
    const response = await fetch (API_URL);
    const responseObj = await response.json();
    state.artists = responseObj.data;
  } catch (error) {
    console.error(error);
  }
}

/** Asks the API to create a new artist based on the given `artist` */
async function addArtist(artist) {
  // TODO
}

// === Render ===

/** Renders artists from state */
function renderArtists() {
  // TODO
  const artistList = document.querySelector("#artists");

  if (!state.artists.length) {
    artistList.innerHTML = "<li>No artists</li>";
    return;
  }
  
  
    const artistsInfo = state.artists.map((artist) => {
    const info = document.createElement("li");
    info.innerHTML = `
    <h2>${artist.name}</h2>
    <img src= "${artist.imageUrl}" alt="${artist.name}" />
    <p>${artist.description}</p>
    ;`
   return info;
  });
  artistList.replaceChildren(...artistsInfo);
}

/** Syncs state with the API and rerender */
async function render() {
  await getArtists();
  renderArtists();
}

// === Script ===

render();

// TODO: Add artist with form data when the form is submitted
