
import { GameService } from "GameService.js";
import { Display } from "Display.js";
import { Filter } from "Filter.js";
import { Modal } from "Modal.js";

const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4e982e4707msh5bb5d0cdc8ed986p11e22bjsn63ed5ee2040a",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const gameService = new GameService(url, options);
const display = new Display();
let modal;

document.addEventListener("DOMContentLoaded", async () => {
  const gamesData = await gameService.fetchGames();
  display.displayGames(gamesData);
  modal = new Modal(gamesData);

  document.getElementById("categoryNav").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const category = event.target.getAttribute("data-category");
      const filter = new Filter(gamesData);
      const filteredGames = filter.filterGames(category);
      display.displayGames(filteredGames);
    }
  });

  document.getElementById("rowData").addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (card) {
      const gameId = parseInt(card.getAttribute("data-game-id"), 10);
      modal.openModal(gameId);
    }
  });

  document.querySelector(".close").addEventListener("click", () => {
    modal.closeModal();
  });

  window.addEventListener("click", (event) => {
    const modalElement = document.getElementById("gameModal");
    if (event.target === modalElement) {
      modal.closeModal();
    }
  });
});
