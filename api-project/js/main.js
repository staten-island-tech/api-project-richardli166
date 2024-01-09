import "../css/style.css";
import {DOMSelectors} from './domselectors.js';

const leaderboard = `https://api.chess.com/pub/leaderboards`;

    async function getData(leaderboard) {
        try {
            const response = await fetch(leaderboard);
            if (response.status != 200) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            data.daily.forEach((player) => 
            DOMSelectors.display.insertAdjacentHTML("beforeend",
                `<div class="display-card">
                <h2 class="display-username">Username: ${player.username}</h2>
                <h2 class="display-score">Score: ${player.score}</h2>
                <h2 class="display-rank">Rank: ${player.rank}</h2>
                </div>`
                )
            )
            console.log(data);
        } catch (error) {
            console.log("error");
        }
    }
    getData(leaderboard);

const URL = "https://api.chess.com/pub/player/";

DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
  DOMSelectors.display.innerHTML = "";
  DOMSelectors.profile.innerHTML = "";
  const nURL = URL + DOMSelectors.search.value;

  async function getName(nURL) {
    try {
      const response = await fetch(nURL);
      if (response.status != 200) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      DOMSelectors.profile.insertAdjacentHTML("beforeend",
        `<div class="profile-card">
          <h2 class="profile-username">Username: ${data.username}</h2>
          <h2 class="profile-country">Country: ${data.location}</h2>
          <h2>Avatar:</h2>
          <img src= "${data.avatar}" alt="${data.username}'s avatar" class="profile-avatar">
        </div>`
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  getName(nURL);
});








/* import { apiDataArray } from './array.js';
import { insertData1, insertData2 } from './inserts.js';



async function fetchData(endpoint) {
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error");
    }
}

document.getElementById('btn1').addEventListener('click', async () => {
    const endpoint = 'https://api.chess.com/pub/leaderboards';
    const data = await fetchData(endpoint);
    
    if (data) {
        apiDataArray.push(data);
        insertData1(data);
    }
});

document.getElementById('btn2').addEventListener('click', async () => {
    const endpoint = 'https://api.chess.com/pub/puzzle';
    const data = await fetchData(endpoint);
    
    if (data) {
        apiDataArray.push(data);
        insertData2(data);
    }
});
 */
//go get basketball data
//give huge delay make user wait be a trash website 
//show data
/* 
function greet(name){
const greetPromise = new Promise(function(resolve, reject){
    resolve(`Hello  ${name}`);
})
return greetPromise;
}
const Aaron = greet("Aaron")
console.log(Aaron)
//handle the promise
Aaron.then((result) => {
    console.log(result);
}); */
//REST API aplication program interface, rest endpoints

/*
const URL = `https://api.chess.com/pub/leaderboards`;


async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
    /*    document.querySelector(".cards").textContent = data.content;
        console.log(data.content); */
/*
        console.log(data);

    } catch (error) {
        console.log("error");
        document.querySelector(".cards").textContent = "error";
    }
}

getData(URL);
*/







/* 
const URL = `https://api.quoteable.io/random`;

async function getData(URL){
    try{
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        console.log(data);
        document.querySelector("h1").textCotent = data.content;
        document.querySelector("h2").textCotent = data.author;
    } catch (error) {
        document.querySelector("h1").textContent = error;
    }
}
getData(URL);
*/