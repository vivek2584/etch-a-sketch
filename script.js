let validInput = false;
let n;
do{
    n = parseInt(prompt("Enter grid size between 1 & 100"));
    if(n >= 1 && n <= 100){
        validInput = true;
    }
}
while(!validInput);

const container = document.querySelector("#gridContainer");

const gridSize = 100/n; 

for(let i = 1; i <= n*n ; i++){
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `${gridSize}%`;
    div.style.height = `${gridSize}%`;
    container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
       grid.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    grids.forEach((grid) => {
        grid.style.backgroundColor = "white";
    });
});