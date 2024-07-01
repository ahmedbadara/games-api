import { fetchGames } from "./api.js";
import { displayGames } from "./ui.js";

class GameApp {
  constructor() {
    this.gamesData = [];
  }

  async init() {
    try {
      this.gamesData = await fetchGames();
      this.displayAllGames();
      this.eventListeners();
    } catch (error) {
      console.error("Error initializing app:", error);
    }
  }

  displayAllGames() {
    displayGames(this.gamesData);
  }

  filterGames(category) {
    const filteredGames = gamesData.filter(
      (game) => game.genre.toLowerCase() === category.toLowerCase()
    );
    displayGames(filteredGames);
  }
  eventListeners() {
    const categoryNav = document.getElementById("categoryNav");
    categoryNav.addEventListener("click", (event) => {
      console.log(event.target);
      if (event.target === "li" && "a") {
        event.preventDefault();
        const category = event.target.getAttribute("data-category");
        this.filterGames(category);
      }
    });
  }
}

export default GameApp;
