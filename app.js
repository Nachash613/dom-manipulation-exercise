//first exercise
document.getElementById("container");
if (container) {
    console.log("container found")
} else {
    console.log("container not found")
}

//second exercie
let a = document.querySelector("#container")
console.log(a);

//third exercie
let b = document.getElementsByClassName("second")
console.log(b);

//fourth execise
let c = document.querySelector("ol .third");
console.log(c);

//fifth exercise
/* Deviated from shown solution because it was
replacing my text with Hello instead of adding Hello */
let foundDiv = document.querySelector("#container");

foundDiv.innerHTML += "Hello";

//sixth exercise
/* the second solution provided generated the class footermain
as a result of that added some debugging. if(footer) could have 
eliminated errors, but could produce undesired results */
let footer = document.querySelector(".footer");
footer.classList.add("main");
let d = footer.className;
console.log(d);

//seventh exercise
footer.classList.remove("main");
let e = footer.className;
console.log(e);

//eighth exercise
let newLi = document.createElement("li");

//ninth exercise
newLi.innerText = "four"

//tenth exercise
let list = document.querySelector("ul");
list.appendChild(newLi);

//eleventh exercise
let liInsideOl = document.querySelectorAll("ol li");

for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

//twelveth exercise
/* modified explicit solution to allow for some debugging */
if (footer) {
    footer.remove();
    console.log("Footer removed.");
} else {
    console.log("Footer element not found.");
}