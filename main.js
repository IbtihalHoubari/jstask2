var div = document.querySelector("div");
var largebtn = document.querySelector(".largebtn");
var smallbtn = document.querySelector(".smallbtn");
function larger(){
    div.classList.add("large");
}
function smaller(){
    div.classList.add("small");

}
largebtn.onclick = larger;
smallbtn.onclick = smaller;