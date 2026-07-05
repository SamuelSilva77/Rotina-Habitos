//npx @tailwindcss/cli -i ./style.css -o ./output.css --watch

//BODY
let body = document.querySelector("body");

//ABRIR E FECHAR MENU

let menuButton = document.getElementById("menu");
let menu = document.getElementById("options");

let imagem = ""

menuButton.addEventListener("click", () => {
  menuButton.classList.add("opacity-0");

  setTimeout(() => {
    if (imagem == "img/closeWhite.png") {
      menuButton.src = "img/menuWhite.png";
      imagem = "img/menuWhite.png";
    } else {
      menuButton.src = "img/closeWhite.png";
      imagem = "img/closeWhite.png";
    }

    menuButton.classList.remove("opacity-0");
    
    menu.classList.toggle("opacity-0")
    menu.classList.toggle("pointer-events-none")
}, 200);
});
