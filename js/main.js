class handleMainNavigation{
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

        this.mainNavElements.hamburgerBtn.addEventListener("click", () => this.toggleNav())
        this.mainNavElements.navList.addEventListener("click", (e) => this.isNavLinkClicked(e))
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
}

const nav = document.querySelector(".nav")
const mainnav = new handleMainNavigation(nav);

class HandleSwiper {
    constructor(root, cards, buttonsWrap, gap = 0) {
        this.swiperWrap = root;
        this.swiperCards = [...cards];
        this.swiperButtonsWrap = buttonsWrap;

        const cardWidthNoGap = Math.floor(this.swiperCards[0].offsetWidth);
        this.cardWidth = cardWidthNoGap + gap;
        this.initialCardOffset = 0;

        if(this.swiperButtonsWrap){
            this.swiperButtonsWrap.addEventListener("click", (e) => this.detectClickedBtn(e));
        }
    }

    calcMaxOffset(){
        return (this.swiperCards.length - 1) * this.cardWidth * -1;
    }

    detectClickedBtn(e) {
        const button = e.target.closest("[data-direction]");
        if(!button) return;
        const direction = button.dataset.direction;

        if ((direction === "right" || direction === "left") && this.swiperCards.length > 1) {
            let index = direction === "right" ? -1 : 1;
            let newOffset = this.initialCardOffset + this.cardWidth * index;
            let maxOffset = this.calcMaxOffset();
            if (newOffset <= 0 && newOffset >= maxOffset) {
                this.initialCardOffset = newOffset;
                this.swipeCards();
            }
        }
    }

    swipeCards() {
        this.swiperCards.forEach(card => {
            card.style.transform = `translateX(${this.initialCardOffset}px)`;
        });
    }
}

const swiperOfferRoot = document.querySelector(".swiper--offert");
const swiperCards = swiperOfferRoot.querySelectorAll(".swiper__card");
const swiperButtonsWrap = document.querySelector('[data-info="buttons-offer"]');
const swiperOffert = new HandleSwiper(swiperOfferRoot, swiperCards, swiperButtonsWrap, 20);


const swiperTestimonialRoot = document.querySelector(".swiper--testimonial");
const swiperTestimonialCards = swiperTestimonialRoot.querySelectorAll(".swiper__card");
const swiperTestimonialButtonsWrap = document.querySelector('[data-info="buttons-testimonial"]');
const swiperTestimonialOffert = new HandleSwiper(
    swiperTestimonialRoot, swiperTestimonialCards,
    swiperTestimonialButtonsWrap, 20);