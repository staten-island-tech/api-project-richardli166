function input(){
    `<div class="inserts">
        <h1 class="playername">${DOMSelectors.username.value}</h1>
    </div>`
}
function clearfield(){
    DOMSelectors.username.value = "";
}
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    input();
    clearfield();
});

export {searched};
