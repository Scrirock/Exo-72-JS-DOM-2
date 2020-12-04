let div = document.getElementsByClassName("name-tag");

for (let i = 0; i<div.length; i++){
    let newP = document.createElement("p");
    newP.innerHTML = "HELLO WORLD";
    div[i].append(newP);
}









