export class GameService {
  constructor(url, options) {
    this.url = url;
    this.options = options;
    this.gamesData = [];
  }

  async fetchGames() {
    try {
      const response = await fetch(this.url, this.options);
      const result = await response.json();
      this.gamesData = result;
      document.getElementById("loading").classList.replace("d-flex", "d-none");
      return this.gamesData;
    } catch (error) {
      console.error("Error fetching games data:", error);
    } finally {
    }
  }
}
