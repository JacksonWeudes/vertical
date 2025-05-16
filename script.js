const overlay = document.getElementById("overlay")
const menu = document.querySelector(".side-menu")
const login = document.getElementById("login-screen")
const links = document.querySelectorAll(".link")

function openMenu(){
    login.style.display = "none"
    menu.style.left = "0"
    overlay.style.display = "block"
    document.body.classList.add("no-scroll")
}

function closeMenu(){
    menu.style.left = "-19rem"
    overlay.style.display = "none"
    document.body.classList.remove("no-scroll")
}

function openLogin(){
    menu.style.left = "-19rem"
    login.style.display = "block"
    overlay.style.display = "block"
    document.body.classList.add("no-scroll")
}

function closeLogin(){
    login.style.display = "none"
    overlay.style.display = "none"
    document.body.classList.remove("no-scroll")
}
