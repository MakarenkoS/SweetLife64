'use strict'

const toggleButton = document.querySelector('.button-toggle')
const navigationElement = document.querySelector('.navigation')
const goodsSection = document.querySelector('.goods')
const NAVIGATION_OPEN_CLASS = 'navigation--opened'
const NAVIGATION_CLOSE_CLASS = 'navigation--closed'
const NAVIGATION_NO_JS_CLASS = 'navigation--no-js'

const DESCRIPTION_BUTTON_CLASS = 'ticker__button'
const DESCRIPTION_INFO_CLASS = 'info'
const DESCRIPTION_NO_CLOSE_CLASS = 'info--no-close'
const DESCRIPTION_TOGGLE_CLASS = 'info--opened'


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
    }

    toggleMenu = () => {
        if (this.navigationMenu.classList.contains(this.openClass)) {
            this.changeClass(this.openClass, this.closeClass)
        } else {
            this.changeClass(this.closeClass, this.openClass)
        }
    }
}

class ShowDescriptions {
    constructor(sectionClass, buttonClass, infoClass, noCloseClass, toggleClass) {
        this.section = sectionClass
        this.button = buttonClass
        this.info = infoClass
        this.noClose = noCloseClass
        this.toggle = toggleClass
    }

    isMobile() {
        return window.screen.width < 768
    }

    initialize = () => {
        if (this.isMobile()) {
            this.removeNoCloseClass()
        }

        

        this.section.addEventListener('click', () => this.toggleDescription(event))
    }

    removeNoCloseClass = () => {
        this.section.querySelectorAll('.info').forEach(el => {
            el.classList.remove(this.noClose)
        })
    }

    toggleDescription = (event) => {
        if (event.target.closest('div').classList.contains(this.button)) {
            window.scrollBy(0, 100)
            if (this.isMobile()) {
                this.toggleClass(event.target.closest('div'))
            }

        }
    }

    toggleClass = (elem) => {
        const info = elem.parentElement.parentElement
            .querySelector(`.${this.info}`)
        info.classList.toggle(this.toggle)
        window.scrollBy(0, 110)
    }
}


const mobileMenu = new MobileMenuClass(toggleButton, navigationElement, {
    open: NAVIGATION_OPEN_CLASS,
    close: NAVIGATION_CLOSE_CLASS,
    noJs: NAVIGATION_NO_JS_CLASS
})

mobileMenu.initialize()

const showDescriptions = new ShowDescriptions(goodsSection,
    DESCRIPTION_BUTTON_CLASS,
    DESCRIPTION_INFO_CLASS,
    DESCRIPTION_NO_CLOSE_CLASS,
    DESCRIPTION_TOGGLE_CLASS
)

showDescriptions.initialize()
