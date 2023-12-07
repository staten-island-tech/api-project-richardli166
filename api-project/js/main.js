
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


const URL = `https://cors-anywhere.herokuapp.com/https://ch.tetr.io/api/users/lists/league/all`;

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
/*         document.querySelector(".cards").textContent = data.content;
        console.log(data.content); */

        console.log(data);

    } catch (error) {
        console.log("error");
        document.querySelector(".cards").textContent = "Your subscription go bye bye";
    }
}
getData(URL);


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

/* const URL = `https://api.quoteable.io/random`;

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