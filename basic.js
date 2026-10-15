let toggle = document.querySelector("button");
let currMode = "light";
toggle.addEventListener("click", ()=> {
    if(currMode == "light"){
        document.body.style.backgroundColor = 'black';
        currMode = "dark";
    } else {
        document.body.style.backgroundColor = 'white';
        currMode = "light";
    }
});