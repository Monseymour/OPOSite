const navMenuItems = document.querySelectorAll(".navLink");
const navMenuIcon = document.querySelectorAll(".navLink img");


document.addEventListener("scroll", () => {
    const navMenu = document.querySelector("header");
    const logo = document.querySelector("header img");

    if (window.scrollY >= 10){
        navMenu.style.borderRadius = "0 0 0 0";
        navMenu.style.fontSize = "large";
        logo.style.height = "2.5rem";
        navMenuItems.forEach(point => {
            point.style.backgroundSize = "1.5rem";
            point.style.padding = "0.6rem 0.6rem";
        });
        navMenuIcon.forEach(point => {
            point.style.height = " 1.6rem";
        });
    } 
    else {
        navMenu.style.borderRadius = "0 0 2rem 2rem";
        navMenu.style.fontSize = "x-large";
        logo.style.height = "3rem";
        navMenuItems.forEach(point => {
            point.style.backgroundSize = "2rem";
            point.style.padding = "1rem 1rem";
        });
        navMenuIcon.forEach(point => {
            point.style.height = " 2rem";
        });
    }
});

