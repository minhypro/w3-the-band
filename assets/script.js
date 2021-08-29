const buyTicketBtns = document.querySelectorAll('.buy-ticket-btn')
const popUp = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const closeBtn1 = document.querySelector('.close-modal')
const closeBtn2 = document.querySelector('.close-btn')

buyTicketBtns.forEach(btn => {
    btn.addEventListener('click', openPopUp )
})

let Btns = [closeBtn1,closeBtn2];
[closeBtn1,closeBtn2].forEach(btn => {
    btn.addEventListener('click',closePopUp)
})

popUp.addEventListener('click', closePopUp)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

function openPopUp() {
    popUp.classList.add('open')
    // modalContainer.classList.add('open')
}

function closePopUp() {
    popUp.classList.remove('open')
    // modalContainer.classList.remove('open')
}

//Mobile
const header = document.getElementById('header')
const mobileMenu = document.getElementById('mobile-menu')
const headerHeight = header.clientHeight

mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight
    if (isClose) {
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
menuItems.forEach(menuItem => {
    let isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('sub-nav')
    
    menuItem.onclick = function (event) {
        if (isParentMenu) {
            event.preventDefault()
        } else {
            header.style.height = null
        }
    }


})