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