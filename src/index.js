import App from "./App";
import style from "./style.css";

console.log("Default Path");

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;