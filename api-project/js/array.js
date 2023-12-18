const endpointlearderboards = `https://api.chess.com/pub/leaderboards`;
const endpointplayer = 'https://api.chess.com/pub/player/'
async function getData(endpointlearderboards) {
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error");
        document.querySelector(".cards").textContent = "error";
    }
}
getData(endpointlearderboards);

export {getData};



//https://api.chess.com/pub/player/{username}/stats
