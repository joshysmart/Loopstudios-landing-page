const menuButton = document.querySelector(".menu");
const navMenu = document.querySelector(".nav");

function toggleMenu(e) {
    const menuImg = menuButton.querySelector("img");
    if (menuButton.classList.contains("open")) {
        menuImg.src = "./images/icon-close.svg";
        menuButton.classList.remove("open");
        navMenu.classList.add("open-nav")

    } else {
        menuImg.src = "./images/icon-hamburger.svg";
        menuButton.classList.add("open");
        navMenu.classList.remove("open-nav")
    }
    // console.log(menuImg)
}

menuButton.addEventListener("click", toggleMenu);