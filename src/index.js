import "./index.css";
import "./sass.scss";
import bgImage from "../public/bg.jpg";

const img = new Image();
img.src = bgImage;

document.getElementById("image").appendChild(img);

console.log("webpack");
