export class Filter {
  constructor(gamesData) {
    this.gamesData = gamesData;
  }

  filterGames(category) {
    const filteredGames = this.gamesData.filter(
      (game) => game.genre.toLowerCase() === category.toLowerCase()
    );
    return filteredGames;
  }
}
