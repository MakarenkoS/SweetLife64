'use strict'

const toggleButton = document.querySelector('.button-toggle')
const navigationElement = document.querySelector('.navigation')


class MobileMenuClass {
    constructor(menuButton, navigationMenu, classes = {}) {
        this.menuButton = menuButton;
        this.navigationMenu = navigationMenu; 
        this.openClass = classes.open;
        this.closeClass = classes.close;
        this.noJsClass = classes.noJs 
    }

    initialize = () => {
        this.removeNoJsClass();
        this.menuButton.addEventListener('click', this.toggleMenu)
    }

    removeNoJsClass = () => {
        this.navigationMenu.classList.remove(this.noJsClass)
    }

    changeClass = (remove, add) => {
        this.navigationMenu.classList.remove(remove)
        this.navigationMenu.classList.add(add)
        console.log('switched')
    }

    toggleMenu = () => {
        console.log(this.openClass)
        if (this.navigationMenu.classList.contains(this.openClass)) {
            this.changeClass(this.openClass, this.closeClass)
        } else {
            this.changeClass(this.closeClass, this.openClass)
        }
    }
}

const mobileMenu = new MobileMenuClass(toggleButton, navigationElement, {
    open: 'navigation--opened',
    close: 'navigation--closed',
    noJs: 'navigation--no-js'
})

mobileMenu.initialize()
