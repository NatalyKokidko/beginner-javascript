import { isValidColor } from "./colors";

function logWords(results) {
//console.log(results[results.length - 1][0].transcript);
}
export function handleResult({ results }) {
    logWords(results);
    const words = results[results.length - 1][0].transcript;
    // lowercase everything
    const color = words.toLowerCase();
    // strip any spases out
    color = color.replaceAll(/\s/g, '');
    // check if it is a valid color
    if(!isValidColor(color)) return;
    // if it is, then show the UI for that
    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add('got');
    console.log(colorSpan);
    console.log('This is a valid color');
    console.log(color);
    // change the backgrounnd color
    document.body.style.backgroundColor = color;
} 