const menu = document.querySelector(".side-menu")
const overlay = document.querySelector('.overlay')

function menuToggle() {
    if (menu.style.left === '-15rem') {
        menu.style.left = '0'
        overlay.style.visibility = 'visible'
    }else {
        menu.style.left = '-15rem'
        overlay.style.visibility = 'hidden'
    }
}