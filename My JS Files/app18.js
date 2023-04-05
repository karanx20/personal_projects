const form = document.querySelector("#shelterForm");
const input = document.querySelector("#dogName");
const list = document.querySelector("#dogs");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const dogName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = dogName;
    list.append(newLI);
});