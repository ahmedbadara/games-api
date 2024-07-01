const apiUrl =
  "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
const apiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4e982e4707msh5bb5d0cdc8ed986p11e22bjsn63ed5ee2040a",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export async function fetchGames() {
  try {
    const response = await fetch(apiUrl, apiOptions);
    const data = await response.json(); 
    document.getElementById("loading").classList.replace("d-flex", "d-none");

    return data;
  } catch (error) {
    console.error("Error fetching games data:", error);
    throw error;
  }
}
