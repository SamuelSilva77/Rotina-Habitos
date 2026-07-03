//npx @tailwindcss/cli -i ./style.css -o ./output.css --watch

//ABRIR E FECHAR MENU

let menuButton = document.getElementById("menu")

menuButton.addEventListener("click", () => {
    menuButton.classList.add("opacity-0")

    setTimeout(() => {
        if(menuButton.src == "img/closeWhite.png"){
            menuButton.src = "img/menuWhite.png"
        }else{
            menuButton.src = "img/closeWhite.png"
        }
        

        menuButton.classList.remove("opacity-0")
        
    }, 200);

})