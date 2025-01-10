//adds the "open" class to the hamburger-icon and .menu-links. We then style each version to have a different appearance  
//querySelector queries the document for the given set of characters
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



