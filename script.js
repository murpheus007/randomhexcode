const hexadecimalNunmberSystem = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let button = document.getElementById("button");
let firstBox = document.getElementById("first_col_box");
let secondBox = document.getElementById("second_col_box");
let thirdBox = document.getElementById("third_col_box");
let firstHex = document.getElementById("first_hex_code");
let secondHex = document.getElementById("second_hex_code");
let thirdHex = document.getElementById("third_hex_code");

function randomCodeGenerator(){
    let hexCode = "#";
    for(let x = 0; x < 6; x++){
        hexCode += hexadecimalNunmberSystem[Math.floor(Math.random() * hexadecimalNunmberSystem.length)];
    }
    return hexCode;
}

button.addEventListener("click", function(){
    
    firstBox.style.background = randomCodeGenerator();
    firstHex.innerText = randomCodeGenerator();

    secondBox.style.background = randomCodeGenerator();
    secondHex.innerText = randomCodeGenerator();

    thirdBox.style.background = randomCodeGenerator();
    thirdHex.innerText = randomCodeGenerator();
})

