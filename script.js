'use strict'
const nav = document.querySelector('.nav')
const navLinkPar = document.querySelector('.nav__links')
const navLink = document.querySelectorAll('.nav__link')
const sideBar = document.querySelector('.sideBar')
const sideBarContents = document.getElementById('sideBar__contents');


sideBar.addEventListener('mouseenter', function (e) {
    // sideBarContents.style.transition = "all 2s"
    console.log(sideBarContents);
    sideBarContents.classList.remove('hidden')
})

sideBar.addEventListener('mouseleave', function (e) {
    console.log(sideBarContents);
    sideBarContents.classList.add('hidden')
})

const handleHover = function (event, opacity) {
    if (event.target.classList.contains('nav__link--text')) {
        const link = event.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link--text');
        const accounts = link.closest('.nav').querySelector('.nav__accounts');
        siblings.forEach(el => {
            if (el !== link) {
                el.style.opacity = opacity;
            }
        })
        accounts.style.opacity = opacity
    }
}

nav.addEventListener('mouseover', function (e) {
    handleHover(e, 0.5)
})

nav.addEventListener('mouseout', function (e) {
    handleHover(e, 1)
})