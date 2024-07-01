export class Modal {
  constructor(gamesData) {
    this.gamesData = gamesData;
  }

  openModal(gameId) {
    const game = this.gamesData.find((g) => g.id === gameId);
    const modal = document.getElementById("gameModal");
    const gameDetails = document.getElementById("gameDetails");

    gameDetails.innerHTML = `
        <div class="m-5">
          <h2 class="m-3">${game.title}</h2>
          <img src="${game.thumbnail}" alt="${game.title}" class="img-fluid"/>
        </div>
        <div>
          <p class="fs-3">Genre: ${game.genre}</p>
          <p class="fs-3">Platform: ${game.platform}</p>
          <p class="fs-3">Description: ${game.short_description}</p>
          <a href="${game.game_url}" class="btn btn-primary">Play Now</a>
        </div>
      `;

    modal.style.display = "block";
  }

  closeModal() {
    document.getElementById("gameModal").style.display = "none";
  }
}
