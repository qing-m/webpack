import "./index.css";
import "./sass.scss";
import bgImage from "../public/bg.jpg";

const img = new Image();
img.src = bgImage;

document.getElementById("image").appendChild(img);

console.log("webpack");

const fn = () => {
  console.log(1111);
};

class Author {
  name = "ITEM";
  age = 18;
  email = "lxp_work@163.com";

  info = () => {
    return {
      name: this.name,
      age: this.age,
      email: this.email,
    };
  };
}

module.exports = Author;
