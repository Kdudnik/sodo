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
const dropDown = document.querySelector('#dropDown')
const menuOpener = document.querySelector('#menuOpener')
const menuCloser = document.querySelector('#menuCloser')

menuOpener.addEventListener('click', () => {
    menuOpener.classList.add('is-hidden')
    menuCloser.classList.remove('is-hidden')
    dropDown.classList.remove('is-hidden')
    navbar.classList.add('js-sticky')
    dropDown.classList.add('drop')
})

menuCloser.addEventListener('click', () => {
    menuCloser.classList.add('is-hidden')
    menuOpener.classList.remove('is-hidden')
    dropDown.classList.add('is-hidden')
    navbar.classList.remove('js-sticky')
    dropDown.classList.remove('drop')
})


// Anchor

let currentActive = document.getElementsByClassName('anchor--active')
console.log(currentActive)
const anchor = document.getElementsByClassName('anchor-wrapper')

anchor[0].addEventListener('click', (event) => {
    let target = event.target
    if(target.tagName == 'DIV') return;
    currentActive.classList.remove('anchor--active')
    target.classList.add('anchor--active')
    currentActive = target
})

// window.addEventListener('scroll', () => {
//     if(window.pageYOffset >= contact.offsetTop) {
//         currentActive.classList.remove('anchor--active')
//         anchorContact.classList.add('anchor--active')
//         currentActive = anchorContact
//     }

//     else if(window.pageYOffset >= idea.offsetTop) {
//         currentActive.classList.remove('anchor--active')
//         anchorIdea.classList.add('anchor--active')
//         currentActive = anchorIdea
//     }

//     else if(window.pageYOffset >= info.offsetTop) {
//         currentActive.classList.remove('anchor--active')
//         anchorInfo.classList.add('anchor--active')
//         currentActive = anchorInfo
//     }

//     else if(window.pageYOffset >= quote.offsetTop) {
//         currentActive.classList.remove('anchor--active')
//         anchorQuote.classList.add('anchor--active')
//         currentActive = anchorQuote
//     }

//     else if(window.pageYOffset >= pricing.offsetTop) {
//         currentActive.classList.remove('anchor--active')
//         anchorPricing.classList.add('anchor--active')
//         currentActive = anchorPricing
//     }

//     else if(window.pageYOffset >= cards.offsetTop) {
//         currentActive.classList.remove('anchor--active')
//         anchorCards.classList.add('anchor--active')
//         currentActive = anchorCards
//     }

//     else if(window.pageYOffset >= hero.offsetTop) {
//         currentActive.classList.remove('anchor--active')
//         anchorHero.classList.add('anchor--active')
//         currentActive = anchorHero
//     }
// })
