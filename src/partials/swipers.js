export class HandleSwiper {
    constructor(root, cards, buttonsWrap, gap = 0, swiperCrdWdth) {
        this.swiperWrap = root;
        this.swiperCards = [...cards];
        this.swiperButtonsWrap = buttonsWrap;

        const cardWidthNoGap = Math.floor(swiperCrdWdth);
        this.cardWidth = cardWidthNoGap + gap;
        this.initialCardOffset = 0;
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

    init(){
            if(this.swiperButtonsWrap){
                this.swiperButtonsWrap.addEventListener("click", (e) => this.detectClickedBtn(e));
            }
    }
}