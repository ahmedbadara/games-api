const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4e982e4707msh5bb5d0cdc8ed986p11e22bjsn63ed5ee2040a",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

let gamesData = [];

async function fetchGames() {
  document.getElementById("loading").style.display = "flex";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    gamesData = result;

    displayGames(gamesData);
    document.getElementById("loading").classList.add("d-none");
  } catch (error) {
    console.error("Error fetching games data:", error);
  }
}

function displayGames(games) {
  const row = document.getElementById("rowData");
  row.innerHTML = "";
  let cartoona = "";
  games.forEach((game) => {
    cartoona += `<div class="col-md-3">
            <div class="item">
                <div class="card bg-transparent" onclick="openModal(${game.id})">
                    <div class="card-img-top p-3">
                        <img src="${game.thumbnail}" alt="${game.title}" />
                    </div>
                    <div class="card-body">
                        <div class="game-title d-flex justify-content-between align-items-center">
                            <h3 class="fs-6 text-white">${game.title}</h3>
                            <h3 class="bg-primary rounded-2 fs-6 text-white p-1">free</h3>
                        </div>
                        <p class="text-secondary fs-6">${game.short_description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <h3 class="fs-6 text-white">${game.genre}</h3> 
                        <h3 class="fs-6 text-white">${game.platform}</h3>
                    </div>
                </div>
            </div>
        </div>`;
  });
  row.innerHTML = cartoona;
}

function filterGames(category) {
  const filteredGames = gamesData.filter(
    (game) => game.genre.toLowerCase() === category.toLowerCase()
  );
  displayGames(filteredGames);
}

function openModal(gameId) {
  const game = gamesData.find((g) => g.id === gameId);
  const modal = document.getElementById("gameModal");
  const gameDetails = document.getElementById("gameDetails");

  gameDetails.innerHTML = `
       <div class="m-5"><h2 class="m-3">${game.title}</h2>
  <img src="${game.thumbnail}" alt="${game.title}" class="img-fluid"/></div>
  <div ><p class="fs-3">Genre: ${game.genre}</p>
  <p class="fs-3">Platform: ${game.platform}</p>
  <p class="fs-3">Description:${game.short_descriptionn}</p>
  <a href="${game.game_url}"  class="btn btn-primary">Play Now</a></div>
    `;

  modal.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  fetchGames();

  document.getElementById("categoryNav").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const category = event.target.getAttribute("data-category");
      filterGames(category);
    }
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("gameModal").style.display = "none";
  });

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("gameModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
