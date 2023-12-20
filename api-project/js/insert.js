const DOMSelectors = {
    form: document.querySelector("#form")
}

function searched(){
    `<div class="inserts">
        <h1 class="playername">${DOMSelectors.username.value}</h1>
    </div>`
}
function clearfield(){
    DOMSelectors.username.value = "";
}
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    searched();
    clearfield();
});

export {searched};

