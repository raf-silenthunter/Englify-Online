export class handleMainNavigation{
    constructor(root){
        this.mainNavElements = {
            nav: root,
            navList: document.querySelector(".nav__list"),
            navItems: document.querySelectorAll(".nav__item"),
            navLogo: document.querySelector(".nav__item--logo"),
            navLinks: document.querySelectorAll(".nav__link"),
            
            hamburgerBtn: root.querySelector(".nav__hamburger-btn"),
            hamburgerBtnItems: root.querySelectorAll(".hamburger-btn__item"),
        }
    }
    toggleNav(){
        if (this.mainNavElements.nav) {
            this.mainNavElements.nav.classList.contains("nav--nav-expanded") ? this.closeNav() : this.openNav();
        }
    }
    //spróbuj przerobić na update nav state
    openNav(){
        requestAnimationFrame(() => {
            this.mainNavElements.nav.classList.add("nav--nav-expanded");
            this.mainNavElements.navList.classList.add("nav__list--nav-expanded");
            this.mainNavElements.navItems.forEach((item) => item.classList.add("nav__item--nav-expanded"));
            this.mainNavElements.navLinks.forEach((item) => item.classList.add("nav__link--nav-expanded"));
            this.mainNavElements.hamburgerBtnItems.forEach((item) => item.classList.add("hamburger-btn__item--nav-expanded"));
        })
    }
    closeNav(){
        requestAnimationFrame(() => {
            this.mainNavElements.nav.classList.remove("nav--nav-expanded");
            this.mainNavElements.navList.classList.remove("nav__list--nav-expanded");
            this.mainNavElements.navItems.forEach((item) => item.classList.remove("nav__item--nav-expanded"));
            this.mainNavElements.navLinks.forEach((item) => item.classList.remove("nav__link--nav-expanded"));
            this.mainNavElements.hamburgerBtnItems.forEach((item) => item.classList.remove("hamburger-btn__item--nav-expanded"));
        })
    }
    isNavLinkClicked(e){
        if(e.target.matches(".nav__link--nav-expanded") || e.target.matches(".nav__logo")) this.closeNav();
    }

    init(){
        document.addEventListener("DOMContentLoaded", () => {
            this.mainNavElements.hamburgerBtn.addEventListener("click", () => this.toggleNav())
            this.mainNavElements.navList.addEventListener("click", (e) => this.isNavLinkClicked(e))
        })
    }
}