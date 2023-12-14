const dennis = {
    name: "Dennis", //string
    age: 16, //Integer
};
//let x = Array.from(dennis.name)
//console.log(x);
/* for(let i = 0; i< dennis.name.length; i++){
    console.log(dennis.name[i]);
}
let i = 0;
while(i< dennis.name.length){
    console.log(dennis.name[i]);
    i++;
} */
/* function needle(name, search){
    if(name.includes(search)){
        return true;
    } else{
        return false;
    }
}
console.log(needle(dennis.name, "D"));
 */
//console.log(13 + Number("13"));
//console.log(dennis.name);

function sortsString(name){
    let x = [...name].sort();
    console.log(x);
}
sortsString("abcdefghhijklmnopqrstuvweopjg");
let x = [1, 2, 3];
let y = [4, 5, 6];
let z = [...x, ...y];
console.log(z);
function removeL(name){
    let x = Array.from(name);
    x.splice(-1);
    console.log(x);
}
removeL(dennis.name);
