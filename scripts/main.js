'use strict'

const toggleButton = document.querySelector('.button-toggle')
const navigationElement = document.querySelector('.navigation')

const removeNoJsClass = () => {
    navigationElement.classList.remove('navigation--no-js')
}

const toggleMenu = () => {
    if (navigationElement.classList.contains('navigation--opened')) {
        navigationElement.classList.remove('navigation--opened')
        navigationElement.classList.add('navigation--closed')
    } else {
        navigationElement.classList.remove('navigation--closed')
        navigationElement.classList.add('navigation--opened')
    }
}

removeNoJsClass()
toggleButton.addEventListener('click', toggleMenu)