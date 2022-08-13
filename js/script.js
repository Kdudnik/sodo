// Sticky navbar

const navbar = document.querySelector('#navbarSticky')
const sticky = navbar.offsetTop
const hero = document.querySelector('#hero');

window.onscroll = function() {stickyFunc()};
function stickyFunc() {
    if (window.pageYOffset <= sticky) {
        navbar.classList.remove('js-sticky');
    }
    else {
        navbar.classList.add('js-sticky')
    }
}

// Modal

const modalLogin = document.querySelector("#modalLogin")
const modalRegistration = document.querySelector("#modalRegistration")
const modalOpen = document.querySelector("#modalTrigger")
const modalLoginClose = document.querySelector("#modalLoginClose")
const modalRegistrationClose = document.querySelector("#modalRegistrationClose")
const toLogin = document.querySelector("#toLogin")
const toRegistration = document.querySelector("#toRegistration")

modalOpen.addEventListener('click', () => {
    modalLogin.classList.remove('is-hidden')
})

modalLoginClose.addEventListener('click', () => {
    event.preventDefault()
    modalLogin.classList.add('is-hidden')
})

modalRegistrationClose.addEventListener('click', () => {
    event.preventDefault()
    modalRegistration.classList.add('is-hidden')
})

toLogin.addEventListener('click', () => {
    modalLogin.classList.remove('is-hidden')
    modalRegistration.classList.add('is-hidden')
})

toRegistration.addEventListener('click', () => {
    modalLogin.classList.add('is-hidden')
    modalRegistration.classList.remove('is-hidden')
})

// Mobile navbar

const navbarDrop = document.querySelector('#navbarDrop')
const menuOpener = document.querySelector('#menuOpener')
const menuCloser = document.querySelector('#menuCloser')

menuOpener.addEventListener('click', () => {
    menuOpener.classList.add('is-hidden')
    menuCloser.classList.remove('is-hidden')
    navbarDrop.classList.remove('is-hidden')
    navbar.classList.add('js-sticky')
    navbarDrop.classList.add('drop')
})

menuCloser.addEventListener('click', () => {
    menuCloser.classList.add('is-hidden')
    menuOpener.classList.remove('is-hidden')
    navbarDrop.classList.add('is-hidden')
    navbar.classList.remove('js-sticky')
    navbarDrop.classList.remove('drop')
})


// Anchor

const anchor = document.querySelector('.anchor-wrapper')
let activeChildIndex = 0
let currentActive = anchor.children[activeChildIndex]
const anchorSections = document.querySelectorAll('[data-anchor]')

anchor.addEventListener('click', (event) => {
    event.preventDefault()

    if(event.target.tagName !== 'A') return;
    const neededSectionTop = document.querySelector(`[data-anchor="${event.target.dataset.scrollTo}"]`).offsetTop
    window.scrollTo(0, neededSectionTop)
})

window.addEventListener('scroll', () => {
    anchorSections.forEach((section, i) => {
        const sectionTopLimit = section.offsetTop - 100;
        const sectionBottomLimit = section.offsetTop + section.clientHeight - 100;

        if(window.pageYOffset >= sectionTopLimit && window.pageYOffset <= sectionBottomLimit) {
            currentActive.classList.remove('anchor--active')
            anchor.children[i].classList.add('anchor--active')
            currentActive = anchor.children[i]
        }
    })
})