let color1 = document.getElementById("color");
let button = document.getElementById("button");
let wrap = document.getElementById("wrap");
let col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', color);

function color() {
    let result = "#";
    for (let i = 0; i < 6; i++) { // Corrected loop to iterate 6 times
        result += clickrandom();
    }
    console.log(result);
    wrap.style.backgroundColor = result;
    color1.innerHTML = result;
}

function clickrandom() {
    let colindex = Math.floor(Math.random() * 16);
    return col[colindex];
}
