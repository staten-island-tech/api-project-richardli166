/* import {searched} from ".insert" */

/* const endpointlearderboards = `https://api.chess.com/pub/leaderboards`;
let endpointplayer = 'https://api.chess.com/pub/player/'
async function getleaderboard(endpointlearderboards) {
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
getleaderboard(endpointplayer); */
 

export let apiDataArray = [];


/* async function getplayerdata(endpointplayer) {
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
getplayerdata(endpointlearderboards);

/*export {getleaderboard}; */
/*
export {getplayerdata};
 */







//https://api.chess.com/pub/player/{username}
