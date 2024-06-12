class handleMainNavigation{
    constructor(root){
        this.mainNavElements = {
            nav: root,
            navList: document.querySelector(".nav__list"),
            navItems: document.querySelectorAll(".nav__item"),
            navLogo: document.querySelector(".nav__item--logo"),
            navLinks: document.querySelectorAll(".nav__link"),
        }
        this.mainNavHamburgerBtn = root.querySelector(".nav__hamburger-btn");
        this.mainNavHamburgerBtn.addEventListener("click", () => this.toggleNav())
    }
    toggleNav(){
        this.mainNavElements.nav.classList.toggle("nav--nav-expanded");
        this.mainNavElements.navList.classList.toggle("nav__list--nav-expanded");
        this.mainNavElements.navItems.forEach((item) => item.classList.toggle("nav__item--nav-expanded"));
        this.mainNavElements.navLinks.forEach((item) => item.classList.toggle("nav__link--nav-expanded"));
    }
}


const nav = document.querySelector(".nav")
const mainnav = new handleMainNavigation(nav);