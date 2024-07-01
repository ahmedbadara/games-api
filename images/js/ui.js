export function displayGames(games) {
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
