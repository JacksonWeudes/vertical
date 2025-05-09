const menu = document.querySelector(".side-menu")
const overlay = document.querySelector("#overlay")
const loginScreen = document.getElementById("login-screen")
const exitbtn = document.getElementById("exit-btn")

function menuToggle() {
    if (menu.style.left === "-15rem") {
        menu.style.left = '0'
    }else {
        menu.style.left = '-15rem'
    }
}

function openLogin() {
    if (loginScreen.style.display === "none") {
        loginScreen.style.display = "block"
        overlay.style.display = "block"
        document.body.classList.add("no-scroll")
    }else {
        loginScreen.style.display = "none"
        overlay.style.display = "none"
        document.body.classList.remove("no-scroll")
    }
}

function closeLogin() {
        if (loginScreen.style.display === "block") {
        loginScreen.style.display = "none"
        overlay.style.display = "none"
        document.body.classList.remove("no-scroll")
    }
}