/*
* File: app.ts
* Author: Steili Roland
* Copyright: 2021, Steili Roland
* Group: Szoft II/ Nappali
* Date: 2021-10-27
* Github: https://github.com/SteiliRoland
*/

const sideInput = document.querySelector("#side") as HTMLInputElement;
const alphaInput = document.querySelector("#alpha") as HTMLInputElement;
const resultInput = document.querySelector("#result") as HTMLInputElement;

const calcButton = document.querySelector("#calcButton");

function calcRhombus(side: number, alpha: number):number {
    let radius = alpha * Math.PI/180;
    let result = 1.0/2.0 * side * Math.sin(radius);
    return result;
}

calcButton.addEventListener('click', event => {
    let side = Number(sideInput.value);
    let alpha = Number(alphaInput.value);
    let result = calcRhombus(side,alpha);
    console.log(result);
    resultInput.value = String(result.toFixed(2));

})
    
